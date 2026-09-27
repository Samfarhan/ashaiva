'use client';

import React from 'react';

interface CinematicTypographyProps {
  scrollProgress: number;
  onOpenAudit: () => void;
}

export function CinematicTypography({ scrollProgress, onOpenAudit }: CinematicTypographyProps) {
  // Fade out hero typography as the camera pushes toward the building
  const heroOpacity = Math.max(0, Math.min(1, (0.16 - scrollProgress) / 0.08));

  if (heroOpacity <= 0) return null;

  return (
    <div
      style={{ opacity: heroOpacity }}
      className="transition-opacity duration-300 pointer-events-auto"
    >
      {/* Editorial Eyebrow Tag */}
      <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-sm bg-warm-ivory/[0.04] border border-gold/30 backdrop-blur-md mb-6 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <span className="font-mono text-[10px] text-gold tracking-[0.25em] uppercase">
          ASHAIVA · ARCHITECTURAL SYSTEMS
        </span>
      </div>

      {/* Cinematic Masked Display Typography */}
      <div className="space-y-1 mb-8 overflow-hidden select-none">
        <div className="overflow-hidden">
          <h1 className="editorial-title text-5xl sm:text-7xl lg:text-8xl text-warm-ivory font-medium tracking-tight">
            BUILD SYSTEMS
          </h1>
        </div>

        <div className="overflow-hidden">
          <h2 className="editorial-title text-5xl sm:text-7xl lg:text-8xl text-warm-ivory font-serif italic font-normal tracking-tight">
            THAT MOVE
          </h2>
        </div>

        <div className="overflow-hidden">
          <h2 className="editorial-title text-5xl sm:text-7xl lg:text-8xl text-gold font-medium tracking-tight">
            BUSINESS FORWARD.
          </h2>
        </div>
      </div>

      {/* Supporting Copy */}
      <p className="editorial-sub text-base sm:text-lg text-warm-stone/85 max-w-xl leading-relaxed mb-8 font-sans">
        ASHAIVA builds intelligent automation systems and digital experiences that help businesses operate with less friction and more clarity.
      </p>

      {/* Action CTAs */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={onOpenAudit}
          className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-sm bg-gold text-architectural-950 font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(200,169,126,0.35)]"
        >
          <span>Start a Project</span>
          <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </button>

        <a
          href="#building"
          className="inline-flex items-center gap-2 px-6 py-4 rounded-sm bg-architectural-900/80 border border-white/[0.12] text-warm-stone font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:border-gold/40 hover:text-warm-ivory"
        >
          <span>Explore ASHAIVA</span>
          <span className="text-xs">↓</span>
        </a>
      </div>
    </div>
  );
}
