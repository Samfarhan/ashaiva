'use client';

import React from 'react';

export function ArchitecturalLighting() {
  return (
    <>
      {/* Soft Ambient Dusk Fill */}
      <ambientLight color="#181c24" intensity={0.8} />

      {/* Warm Golden Hour / Dusk Directional Light */}
      <directionalLight
        position={[25, 35, 20]}
        color="#f3d1a0"
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Subtle Cool Sky Hemisphere Light */}
      <hemisphereLight
        args={['#242c3d', '#101217', 0.6]}
      />

      {/* Warm Interior Studio Glow (Accentuates building interior through glass) */}
      <pointLight
        position={[0, 4.5, -4]}
        color="#ffd294"
        intensity={2.2}
        distance={22}
        decay={2}
      />

      {/* Meeting Room Warm Pendant Light */}
      <pointLight
        position={[-4.5, 3.8, -8]}
        color="#ffe2b8"
        intensity={1.8}
        distance={15}
        decay={2}
      />

      {/* Street Lamp Pools of Warm Light */}
      <pointLight
        position={[-8, 3.5, 12]}
        color="#ffcc88"
        intensity={1.4}
        distance={14}
        decay={2}
      />
      <pointLight
        position={[8, 3.5, 12]}
        color="#ffcc88"
        intensity={1.4}
        distance={14}
        decay={2}
      />
    </>
  );
}
