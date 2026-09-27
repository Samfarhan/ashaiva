'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { ArrowUpRight, CheckCircle2, Cpu, Code2, Layers, Terminal } from 'lucide-react';

interface WorkSectionProps {
  onOpenAudit: (serviceName?: string) => void;
}

export function WorkSection({ onOpenAudit }: WorkSectionProps) {
  const [activeProject, setActiveProject] = useState<number>(0);
  const project = projectsData[activeProject];

  return (
    <section id="work" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>CASE STUDIES // PROVEN SYSTEMS</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
            Engineered Systems{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-300">
              In Production.
            </span>
          </h2>
          <p className="text-base text-slate-300 font-sans leading-relaxed">
            Examine how custom AI automation, API conduits, and high-performance WebGL applications transform business operations.
          </p>
        </div>

        {/* Project Selector Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {projectsData.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(idx)}
              className={`px-4 py-2.5 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                activeProject === idx
                  ? 'bg-teal-400 text-obsidian-950 font-bold shadow-[0_0_20px_rgba(45,212,191,0.35)]'
                  : 'bg-obsidian-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-teal-500/30'
              }`}
            >
              {p.number}
            </button>
          ))}
        </div>
      </div>

      {/* Active Project Card Layout */}
      <div className="p-8 sm:p-12 rounded-2xl bg-obsidian-900/90 border border-white/[0.1] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-sky-400 to-indigo-500" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Context & Metadata */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs text-teal-400">
              <span className="px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/30 uppercase">
                {project.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{project.clientType}</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              {project.title}
            </h3>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-obsidian-850/80 border border-white/[0.06] space-y-1">
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                  THE OPERATIONAL FRICTION:
                </span>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20 space-y-1">
                <span className="font-mono text-[11px] text-teal-400 uppercase tracking-wider block">
                  SYSTEM ARCHITECTURE ENGINEERED:
                </span>
                <p className="text-sm text-teal-200 font-sans leading-relaxed">
                  {project.systemBuilt}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Solution & Outcome */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  TECHNICAL EXECUTION
                </span>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-obsidian-850 border border-teal-500/30 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-teal-300 font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>QUALITATIVE OUTCOME</span>
                </div>
                <p className="text-sm text-slate-200 font-sans leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-2.5">
                STACK &amp; INTEGRATIONS UTILIZED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-slate-300"
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
