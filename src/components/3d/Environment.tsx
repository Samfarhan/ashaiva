'use client';

import React from 'react';

export function SceneEnvironment() {
  return (
    <>
      <color attach="background" args={['#030609']} />
      <fog attach="fog" args={['#030609', 8, 38]} />

      {/* Ambient dark fill */}
      <ambientLight intensity={0.4} color="#0c1724" />

      {/* Primary Key / Rim Light */}
      <directionalLight
        position={[8, 12, 10]}
        intensity={1.2}
        color="#c8e4f5"
        castShadow={false}
      />

      {/* Cybernetic Accent Point Light */}
      <pointLight
        position={[0, 0, 0]}
        intensity={2.5}
        distance={15}
        color="#2dd4bf"
      />

      {/* Top soft fill */}
      <pointLight
        position={[-6, 8, -4]}
        intensity={0.8}
        distance={20}
        color="#38bdf8"
      />

      {/* Bottom rim kicker */}
      <pointLight
        position={[4, -6, -2]}
        intensity={0.6}
        distance={18}
        color="#14b8a6"
      />
    </>
  );
}
