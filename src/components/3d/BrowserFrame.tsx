'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BrowserFrameProps {
  scrollProgress: number;
}

export function BrowserFrame({ scrollProgress }: BrowserFrameProps) {
  const frameRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!frameRef.current) return;
    const time = state.clock.getElapsedTime();

    // Browser frame is most prominent between 0.48 and 0.76 scroll
    const enterFactor = THREE.MathUtils.smoothstep(scrollProgress, 0.42, 0.58);
    const exitFactor = 1 - THREE.MathUtils.smoothstep(scrollProgress, 0.74, 0.88);
    const active = enterFactor * exitFactor;

    // Perspective rotation based on scroll state 05 & 06
    frameRef.current.position.y = -0.2 + Math.sin(time * 0.8) * 0.05;
    frameRef.current.rotation.y = -0.4 + scrollProgress * 0.7;
    frameRef.current.rotation.x = 0.05 + Math.sin(time * 0.5) * 0.02;

    // Scale dynamically
    frameRef.current.scale.setScalar(Math.max(active, 0.001));
  });

  return (
    <group ref={frameRef} position={[-0.8, -0.2, 3]}>
      {/* Outer Metallic Bezel */}
      <mesh>
        <boxGeometry args={[4.8, 3.2, 0.06]} />
        <meshPhysicalMaterial
          color="#060b12"
          roughness={0.2}
          metalness={0.9}
          clearcoat={1.0}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Screen Inset */}
      <mesh position={[0, -0.1, 0.035]}>
        <planeGeometry args={[4.6, 2.7]} />
        <meshBasicMaterial color="#091320" />
      </mesh>

      {/* Top Header Bar */}
      <mesh position={[0, 1.35, 0.035]}>
        <planeGeometry args={[4.6, 0.35]} />
        <meshBasicMaterial color="#0d1b2b" />
      </mesh>

      {/* Window Controls (Red, Yellow, Green subtle jewel LEDs) */}
      <mesh position={[-2.1, 1.35, 0.04]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#f87171" />
      </mesh>
      <mesh position={[-1.98, 1.35, 0.04]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>
      <mesh position={[-1.86, 1.35, 0.04]}>
        <circleGeometry args={[0.04, 16]} />
        <meshBasicMaterial color="#34d399" />
      </mesh>

      {/* Top Status Capsule Pill */}
      <mesh position={[0, 1.35, 0.04]}>
        <planeGeometry args={[1.8, 0.18]} />
        <meshBasicMaterial color="#132438" />
      </mesh>

      {/* Frame Accent Glow Border */}
      <mesh position={[0, 0, 0.032]}>
        <planeGeometry args={[4.82, 3.22]} />
        <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}
