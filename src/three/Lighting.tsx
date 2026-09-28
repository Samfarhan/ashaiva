'use client';

import React from 'react';

interface LightingProps {
  scrollProgress: number;
}

export function Lighting({ scrollProgress }: LightingProps) {
  // Indoor enhancement when camera enters the studio floor (0.30 to 0.85)
  const isIndoor = scrollProgress > 0.30 && scrollProgress < 0.85;

  return (
    <>
      {/* Primary Warm Sun (11:30 AM Golden Sunlight) */}
      <directionalLight
        position={[32, 52, 28]}
        intensity={2.6}
        color="#fff8ed"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={160}
        shadow-camera-left={-36}
        shadow-camera-right={36}
        shadow-camera-top={36}
        shadow-camera-bottom={-36}
        shadow-bias={-0.0002}
      />

      {/* Atmospheric Skylight Fill (Soft daytime sky dome) */}
      <directionalLight
        position={[-25, 32, -22]}
        intensity={0.95}
        color="#d2e4f7"
      />

      {/* Street & Ground Pavement Warm Bounce */}
      <directionalLight
        position={[0, -12, 12]}
        intensity={0.4}
        color="#e5ded2"
      />

      {/* Studio Floor Warm Architectural Ambient Light */}
      <pointLight
        position={[0, 9.6, -12]}
        intensity={isIndoor ? 2.2 : 0.8}
        distance={24}
        decay={1.8}
        color="#ffeacc"
      />

      {/* Gallery Wall Focused Downlight (Illuminates the posters and pinboard) */}
      <spotLight
        position={[-11, 9.8, -10]}
        target-position={[-13.8, 8.2, -10]}
        intensity={isIndoor ? 2.5 : 0.5}
        angle={Math.PI / 3}
        penumbra={0.7}
        color="#fff4e0"
        distance={15}
        decay={1.6}
      />

      {/* Central Data Display Illumination */}
      <spotLight
        position={[0, 9.8, -20]}
        target-position={[0, 8.4, -24.6]}
        intensity={isIndoor ? 2.8 : 0.6}
        angle={Math.PI / 3}
        penumbra={0.6}
        color="#ffe8cc"
        distance={12}
        decay={1.6}
      />

      {/* Right Corridor Gallery Wall Illumination */}
      <spotLight
        position={[3.2, 9.8, -5.5]}
        target-position={[5.2, 8.2, -5.5]}
        intensity={isIndoor ? 2.6 : 0.4}
        angle={Math.PI / 3}
        penumbra={0.7}
        color="#fff4e0"
        distance={10}
        decay={1.6}
      />
    </>
  );
}
