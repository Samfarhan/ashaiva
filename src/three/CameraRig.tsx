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
  const currentPos = useRef(new THREE.Vector3(0, 18.5, 48));

  // Pointer event listener with normalized coordinates (-1 to +1)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    // Heavy smooth damping on mouse movement for cinematic steadicam inertia
    smoothedMouse.current.x = THREE.MathUtils.damp(
      smoothedMouse.current.x,
      mousePos.current.x,
      1.8,
      delta
    );
    smoothedMouse.current.y = THREE.MathUtils.damp(
      smoothedMouse.current.y,
      mousePos.current.y,
      1.8,
      delta
    );

    // Compute keyframe interpolated target position & lookAt
    const { pos: targetPos, target: lookTarget, fov: targetFov } = interpolateCamera(scrollProgress);

    // Subtle pointer parallax offset depending on scroll distance (tighter inside office, wider outdoors)
    const parallaxScale = scrollProgress > 0.55 && scrollProgress < 0.72 ? 0.08 : 0.45;
    const mouseOffsetX = smoothedMouse.current.x * parallaxScale;
    const mouseOffsetY = -smoothedMouse.current.y * parallaxScale * 0.6;

    const desiredPos = new THREE.Vector3(
      targetPos.x + mouseOffsetX,
      targetPos.y + mouseOffsetY,
      targetPos.z
    );

    const desiredTarget = new THREE.Vector3(
      lookTarget.x + mouseOffsetX * 0.4,
      lookTarget.y + mouseOffsetY * 0.4,
      lookTarget.z
    );

    // Smooth position & target interpolation with frame-rate independent damping
    currentPos.current.x = THREE.MathUtils.damp(currentPos.current.x, desiredPos.x, 3.2, delta);
    currentPos.current.y = THREE.MathUtils.damp(currentPos.current.y, desiredPos.y, 3.2, delta);
    currentPos.current.z = THREE.MathUtils.damp(currentPos.current.z, desiredPos.z, 3.2, delta);

    currentTarget.current.x = THREE.MathUtils.damp(currentTarget.current.x, desiredTarget.x, 3.5, delta);
    currentTarget.current.y = THREE.MathUtils.damp(currentTarget.current.y, desiredTarget.y, 3.5, delta);
    currentTarget.current.z = THREE.MathUtils.damp(currentTarget.current.z, desiredTarget.z, 3.5, delta);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);

    // Smooth FOV interpolation
    const perspCamera = camera as THREE.PerspectiveCamera;
    if (perspCamera.fov !== undefined) {
      perspCamera.fov = THREE.MathUtils.damp(perspCamera.fov, targetFov, 2.5, delta);
      perspCamera.updateProjectionMatrix();
    }
  });

  return null;
}
