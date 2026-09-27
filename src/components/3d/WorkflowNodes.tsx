'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WorkflowNodesProps {
  scrollProgress: number;
}

interface NodeData {
  id: string;
  label: string;
  chaoticPos: [number, number, number];
  organizedPos: [number, number, number];
  color: string;
}

export function WorkflowNodes({ scrollProgress }: WorkflowNodesProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Define 10 high-value business nodes with chaotic and organized coordinates
  const nodes: NodeData[] = useMemo(() => [
    { id: 'lead', label: 'INBOUND LEADS', chaoticPos: [-5.5, 3.8, -2], organizedPos: [-3.8, 1.8, 0.5], color: '#2dd4bf' },
    { id: 'crm', label: 'CRM PIPELINE', chaoticPos: [6.2, 2.5, -4], organizedPos: [3.8, 1.8, 0.5], color: '#38bdf8' },
    { id: 'inbox', label: 'AI INBOX', chaoticPos: [-4.8, -3.2, 2], organizedPos: [-4.2, -1.2, 0], color: '#2dd4bf' },
    { id: 'docs', label: 'DOC EXTRACTOR', chaoticPos: [5.2, -3.5, 3], organizedPos: [4.2, -1.2, 0], color: '#f59e0b' },
    { id: 'calendar', label: 'CALENDAR SYNC', chaoticPos: [-2.2, 4.6, 3], organizedPos: [-2.0, 3.2, -0.5], color: '#38bdf8' },
    { id: 'support', label: 'SUPPORT BOT', chaoticPos: [3.5, 4.2, -3], organizedPos: [2.0, 3.2, -0.5], color: '#2dd4bf' },
    { id: 'whatsapp', label: 'WHATSAPP API', chaoticPos: [-6.8, 0.2, 4], organizedPos: [-4.5, 0.2, -1.0], color: '#10b981' },
    { id: 'reporting', label: 'EXECUTIVE BI', chaoticPos: [6.5, -0.8, -2], organizedPos: [4.5, 0.2, -1.0], color: '#818cf8' },
    { id: 'billing', label: 'STRIPE / ERP', chaoticPos: [-1.5, -4.5, -3], organizedPos: [-1.8, -3.0, 0.8], color: '#2dd4bf' },
    { id: 'agents', label: 'AI AGENTS', chaoticPos: [2.2, -4.2, 2], organizedPos: [1.8, -3.0, 0.8], color: '#ec4899' },
  ], []);

  // Meshes ref map
  const meshRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    // Progress factor: 0 at top, 1 by 35% scroll
    const organizeFactor = THREE.MathUtils.smoothstep(scrollProgress, 0.1, 0.35);

    meshRefs.current.forEach((mesh, idx) => {
      if (!mesh) return;
      const node = nodes[idx];

      // Interpolate between chaotic and organized position
      const targetX = THREE.MathUtils.lerp(node.chaoticPos[0], node.organizedPos[0], organizeFactor);
      const targetY = THREE.MathUtils.lerp(node.chaoticPos[1], node.organizedPos[1], organizeFactor);
      const targetZ = THREE.MathUtils.lerp(node.chaoticPos[2], node.organizedPos[2], organizeFactor);

      // Add gentle floating motion
      const floatX = Math.sin(time * 0.8 + idx * 0.7) * (1 - organizeFactor * 0.7) * 0.3;
      const floatY = Math.cos(time * 0.9 + idx * 0.9) * 0.15;
      const floatZ = Math.sin(time * 0.6 + idx * 0.5) * (1 - organizeFactor * 0.7) * 0.2;

      mesh.position.x = targetX + floatX;
      mesh.position.y = targetY + floatY;
      mesh.position.z = targetZ + floatZ;

      // Slow rotation of each node
      mesh.rotation.y += delta * 0.6;
      mesh.rotation.x = Math.sin(time + idx) * 0.1;
    });

    if (groupRef.current && organizeFactor > 0.8) {
      // Synchronized subtle orbit once organized
      groupRef.current.rotation.y = time * 0.08 * (1 + scrollProgress * 0.5);
    }
  });

  const isConnected = scrollProgress > 0.22;

  return (
    <group ref={groupRef}>
      {nodes.map((node, idx) => (
        <group
          key={node.id}
          ref={(el) => {
            meshRefs.current[idx] = el;
          }}
          position={node.chaoticPos}
        >
          {/* Node Core Geometry */}
          <mesh>
            <boxGeometry args={[0.42, 0.42, 0.42]} />
            <meshStandardMaterial
              color="#0d1b2a"
              emissive={isConnected ? node.color : '#475569'}
              emissiveIntensity={isConnected ? 0.9 : 0.25}
              roughness={0.2}
              metalness={0.85}
            />
          </mesh>

          {/* Exterior Wireframe Cage */}
          <mesh>
            <boxGeometry args={[0.54, 0.54, 0.54]} />
            <meshBasicMaterial
              color={isConnected ? '#2dd4bf' : '#64748b'}
              wireframe
              transparent
              opacity={isConnected ? 0.6 : 0.2}
            />
          </mesh>

          {/* Orbiting Halo Ring */}
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <ringGeometry args={[0.48, 0.52, 24]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={isConnected ? 0.45 : 0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}
