'use client';

import React from 'react';

export function Environment() {
  return (
    <>
      {/* Warm natural daylight sky color */}
      <color attach="background" args={['#dce5ed']} />

      {/* Atmospheric depth haze: clean foreground clarity with soft distant metropolis fade */}
      <fog attach="fog" args={['#d8e2eb', 25, 140]} />

      {/* Subtle sky dome light */}
      <hemisphereLight
        color="#f2f6fa"
        groundColor="#9e988c"
        intensity={0.85}
      />
    </>
  );
}
