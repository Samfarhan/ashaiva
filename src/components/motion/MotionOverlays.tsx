'use client';

import React from 'react';

export function MotionOverlays() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none">
      {/* Subtle Architectural Corner Reticles */}
      <div className="absolute top-6 left-6 hidden md:block w-3 h-3 border-t border-l border-warm-ivory/15" />
      <div className="absolute top-6 right-6 hidden md:block w-3 h-3 border-t border-r border-warm-ivory/15" />
      <div className="absolute bottom-6 left-6 hidden md:block w-3 h-3 border-b border-l border-warm-ivory/15" />
      <div className="absolute bottom-6 right-6 hidden md:block w-3 h-3 border-b border-r border-warm-ivory/15" />

      {/* Subtle Lens Focal Data Indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 font-mono text-[9px] text-warm-stone/40 tracking-widest uppercase">
        <span>CINEMATIC ARCHITECTURE</span>
        <span>•</span>
        <span>35MM PRIME</span>
      </div>
    </div>
  );
}
