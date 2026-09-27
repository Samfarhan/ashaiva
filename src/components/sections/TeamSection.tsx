'use client';

import React from 'react';
import { Cpu, Terminal, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export function TeamSection() {
  return (
    <section id="team" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      <div className="space-y-4 mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>FOUNDER-LED STUDIO</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
          Two Leaders.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-300">
            One Systems Approach.
          </span>
        </h2>
        <p className="text-base text-slate-300 font-sans max-w-2xl leading-relaxed">
          ASHAIVA operates as an agile, founder-led engineering studio. We work directly with leadership teams to design, build, and deploy high-impact AI automation infrastructure without layers of agency management.
        </p>
      </div>

      {/* EXACTLY TWO FOUNDER IDENTITY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FOUNDER 1: FARHAN KHAN */}
        <div className="group relative p-8 sm:p-10 rounded-2xl bg-obsidian-900/90 border border-white/[0.1] hover:border-teal-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)] hover:-translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center justify-between mb-8 font-mono text-xs text-slate-400">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-teal-300">
              LEAD 01 // ARCHITECTURE
            </span>
            <span className="text-slate-500">ID: FK-01</span>
          </div>

          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-2 group-hover:text-teal-200 transition-colors">
            FARHAN KHAN
          </h3>
          <div className="font-mono text-xs text-teal-400 font-medium tracking-widest uppercase mb-6">
            Co-Founder · Lead
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
            Spearheads AI agent architecture, custom LLM tool integration, speed-to-lead automation pipelines, and event-driven enterprise integrations for client operations.
          </p>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-obsidian-800 border border-white/[0.06]">AI Systems Architecture</span>
            <span className="px-2.5 py-1 rounded bg-obsidian-800 border border-white/[0.06]">Agent Workflows</span>
            <span className="px-2.5 py-1 rounded bg-obsidian-800 border border-white/[0.06]">API Engineering</span>
          </div>
        </div>

        {/* FOUNDER 2: MOHIT AGARWAL */}
        <div className="group relative p-8 sm:p-10 rounded-2xl bg-obsidian-900/90 border border-white/[0.1] hover:border-teal-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)] hover:-translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center justify-between mb-8 font-mono text-xs text-slate-400">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-teal-300">
              LEAD 02 // DIGITAL PRODUCTS
            </span>
            <span className="text-slate-500">ID: MA-02</span>
          </div>

          <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-2 group-hover:text-teal-200 transition-colors">
            MOHIT AGARWAL
          </h3>
          <div className="font-mono text-xs text-teal-400 font-medium tracking-widest uppercase mb-6">
            Co-Founder · Lead
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
            Directs high-performance web product engineering, WebGL 3D experience design, custom application frontends, and tactile user interface systems.
          </p>

          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-obsidian-800 border border-white/[0.06]">Web Product Engineering</span>
            <span className="px-2.5 py-1 rounded bg-obsidian-800 border border-white/[0.06]">WebGL &amp; 3D Design</span>
            <span className="px-2.5 py-1 rounded bg-obsidian-800 border border-white/[0.06]">UI Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
