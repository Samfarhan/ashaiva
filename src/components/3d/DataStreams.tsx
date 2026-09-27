'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DataStreamsProps {
  scrollProgress: number;
}

interface Packet {
  start: THREE.Vector3;
  end: THREE.Vector3;
  progress: number;
  speed: number;
  color: THREE.Color;
}

export function DataStreams({ scrollProgress }: DataStreamsProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 36;

  const packets: Packet[] = useMemo(() => {
    const targets: [number, number, number][] = [
      [-3.8, 1.8, 0.5],
      [3.8, 1.8, 0.5],
      [-4.2, -1.2, 0],
      [4.2, -1.2, 0],
      [-2.0, 3.2, -0.5],
      [2.0, 3.2, -0.5],
      [-4.5, 0.2, -1.0],
      [4.5, 0.2, -1.0],
      [-1.8, -3.0, 0.8],
      [1.8, -3.0, 0.8],
    ];

    const origin = new THREE.Vector3(0, 0, 0);
    const teal = new THREE.Color('#2dd4bf');
    const sky = new THREE.Color('#38bdf8');
    const emerald = new THREE.Color('#34d399');

    const list: Packet[] = [];
    for (let i = 0; i < count; i++) {
      const targetPos = targets[i % targets.length];
      const targetVec = new THREE.Vector3(...targetPos);
      const isOutbound = i % 2 === 0;

      list.push({
        start: isOutbound ? origin : targetVec,
        end: isOutbound ? targetVec : origin,
        progress: Math.random(),
        speed: 0.35 + Math.random() * 0.45,
        color: i % 3 === 0 ? teal : i % 3 === 1 ? sky : emerald,
      });
    }
    return list;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Acceleration multiplier: in Automate & Growth, speed doubles
    const speedBoost = 1 + THREE.MathUtils.smoothstep(scrollProgress, 0.3, 0.7) * 2.2;

    packets.forEach((packet, i) => {
      packet.progress += delta * packet.speed * speedBoost;
      if (packet.progress > 1) {
        packet.progress = 0;
      }

      // Linear interpolation with subtle parabolic arc
      dummy.position.lerpVectors(packet.start, packet.end, packet.progress);
      // Arch height
      const arc = Math.sin(packet.progress * Math.PI) * 0.4;
      dummy.position.y += arc;

      // Pulse scale
      const scale = 0.08 + Math.sin(packet.progress * Math.PI) * 0.05;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Packets become active after chaos begins resolving (scroll > 0.2)
  const streamOpacity = THREE.MathUtils.clamp((scrollProgress - 0.2) * 3, 0, 0.95);

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      visible={scrollProgress > 0.18}
    >
      <sphereGeometry args={[0.7, 12, 12]} />
      <meshBasicMaterial
        color="#2dd4bf"
        transparent
        opacity={streamOpacity}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}
