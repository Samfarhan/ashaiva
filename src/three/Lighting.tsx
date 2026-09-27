'use client';

import React from 'react';

export function Lighting() {
  return (
    <>
      <hemisphereLight
        args={['#a2ccee', '#e4ded4', 0.9]}
      />
      <directionalLight
        position={[32, 45, 28]}
        color="#fffaf0"
        intensity={1.75}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
        shadow-camera-near={1}
        shadow-camera-far={120}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={40}
        shadow-camera-bottom={-40}
      />
      <directionalLight
        position={[-25, 25, -20]}
        color="#c8e2f8"
        intensity={0.45}
      />
      <pointLight
        position={[0.5, 9.5, -6]}
        color="#fff1db"
        intensity={1.6}
        distance={24}
        decay={2}
      />
      <pointLight
        position={[-4.5, 9.2, -9.5]}
        color="#ffeed4"
        intensity={1.2}
        distance={16}
        decay={2}
      />
    </>
  );
}
