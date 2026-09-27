'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AutomationCoreProps {
  scrollProgress: number;
}

export function AutomationCore({ scrollProgress }: AutomationCoreProps) {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const crystalRef = useRef<THREE.Mesh>(null);
  const wireCrystalRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // In chaos mode (early scroll), motion is slightly jittery and eccentric.
    // In automated mode (later scroll), motion is crisp, harmonic, and fast.
    const harmonicFactor = THREE.MathUtils.clamp((scrollProgress - 0.2) / 0.5, 0, 1);
    const speedMultiplier = 1 + harmonicFactor * 2.5;

    if (coreRef.current) {
      // Floating hover bobbing
      coreRef.current.position.y = Math.sin(time * 1.5) * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.4 * speedMultiplier;
      ring1Ref.current.rotation.y += delta * 0.2 * speedMultiplier;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.5 * speedMultiplier;
      ring2Ref.current.rotation.z += delta * 0.3 * speedMultiplier;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.3 * speedMultiplier;
      ring3Ref.current.rotation.z -= delta * 0.6 * speedMultiplier;
    }

    if (crystalRef.current && wireCrystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.8 * speedMultiplier;
      crystalRef.current.rotation.x = Math.sin(time * 0.8) * 0.2;
      wireCrystalRef.current.rotation.y = crystalRef.current.rotation.y;
      wireCrystalRef.current.rotation.x = crystalRef.current.rotation.x;

      // Pulse scale
      const pulse = 1 + Math.sin(time * 3 * speedMultiplier) * (0.04 + harmonicFactor * 0.05);
      crystalRef.current.scale.set(pulse, pulse, pulse);
      wireCrystalRef.current.scale.set(pulse * 1.08, pulse * 1.08, pulse * 1.08);
    }
  });

  // Calculate dynamic colors based on state
  const isOrganized = scrollProgress > 0.25;
  const ringColor = isOrganized ? '#2dd4bf' : '#64748b';
  const crystalEmissive = isOrganized ? '#14b8a6' : '#334155';
  const crystalIntensity = 0.5 + Math.min(scrollProgress * 1.8, 2.0);

  return (
    <group ref={coreRef} position={[0, 0, 0]}>
      {/* Central Crystalline Core */}
      <mesh ref={crystalRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshPhysicalMaterial
          color="#0b1724"
          emissive={crystalEmissive}
          emissiveIntensity={crystalIntensity}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Holographic Wireframe Cage */}
      <mesh ref={wireCrystalRef}>
        <octahedronGeometry args={[1.12, 0]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#2dd4bf"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner Gimbal Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.9, 0.025, 16, 100]} />
        <meshStandardMaterial
          color={ringColor}
          emissive={ringColor}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Middle Gimbal Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={ringColor}
          emissive={ringColor}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>

      {/* Outer Gyroscopic Ring 3 with Segmented Marks */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.2, 0.035, 16, 120]} />
        <meshStandardMaterial
          color="#94a3b8"
          emissive={isOrganized ? '#2dd4bf' : '#475569'}
          emissiveIntensity={0.35}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Ambient Horizon Halo Disc */}
      <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.6, 2.65, 64]} />
        <meshBasicMaterial
          color="#2dd4bf"
          transparent
          opacity={0.35 + scrollProgress * 0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Floor Radial Shadow / Reflection Grid Base */}
      <mesh position={[0, -2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5.5, 32]} />
        <meshBasicMaterial
          color="#060c14"
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
