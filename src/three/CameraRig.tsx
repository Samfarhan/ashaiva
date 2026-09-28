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
  const mousePos = useRef({ x: 0, y: 0 });
  const smoothedMouse = useRef({ x: 0, y: 0 });
  const currentTarget = useRef(new THREE.Vector3(0, 12, 0));
  const currentPos = useRef(new THREE.Vector3(0, 18.0, 48));

  // Pointer listener with normalized coordinates (-1 to 1)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);

    // Smooth steadicam inertia on mouse movement
    const mouseDamp = 1 - Math.exp(-3.5 * dt);
    smoothedMouse.current.x += (mousePos.current.x - smoothedMouse.current.x) * mouseDamp;
    smoothedMouse.current.y += (mousePos.current.y - smoothedMouse.current.y) * mouseDamp;

    // Sample continuous spline trajectory
    const { pos: splinePos, target: splineTarget, fov: targetFov } = interpolateCamera(scrollProgress);

    // Subtle, elegant mouse parallax (soft steadicam drift)
    const isCloseUp = scrollProgress > 0.6 && scrollProgress < 0.76;
    const parallaxFactor = isCloseUp ? 0.04 : 0.26;
    const mouseOffsetX = smoothedMouse.current.x * parallaxFactor;
    const mouseOffsetY = -smoothedMouse.current.y * parallaxFactor * 0.5;

    const desiredPos = new THREE.Vector3(
      splinePos.x + mouseOffsetX,
      splinePos.y + mouseOffsetY,
      splinePos.z
    );

    const desiredTarget = new THREE.Vector3(
      splineTarget.x + mouseOffsetX * 0.35,
      splineTarget.y + mouseOffsetY * 0.35,
      splineTarget.z
    );

    // Exponential smoothing for position and target: buttery smooth at all frame rates
    const posLerp = 1 - Math.exp(-4.8 * dt);
    currentPos.current.lerp(desiredPos, posLerp);

    const targetLerp = 1 - Math.exp(-5.2 * dt);
    currentTarget.current.lerp(desiredTarget, targetLerp);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);

    // Smooth FOV interpolation
    const perspCamera = camera as THREE.PerspectiveCamera;
    if (perspCamera.fov !== undefined) {
      const fovLerp = 1 - Math.exp(-3.8 * dt);
      perspCamera.fov += (targetFov - perspCamera.fov) * fovLerp;
      perspCamera.updateProjectionMatrix();
    }
  });

  return null;
}
