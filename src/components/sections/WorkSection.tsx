'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

interface WorkSectionProps {
  onOpenAudit: (serviceName?: string) => void;
}

export function WorkSection({ onOpenAudit }: WorkSectionProps) {
  const [activeProject, setActiveProject] = useState<number>(0);
  const project = projectsData[activeProject];

  return (
    <section
      id="work"
      className="py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10 font-sans"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-warm-ivory/[0.03] border border-gold/30 text-gold font-mono text-[10px] tracking-[0.25em] uppercase">
            <span>GALLERY INSTALLATIONS // PROVEN CONDUITS</span>
          </div>
          <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
            Systems in{' '}
            <span className="text-gold">
              Live Production.
            </span>
          </h2>
          <p className="editorial-sub text-base text-warm-stone/80 leading-relaxed">
            Examine how custom AI automation, sovereign API conduits, and high-performance WebGL applications operate at scale.
          </p>
        </div>

        {/* Gallery Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {projectsData.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(idx)}
              className={`px-4 py-2 rounded-sm font-mono text-xs tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                activeProject === idx
                  ? 'bg-gold text-architectural-950 font-semibold shadow-[0_0_20px_rgba(200,169,126,0.3)]'
                  : 'bg-architectural-900 border border-white/[0.08] text-warm-muted hover:text-warm-ivory hover:border-gold/40'
              }`}
            >
              {p.number}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Installation Layout */}
      <div className="p-8 sm:p-14 rounded-sm bg-architectural-900/90 border border-white/[0.08] shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Context & Metadata */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs text-gold">
              <span className="tracking-widest uppercase">{project.category}</span>
              <span className="text-warm-muted/40">•</span>
              <span className="text-warm-muted">{project.clientType}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-warm-ivory tracking-wide leading-tight">
              {project.title}
            </h3>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-sm bg-architectural-950 border border-white/[0.06] space-y-1">
                <span className="font-mono text-[10px] text-warm-muted uppercase tracking-[0.2em] block">
                  OPERATIONAL FRICTION:
                </span>
                <p className="text-sm text-warm-stone/85 leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-sm bg-gold/5 border border-gold/20 space-y-1">
                <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] block">
                  SYSTEM ARCHITECTURE ENGINEERED:
                </span>
                <p className="text-sm text-warm-ivory leading-relaxed font-sans">
                  {project.systemBuilt}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Execution & Qualitative Outcome */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-warm-muted uppercase tracking-[0.2em] block">
                  TECHNICAL EXECUTION
                </span>
                <p className="text-sm text-warm-stone/85 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>

              <div className="p-6 rounded-sm bg-architectural-850 border border-gold/30 space-y-2">
                <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] block">
                  QUALITATIVE OUTCOME
                </span>
                <p className="text-sm text-warm-ivory leading-relaxed font-sans font-medium">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Stack Pills */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="font-mono text-[10px] text-warm-muted uppercase tracking-[0.2em] block mb-2.5">
                STACK &amp; INTEGRATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-architectural-950 border border-white/[0.06] font-mono text-xs text-warm-stone/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
