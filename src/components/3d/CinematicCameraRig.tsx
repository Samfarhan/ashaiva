'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CinematicCameraRigProps {
  scrollProgress: number;
}

// 10 Storyboard Keyframe Coordinates
const CAMERA_STORYBOARD = [
  // 0.00: SCENE 01 — THE CITY (High, Wide, Slow Dusk Establishing Shot)
  {
    progress: 0.0,
    pos: new THREE.Vector3(0, 9.2, 26.5),
    target: new THREE.Vector3(0, 4.2, 0),
    fov: 46,
  },
  // 0.15: SCENE 02 — APPROACH THE BUILDING
  {
    progress: 0.15,
    pos: new THREE.Vector3(0, 5.2, 16.0),
    target: new THREE.Vector3(0, 3.8, 1.0),
    fov: 43,
  },
  // 0.25: SCENE 03 — ASHAIVA IDENTITY & FACADE
  {
    progress: 0.25,
    pos: new THREE.Vector3(0, 3.4, 6.5),
    target: new THREE.Vector3(0, 3.1, 0.7),
    fov: 41,
  },
  // 0.35: SCENE 04 — ENTER THROUGH THE GLASS (Seamless physical glide past glass)
  {
    progress: 0.35,
    pos: new THREE.Vector3(0, 2.3, -0.9),
    target: new THREE.Vector3(0.5, 2.1, -5.5),
    fov: 39,
  },
  // 0.45: SCENE 05 / 06 — OFFICE FLOOR & FOREGROUND OCCLUSION
  {
    progress: 0.45,
    pos: new THREE.Vector3(0.9, 2.05, -3.6),
    target: new THREE.Vector3(2.2, 1.7, -6.4),
    fov: 38,
  },
  // 0.55: SCENE 07 — HUMAN MOMENT (Approaching seated person near window)
  {
    progress: 0.55,
    pos: new THREE.Vector3(2.45, 1.72, -5.2),
    target: new THREE.Vector3(3.12, 1.34, -6.18),
    fov: 35,
  },
  // 0.65: SCENE 08 — PHONE TRANSITION (Close-up entering phone screen)
  {
    progress: 0.65,
    pos: new THREE.Vector3(3.11, 1.48, -5.92),
    target: new THREE.Vector3(3.12, 1.34, -6.18),
    fov: 28,
  },
  // 0.72: SCENE 09 / 10 — ASHAIVA INSIDE PHONE (Full screen digital interface)
  {
    progress: 0.72,
    pos: new THREE.Vector3(3.12, 1.43, -6.01),
    target: new THREE.Vector3(3.12, 1.34, -6.18),
    fov: 23,
  },
  // 0.82: SCENE 11 / 12 / 13 — EXIT PHONE & SPATIAL SERVICES
  {
    progress: 0.82,
    pos: new THREE.Vector3(-1.4, 2.45, -9.2),
    target: new THREE.Vector3(-4.8, 2.2, -12.5),
    fov: 39,
  },
  // 0.92: SCENE 14 / 15 — WORK GALLERY & FOUNDERS
  {
    progress: 0.92,
    pos: new THREE.Vector3(0, 2.35, -14.6),
    target: new THREE.Vector3(0, 2.2, -18.2),
    fov: 38,
  },
  // 1.00: SCENE 16 — FINAL CTA & PANORAMIC NIGHT WINDOW
  {
    progress: 1.0,
    pos: new THREE.Vector3(0, 2.65, -19.4),
    target: new THREE.Vector3(0, 2.8, -36.0),
    fov: 46,
  },
];

export function CinematicCameraRig({ scrollProgress }: CinematicCameraRigProps) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 9.2, 26.5));
  const currentTarget = useRef(new THREE.Vector3(0, 4.2, 0));
  const pointerPos = useRef({ x: 0, y: 0 });

  // Subtle pointer parallax listener
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      pointerPos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    // 1. Calculate Target Keyframe from Scroll Progress
    const progress = Math.min(Math.max(scrollProgress, 0), 1);

    let segmentStart = CAMERA_STORYBOARD[0];
    let segmentEnd = CAMERA_STORYBOARD[1];

    for (let i = 0; i < CAMERA_STORYBOARD.length - 1; i++) {
      if (
        progress >= CAMERA_STORYBOARD[i].progress &&
        progress <= CAMERA_STORYBOARD[i + 1].progress
      ) {
        segmentStart = CAMERA_STORYBOARD[i];
        segmentEnd = CAMERA_STORYBOARD[i + 1];
        break;
      }
    }

    const segmentSpan = segmentEnd.progress - segmentStart.progress;
    const rawT = segmentSpan > 0 ? (progress - segmentStart.progress) / segmentSpan : 0;
    // Smooth cinematic cubic ease in-out
    const t = rawT < 0.5 ? 4 * rawT * rawT * rawT : 1 - Math.pow(-2 * rawT + 2, 3) / 2;

    const targetPos = new THREE.Vector3().lerpVectors(segmentStart.pos, segmentEnd.pos, t);
    const targetLookAt = new THREE.Vector3().lerpVectors(
      segmentStart.target,
      segmentEnd.target,
      t
    );
    const targetFov = THREE.MathUtils.lerp(segmentStart.fov, segmentEnd.fov, t);

    // 2. Add subtle architectural pointer parallax (never aggressive)
    const parallaxDamp = progress > 0.6 && progress < 0.75 ? 0.04 : 0.22;
    targetPos.x += pointerPos.current.x * parallaxDamp;
    targetPos.y += pointerPos.current.y * (parallaxDamp * 0.5);

    // 3. Physical Damped Interpolation (Smooth cinematic inertia)
    const damp = Math.min(delta * 2.8, 0.085);
    currentPos.current.lerp(targetPos, damp);
    currentTarget.current.lerp(targetLookAt, damp);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);

    if ('fov' in camera) {
      const persCamera = camera as THREE.PerspectiveCamera;
      persCamera.fov = THREE.MathUtils.lerp(persCamera.fov, targetFov, damp);
      persCamera.updateProjectionMatrix();
    }
  });

  return null;
}
