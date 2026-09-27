'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ConnectionLinesProps {
  scrollProgress: number;
}

export function ConnectionLines({ scrollProgress }: ConnectionLinesProps) {
  const linesRef = useRef<THREE.LineSegments>(null);

  // Define target endpoints connecting the core [0, 0, 0] to the nodes
  const nodeTargets = useMemo(() => [
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
  ], []);

  // Interconnected node-to-node topology lines for complete mesh appearance
  const meshPairs = useMemo(() => [
    [0, 4], [4, 5], [5, 1], [1, 7], [7, 9], [9, 8], [8, 6], [6, 2], [2, 0], [0, 1], [2, 3], [8, 9]
  ], []);

  const [positions, colors] = useMemo(() => {
    // Each line segment has 2 vertices (6 floats)
    const totalLines = nodeTargets.length + meshPairs.length;
    const pos = new Float32Array(totalLines * 2 * 3);
    const col = new Float32Array(totalLines * 2 * 3);

    let pIdx = 0;

    // 1. Spoke lines: Core to each node
    nodeTargets.forEach((target) => {
      // Vertex A (Core)
      pos[pIdx] = 0; pos[pIdx + 1] = 0; pos[pIdx + 2] = 0;
      col[pIdx] = 0.17; col[pIdx + 1] = 0.83; col[pIdx + 2] = 0.75; // #2dd4bf
      pIdx += 3;

      // Vertex B (Node)
      pos[pIdx] = target[0]; pos[pIdx + 1] = target[1]; pos[pIdx + 2] = target[2];
      col[pIdx] = 0.22; col[pIdx + 1] = 0.74; col[pIdx + 2] = 0.97; // #38bdf8
      pIdx += 3;
    });

    // 2. Peripheral network lines: Node to neighbor node
    meshPairs.forEach(([a, b]) => {
      const pA = nodeTargets[a];
      const pB = nodeTargets[b];

      pos[pIdx] = pA[0]; pos[pIdx + 1] = pA[1]; pos[pIdx + 2] = pA[2];
      col[pIdx] = 0.17; col[pIdx + 1] = 0.83; col[pIdx + 2] = 0.75;
      pIdx += 3;

      pos[pIdx] = pB[0]; pos[pIdx + 1] = pB[1]; pos[pIdx + 2] = pB[2];
      col[pIdx] = 0.17; col[pIdx + 1] = 0.83; col[pIdx + 2] = 0.75;
      pIdx += 3;
    });

    return [pos, col];
  }, [nodeTargets, meshPairs]);

  useFrame((state) => {
    if (!linesRef.current) return;
    const time = state.clock.getElapsedTime();
    // Rotate slightly once connected
    const connectProgress = THREE.MathUtils.smoothstep(scrollProgress, 0.2, 0.45);
    linesRef.current.rotation.y = time * 0.08 * connectProgress;
  });

  // Calculate dynamic opacity based on narrative stage
  // In chaos (0 - 0.2): opacity is very faint
  // In connect (0.2 - 0.4): opacity ramps up
  // In automate / intelligence: bright glowing lines
  const lineOpacity = THREE.MathUtils.clamp((scrollProgress - 0.15) * 2.2, 0.08, 0.75);

  return (
    <lineSegments ref={linesRef}>
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
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={lineOpacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}
