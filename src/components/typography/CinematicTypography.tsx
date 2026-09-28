'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface CinematicTypographyProps {
  scrollProgress: number;
  onOpenAudit: () => void;
}

export function CinematicTypography({ scrollProgress, onOpenAudit }: CinematicTypographyProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse coordinates for subtle, luxury 3D card tilt & parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fade out smoothly as user scrolls toward the building (0.0 to 0.16)
  const opacity = Math.max(0, 1 - scrollProgress * 7.5);
  const translateY = scrollProgress * 140;

  // Kinetic typography calculations:
  // Mouse tilt angles
  const tiltX = -mouse.y * 7; // -7 to +7 deg
  const tiltY = mouse.x * 9;  // -9 to +9 deg
  const parallaxX = mouse.x * 12;
  const parallaxY = mouse.y * 12;

  // Scroll tracking expansion for subtitle (from 0.25em to 0.45em)
  const letterSpacing = `${0.25 + scrollProgress * 1.5}em`;

  if (opacity <= 0.02) return null;

  return (
    <div
      style={{
        opacity,
        transform: `translate3d(${parallaxX * 0.4}px, ${translateY + parallaxY * 0.4}px, 0)`,
        perspective: '1200px',
      }}
      className="transition-opacity duration-300 pointer-events-auto"
    >
      {/* 3D Kinetic Editorial Container */}
      <div
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="editorial-panel backdrop-blur-3xl bg-[#07090e]/90 border border-white/[0.14] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative overflow-hidden"
      >
        {/* Subtle Ambient Light Sheen */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"
          style={{
            transform: `translate3d(${mouse.x * 30}px, ${mouse.y * 30}px, 0)`,
          }}
        />

        {/* Studio Identity Tag */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_#c8a97e]" />
            <span
              style={{ letterSpacing }}
              className="font-mono text-[11px] text-gold uppercase font-semibold transition-all duration-300"
            >
              EST. 2024 · SYSTEMS ARCHITECTURE STUDIO
            </span>
          </div>
          <span className="font-mono text-[10px] text-warm-stone/70 tracking-widest hidden sm:inline">
            METROPOLIS · 11:30 AM
          </span>
        </div>

        {/* Kinetic Hero Display Headline */}
        <div className="space-y-2 mb-8">
          <h1 className="editorial-title text-4xl sm:text-6xl lg:text-7xl text-warm-ivory tracking-tight leading-[0.96]">
            WE ARCHITECT <br />
            <span className="text-gold font-serif italic">THE INVISIBLE ENGINES</span> <br />
            OF MODERN ENTERPRISE.
          </h1>
        </div>

        {/* Clear, High-Contrast Editorial Narrative */}
        <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 max-w-2xl font-sans leading-relaxed mb-10">
          Ashaiva engineers autonomous AI workflow pipelines, custom digital architectures, and high-performance digital systems for ambitious leadership teams. Founder-led, precision-crafted, and built for scale.
        </p>

        {/* Call to Actions & Scroll Guidance */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onOpenAudit}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-gold text-architectural-950 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_35px_rgba(200,169,126,0.5)] active:scale-[0.98]"
          >
            <span>Commission Architecture</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="#building"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-white/[0.06] border border-white/[0.14] text-warm-ivory font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/[0.12] hover:border-gold/40"
          >
            <span>Explore Journey</span>
            <ArrowDown className="w-3.5 h-3.5 text-gold animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
}
