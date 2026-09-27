'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  scrollProgress?: number;
}

export function ParticleField({ count = 800, scrollProgress = 0 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate deterministic particles in a spatial volume
  const [positions, scales, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const scl = new Float32Array(count);
    const col = new Float32Array(count * 3);

    const teal = new THREE.Color('#2dd4bf');
    const sky = new THREE.Color('#38bdf8');
    const white = new THREE.Color('#e2e8f0');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Cylinder / spherical distribution around the center
      const radius = 4 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 28;

      pos[i3] = Math.cos(theta) * radius;
      pos[i3 + 1] = y;
      pos[i3 + 2] = Math.sin(theta) * radius - 4;

      scl[i] = Math.random() * 2.5 + 0.5;

      const mixed = Math.random();
      const c = mixed > 0.6 ? teal : mixed > 0.3 ? sky : white;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }

    return [pos, scl, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Gentle drift + scroll velocity response
    const speed = 0.05 + scrollProgress * 0.15;
    pointsRef.current.rotation.y += delta * speed;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
