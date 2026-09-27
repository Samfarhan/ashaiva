'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraRigProps {
  scrollProgress: number; // 0 to 1
}

interface CameraKeyframe {
  progress: number;
  pos: THREE.Vector3;
  target: THREE.Vector3;
  fov: number;
}

export function CameraRig({ scrollProgress }: CameraRigProps) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 0.8, 14));
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));

  // 10 cinematic camera states corresponding to the narrative
  const keyframes: CameraKeyframe[] = useMemo(() => [
    // STATE 01 (0.0): Wide establishing shot — Chaos exists
    { progress: 0.00, pos: new THREE.Vector3(0, 1.0, 13.5), target: new THREE.Vector3(0, 0, 0), fov: 45 },
    // STATE 02 (0.12): Slow push toward the automation core — Chaos unfolds
    { progress: 0.12, pos: new THREE.Vector3(0.6, 1.3, 11.0), target: new THREE.Vector3(0, 0.2, 0), fov: 44 },
    // STATE 03 (0.24): Orbit around connected workflow nodes — Snap to grid
    { progress: 0.24, pos: new THREE.Vector3(-2.6, 1.8, 9.2), target: new THREE.Vector3(-0.4, 0.1, 0), fov: 42 },
    // STATE 04 (0.36): Lateral move through data streams — Automate runs
    { progress: 0.36, pos: new THREE.Vector3(3.2, 0.8, 8.0), target: new THREE.Vector3(0.2, -0.1, 0), fov: 40 },
    // STATE 05 (0.50): Approach floating browser interface — AI Intelligence
    { progress: 0.50, pos: new THREE.Vector3(0.2, -0.3, 6.4), target: new THREE.Vector3(-0.2, -0.1, 2.5), fov: 38 },
    // STATE 06 (0.62): Browser interface rotates into perspective — Business systems
    { progress: 0.62, pos: new THREE.Vector3(-1.8, 0.4, 5.8), target: new THREE.Vector3(0.6, 0.0, 1.8), fov: 40 },
    // STATE 07 (0.72): Camera moves through the interface
    { progress: 0.72, pos: new THREE.Vector3(0.8, 0.2, 6.2), target: new THREE.Vector3(0, 0, 0), fov: 42 },
    // STATE 08 (0.82): Scene transforms into operational systems — Speed & Structure
    { progress: 0.82, pos: new THREE.Vector3(1.6, 1.2, 8.5), target: new THREE.Vector3(0, 0.1, 0), fov: 44 },
    // STATE 09 (0.92): Pull out and reveal the entire ASHAIVA system
    { progress: 0.92, pos: new THREE.Vector3(0.0, 2.2, 12.8), target: new THREE.Vector3(0, 0, 0), fov: 46 },
    // STATE 10 (1.00): Final controlled move into CTA — Persistent Engine
    { progress: 1.00, pos: new THREE.Vector3(0.0, 1.4, 13.8), target: new THREE.Vector3(0, 0.1, 0), fov: 45 },
  ], []);

  useFrame((state, delta) => {
    const clampedProgress = THREE.MathUtils.clamp(scrollProgress, 0, 1);

    // Find the two keyframes we are currently between
    let prevIndex = 0;
    for (let i = 0; i < keyframes.length - 1; i++) {
      if (clampedProgress >= keyframes[i].progress && clampedProgress <= keyframes[i + 1].progress) {
        prevIndex = i;
        break;
      }
    }
    const nextIndex = Math.min(prevIndex + 1, keyframes.length - 1);
    const kfA = keyframes[prevIndex];
    const kfB = keyframes[nextIndex];

    const range = Math.max(kfB.progress - kfA.progress, 0.0001);
    const t = THREE.MathUtils.smoothstep((clampedProgress - kfA.progress) / range, 0, 1);

    // Target positions
    const targetPos = new THREE.Vector3().lerpVectors(kfA.pos, kfB.pos, t);
    const targetLookAt = new THREE.Vector3().lerpVectors(kfA.target, kfB.target, t);

    // Subtle desktop mouse parallax: adds physical depth without jarring
    const parallaxX = state.pointer.x * 0.45;
    const parallaxY = state.pointer.y * 0.35;
    targetPos.x += parallaxX;
    targetPos.y += parallaxY;

    // Smooth damping (expensive, heavy feel)
    const dampFactor = Math.min(delta * 3.5, 1.0);
    currentPos.current.lerp(targetPos, dampFactor);
    currentTarget.current.lerp(targetLookAt, dampFactor);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);

    // FOV interpolation
    const targetFov = THREE.MathUtils.lerp(kfA.fov, kfB.fov, t);
    if ('fov' in camera) {
      const persCamera = camera as THREE.PerspectiveCamera;
      persCamera.fov = THREE.MathUtils.lerp(persCamera.fov, targetFov, dampFactor);
      persCamera.updateProjectionMatrix();
    }
  });

  return null;
}
