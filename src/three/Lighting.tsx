'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';

interface LightingProps {
  scrollProgress: number;
}

export function Lighting({ scrollProgress }: LightingProps) {
  // Indoor transition: when inside office (scroll 0.35 to 0.75), increase warm interior key lighting
  const isIndoor = scrollProgress > 0.32 && scrollProgress < 0.78;
  const interiorIntensity = isIndoor ? 1.4 : 0.6;

  return (
    <>
      {/* Primary Daytime Sunlight (Sun at approx 11:30 AM) */}
      <directionalLight
        position={[28, 48, 24]}
        intensity={2.4}
        color="#fff6eb"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={160}
        shadow-camera-left={-35}
        shadow-camera-right={35}
        shadow-camera-top={35}
        shadow-camera-bottom={-35}
        shadow-bias={-0.0003}
      />

      {/* Sky Ambient Fill Light (Soft cool skylight) */}
      <directionalLight
        position={[-22, 28, -20]}
        intensity={0.8}
        color="#c8ddf0"
      />

      {/* Ground Bounce Light (Warm street & pavement reflection) */}
      <directionalLight
        position={[0, -10, 10]}
        intensity={0.35}
        color="#e4dcd0"
      />

      {/* 3rd-Floor Studio Interior Warm Architectural Illumination */}
      <pointLight
        position={[2.5, 9.2, -7.5]}
        intensity={interiorIntensity * 1.8}
        distance={18}
        decay={2}
        color="#ffe8cc"
      />

      {/* Human Workstation Focus Key Light */}
      <spotLight
        position={[3.8, 8.8, -7.2]}
        target-position={[3.6, 7.0, -8.2]}
        intensity={interiorIntensity * 2.2}
        angle={Math.PI / 4}
        penumbra={0.6}
        color="#fff0d9"
        distance={6}
        decay={1.8}
      />
    </>
  );
}
