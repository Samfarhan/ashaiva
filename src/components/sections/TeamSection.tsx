'use client';

import React from 'react';

export function TeamSection() {
  return (
    <section
      id="leadership"
      className="py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10 font-sans"
    >
      <div className="space-y-4 mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-warm-ivory/[0.03] border border-gold/30 text-gold font-mono text-[10px] tracking-[0.25em] uppercase">
          <span>STUDIO LEADERSHIP</span>
        </div>
        <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
          Two Leads.{' '}
          <span className="text-gold">
            One Systems Discipline.
          </span>
        </h2>
        <p className="editorial-sub text-base text-warm-stone/80 max-w-2xl leading-relaxed">
          ASHAIVA operates as an agile, founder-led systems studio. We work directly with leadership teams to design, architect, and deploy intelligent automation infrastructure with architectural precision.
        </p>
      </div>

      {/* EXACTLY TWO FOUNDER IDENTITY PRESENTATIONS — EQUAL STATURE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* LEAD 01: FARHAN KHAN */}
        <div className="group relative p-8 sm:p-12 rounded-sm bg-architectural-900/85 border border-white/[0.08] hover:border-gold/50 transition-all duration-500">
          <div className="flex items-center justify-between mb-8 font-mono text-[11px] text-warm-muted">
            <span className="tracking-[0.2em] uppercase text-gold">
              01 // SYSTEMS & AUTOMATION
            </span>
            <span className="text-warm-muted/60">FARHAN KHAN</span>
          </div>

          <h3 className="font-serif font-normal text-3xl sm:text-4xl text-warm-ivory tracking-wide mb-2">
            FARHAN KHAN
          </h3>
          <div className="font-mono text-xs text-gold tracking-widest uppercase mb-6">
            Co-Founder · Lead
          </div>

          <p className="text-sm text-warm-stone/85 leading-relaxed mb-8 font-sans">
            Directs AI agent architectures, autonomous workflow pipelines, CRM event routing, and API integration frameworks across enterprise operations.
          </p>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 text-[11px] font-mono text-warm-muted">
            <span className="px-3 py-1 bg-architectural-850 border border-white/[0.06]">Autonomous Pipelines</span>
            <span className="px-3 py-1 bg-architectural-850 border border-white/[0.06]">AI Agents</span>
            <span className="px-3 py-1 bg-architectural-850 border border-white/[0.06]">API Conduits</span>
          </div>
        </div>

        {/* LEAD 02: MOHIT AGARWAL */}
        <div className="group relative p-8 sm:p-12 rounded-sm bg-architectural-900/85 border border-white/[0.08] hover:border-gold/50 transition-all duration-500">
          <div className="flex items-center justify-between mb-8 font-mono text-[11px] text-warm-muted">
            <span className="tracking-[0.2em] uppercase text-gold">
              02 // DIGITAL PRODUCTS & INTERACTION
            </span>
            <span className="text-warm-muted/60">MOHIT AGARWAL</span>
          </div>

          <h3 className="font-serif font-normal text-3xl sm:text-4xl text-warm-ivory tracking-wide mb-2">
            MOHIT AGARWAL
          </h3>
          <div className="font-mono text-xs text-gold tracking-widest uppercase mb-6">
            Co-Founder · Lead
          </div>

          <p className="text-sm text-warm-stone/85 leading-relaxed mb-8 font-sans">
            Directs high-performance web product engineering, WebGL spatial experiences, tactile software interfaces, and modern digital systems architecture.
          </p>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 text-[11px] font-mono text-warm-muted">
            <span className="px-3 py-1 bg-architectural-850 border border-white/[0.06]">Digital Products</span>
            <span className="px-3 py-1 bg-architectural-850 border border-white/[0.06]">3D WebGL Experiences</span>
            <span className="px-3 py-1 bg-architectural-850 border border-white/[0.06]">Frontend Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
