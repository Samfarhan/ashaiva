'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function TeamSection() {
  return (
    <section id="team" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto relative z-10">
      <div className="editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
        {/* Section Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
            <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
              LEADERSHIP // FOUNDER-LED STUDIO
            </span>
          </div>

          <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
            Direct Founder Access.{' '}
            <span className="text-gold font-serif italic">Zero Agency Layers.</span>
          </h2>

          <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 font-sans leading-relaxed">
            At Ashaiva, you partner directly with the architects who design and build your systems. Every engagement is led personally by our two co-founders to guarantee architectural integrity and operational impact.
          </p>
        </div>

        {/* Exactly Two Co-Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* CO-FOUNDER 1: FARHAN KHAN */}
          <div className="group relative p-8 sm:p-10 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-gold/50 transition-all duration-400 hover:shadow-[0_15px_40px_rgba(200,169,126,0.12)]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-gold tracking-widest uppercase">
                CO-FOUNDER · LEAD
              </span>
              <span className="font-mono text-[10px] text-warm-stone/60 tracking-widest">
                SYSTEMS ARCHITECTURE
              </span>
            </div>

            <h3 className="editorial-title text-3xl sm:text-4xl text-warm-ivory tracking-tight mb-2 group-hover:text-gold transition-colors">
              FARHAN KHAN
            </h3>
            <div className="font-mono text-xs text-gold/80 tracking-widest uppercase mb-6">
              Co-Founder · Lead
            </div>

            <p className="editorial-sub text-sm sm:text-base text-warm-stone/90 font-sans leading-relaxed mb-8">
              Oversees autonomous AI agent networks, event-driven enterprise integrations, high-velocity CRM pipelines, and custom API infrastructure. Specializes in transforming fractured operational workflows into self-healing autonomous systems.
            </p>

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 font-mono text-[11px] text-warm-stone/80">
              <span className="px-3 py-1 rounded-sm bg-white/[0.04] border border-white/[0.08]">AI Agent Clusters</span>
              <span className="px-3 py-1 rounded-sm bg-white/[0.04] border border-white/[0.08]">API Architecture</span>
              <span className="px-3 py-1 rounded-sm bg-white/[0.04] border border-white/[0.08]">Event Pipelines</span>
            </div>
          </div>

          {/* CO-FOUNDER 2: MOHIT AGARWAL */}
          <div className="group relative p-8 sm:p-10 rounded-xl bg-white/[0.03] border border-white/[0.1] hover:border-gold/50 transition-all duration-400 hover:shadow-[0_15px_40px_rgba(200,169,126,0.12)]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-gold tracking-widest uppercase">
                CO-FOUNDER · LEAD
              </span>
              <span className="font-mono text-[10px] text-warm-stone/60 tracking-widest">
                DIGITAL PRODUCTS &amp; 3D
              </span>
            </div>

            <h3 className="editorial-title text-3xl sm:text-4xl text-warm-ivory tracking-tight mb-2 group-hover:text-gold transition-colors">
              MOHIT AGARWAL
            </h3>
            <div className="font-mono text-xs text-gold/80 tracking-widest uppercase mb-6">
              Co-Founder · Lead
            </div>

            <p className="editorial-sub text-sm sm:text-base text-warm-stone/90 font-sans leading-relaxed mb-8">
              Directs high-performance digital product engineering, interactive WebGL 3D environments, tactile interfaces, and custom frontend systems. Focuses on crafting digital experiences that fuse technical power with luxury editorial aesthetics.
            </p>

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 font-mono text-[11px] text-warm-stone/80">
              <span className="px-3 py-1 rounded-sm bg-white/[0.04] border border-white/[0.08]">WebGL &amp; 3D Systems</span>
              <span className="px-3 py-1 rounded-sm bg-white/[0.04] border border-white/[0.08]">Tactile Interface UI</span>
              <span className="px-3 py-1 rounded-sm bg-white/[0.04] border border-white/[0.08]">High-Performance Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
