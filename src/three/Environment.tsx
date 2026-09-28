'use client';

import React from 'react';
import * as THREE from 'three';

export function Environment() {
  return (
    <>
      {/* Daytime Atmospheric Sky Color */}
      <color attach="background" args={['#dce5ed']} />

      {/* Realistic Daytime Atmospheric Fog */}
      {/* Near 30m, Far 140m gives clear foreground clarity and realistic distant city haze */}
      <fog attach="fog" args={['#d8e2eb', 25, 140]} />

      {/* Subtle Sky Hemisphere Ground Bounce */}
      <hemisphereLight
        color="#f2f6fa"
        groundColor="#9e988c"
        intensity={0.85}
      />
    </>
  );
}
