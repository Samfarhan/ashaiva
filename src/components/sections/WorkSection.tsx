'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { ArrowUpRight, Check } from 'lucide-react';

interface WorkSectionProps {
  onOpenAudit: (serviceName?: string) => void;
}

export function WorkSection({ onOpenAudit }: WorkSectionProps) {
  const [activeProject, setActiveProject] = useState<number>(0);
  const project = projectsData[activeProject];

  return (
    <section id="work" className="pt-12 pb-20 px-6 sm:px-10 max-w-7xl mx-auto relative z-10">
      <div className="editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
              <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
                SELECTED COMMISSIONS · CASE STUDIES
              </span>
            </div>

            <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
              Engineered Systems.{' '}
              <span className="text-gold font-serif italic">Verified Impact.</span>
            </h2>

            <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 font-sans leading-relaxed">
              Examine how custom automation architectures, API middleware conduits, and high-performance WebGL applications eliminate operational drag.
            </p>
          </div>

          {/* Project Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {projectsData.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(idx)}
                className={`px-5 py-2.5 rounded-sm font-mono text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap border ${
                  activeProject === idx
                    ? 'bg-gold text-architectural-950 font-bold border-gold shadow-[0_0_20px_rgba(200,169,126,0.35)]'
                    : 'bg-white/[0.03] border-white/[0.08] text-warm-stone hover:text-warm-ivory hover:border-gold/40'
                }`}
              >
                {p.number}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Dossier */}
        <div className="p-8 sm:p-12 rounded-xl bg-white/[0.03] border border-white/[0.1]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-1">
                {project.category}
              </span>
              <h3 className="editorial-title text-2xl sm:text-3xl lg:text-4xl text-warm-ivory tracking-tight">
                {project.title}
              </h3>
            </div>
            <div className="font-mono text-xs text-warm-stone/70 tracking-widest uppercase sm:text-right">
              <span className="block text-[10px] text-warm-stone/50">CLIENT SECTOR</span>
              {project.clientType}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            {/* The Operational Challenge */}
            <div className="lg:col-span-6 space-y-3 p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <span className="font-mono text-[11px] text-warm-stone/70 tracking-widest uppercase block font-semibold">
                THE OPERATIONAL CHALLENGE
              </span>
              <p className="editorial-sub text-sm sm:text-base text-warm-stone/90 font-sans leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Engineered Architecture */}
            <div className="lg:col-span-6 space-y-3 p-6 rounded-lg bg-gold/[0.03] border border-gold/20">
              <span className="font-mono text-[11px] text-gold tracking-widest uppercase block font-semibold">
                ENGINEERED ARCHITECTURE
              </span>
              <p className="editorial-sub text-sm sm:text-base text-warm-ivory/90 font-sans leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Business Outcome */}
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.08] mb-8">
            <span className="font-mono text-[11px] text-gold tracking-widest uppercase block mb-2 font-semibold">
              VERIFIED BUSINESS OUTCOME
            </span>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <p className="editorial-sub text-base text-warm-ivory font-sans leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Tech Stack & Inquire Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-warm-stone/80">
              <span className="text-[10px] text-warm-stone/50 uppercase tracking-widest mr-2">TECH STACK:</span>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-sm bg-white/[0.04] border border-white/[0.08]">
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => onOpenAudit(`Case Study: ${project.title}`)}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-sm bg-warm-ivory text-architectural-950 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-architectural-950"
            >
              <span>Build Similar System</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
