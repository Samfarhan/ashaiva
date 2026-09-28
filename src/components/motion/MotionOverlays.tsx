'use client';

import React from 'react';

export function MotionOverlays() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none">
      {/* Subtle Luxury Architectural Corner Crosshairs */}
      <div className="absolute top-6 left-6 text-white/20 font-mono text-[11px] leading-none hidden md:block">
        +
      </div>
      <div className="absolute top-6 right-6 text-white/20 font-mono text-[11px] leading-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-6 left-6 text-white/20 font-mono text-[11px] leading-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-6 right-6 text-white/20 font-mono text-[11px] leading-none hidden md:block">
        +
      </div>

      {/* Soft Vignette Depth */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />
    </div>
  );
}
