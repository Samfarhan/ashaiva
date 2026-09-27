'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingPanelsProps {
  scrollProgress: number;
}

export function FloatingPanels({ scrollProgress }: FloatingPanelsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const panel1Ref = useRef<THREE.Group>(null);
  const panel2Ref = useRef<THREE.Group>(null);
  const panel3Ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Floating panels emerge prominently between 45% and 80% scroll
    const enterFactor = THREE.MathUtils.smoothstep(scrollProgress, 0.42, 0.62);
    const exitFactor = 1 - THREE.MathUtils.smoothstep(scrollProgress, 0.78, 0.90);
    const visibility = enterFactor * exitFactor;

    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 0.9) * 0.12;
      // Slight perspective yaw rotation responding to scroll
      groupRef.current.rotation.y = -0.25 + scrollProgress * 0.5;
    }

    if (panel1Ref.current) {
      panel1Ref.current.position.y = 1.6 + Math.sin(time * 1.1) * 0.08;
      panel1Ref.current.rotation.x = 0.08 * Math.cos(time * 0.8);
      panel1Ref.current.scale.setScalar(visibility);
    }

    if (panel2Ref.current) {
      panel2Ref.current.position.y = -0.8 + Math.cos(time * 0.9) * 0.08;
      panel2Ref.current.rotation.z = -0.04 * Math.sin(time * 0.7);
      panel2Ref.current.scale.setScalar(visibility);
    }

    if (panel3Ref.current) {
      panel3Ref.current.position.y = 0.3 + Math.sin(time * 1.3) * 0.06;
      panel3Ref.current.scale.setScalar(visibility);
    }
  });

  return (
    <group ref={groupRef} position={[2.8, 0, 2]}>
      {/* Panel 1: Inbound Signal & Lead Triage */}
      <group ref={panel1Ref} position={[-0.4, 1.6, 0.8]} rotation={[-0.1, -0.2, 0.05]}>
        {/* Card Slab */}
        <mesh>
          <boxGeometry args={[3.2, 1.8, 0.08]} />
          <meshPhysicalMaterial
            color="#080e18"
            roughness={0.15}
            metalness={0.8}
            clearcoat={1.0}
            transparent
            opacity={0.92}
          />
        </mesh>
        {/* Glowing Rim Border */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[3.22, 1.82]} />
          <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.35} />
        </mesh>
        {/* Internal Screen Plane */}
        <mesh position={[0, 0, 0.042]}>
          <planeGeometry args={[3.0, 1.6]} />
          <meshBasicMaterial color="#0c1726" />
        </mesh>
        {/* Status Indicator LED */}
        <mesh position={[-1.25, 0.6, 0.05]}>
          <circleGeometry args={[0.06, 16]} />
          <meshBasicMaterial color="#2dd4bf" />
        </mesh>
      </group>

      {/* Panel 2: Vector Search & AI Reasoning Engine */}
      <group ref={panel2Ref} position={[0.2, -0.8, -0.4]} rotation={[0.08, -0.3, -0.04]}>
        <mesh>
          <boxGeometry args={[2.8, 1.5, 0.08]} />
          <meshPhysicalMaterial
            color="#0a121f"
            roughness={0.2}
            metalness={0.85}
            clearcoat={0.9}
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[2.82, 1.52]} />
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.042]}>
          <planeGeometry args={[2.65, 1.35]} />
          <meshBasicMaterial color="#0f1c2e" />
        </mesh>
        <mesh position={[-1.1, 0.5, 0.05]}>
          <circleGeometry args={[0.05, 16]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      </group>

      {/* Panel 3: Live Telemetry & Speed Monitor */}
      <group ref={panel3Ref} position={[-1.2, 0.3, -1.2]} rotation={[0.04, -0.15, 0.02]}>
        <mesh>
          <boxGeometry args={[2.4, 1.3, 0.06]} />
          <meshPhysicalMaterial
            color="#070d16"
            roughness={0.25}
            metalness={0.9}
            clearcoat={0.8}
            transparent
            opacity={0.88}
          />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[2.42, 1.32]} />
          <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}
