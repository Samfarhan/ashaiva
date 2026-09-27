'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { interpolateCamera } from '@/animations/camera';

interface CameraRigProps {
  scrollProgress: number;
}

export function CameraRig({ scrollProgress }: CameraRigProps) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 18.5, 48.0));
  const currentTarget = useRef(new THREE.Vector3(0, 12.0, 0));
  const pointerOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (e: MouseEvent) => {
      pointerOffset.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', onPointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', onPointerMove);
  }, []);

  useFrame((_, delta) => {
    const { pos: targetPos, target: targetLookAt, fov: targetFov } = interpolateCamera(scrollProgress);

    const parallaxWeight = scrollProgress > 0.58 && scrollProgress < 0.72 ? 0.03 : 0.28;
    targetPos.x += pointerOffset.current.x * parallaxWeight;
    targetPos.y += pointerOffset.current.y * (parallaxWeight * 0.4);

    const dampingFactor = Math.min(delta * 2.8, 0.08);
    currentPos.current.lerp(targetPos, dampingFactor);
    currentTarget.current.lerp(targetLookAt, dampingFactor);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);

    if ('fov' in camera) {
      const persCamera = camera as THREE.PerspectiveCamera;
      persCamera.fov = THREE.MathUtils.lerp(persCamera.fov, targetFov, dampingFactor);
      persCamera.updateProjectionMatrix();
    }
  });

  return null;
}
