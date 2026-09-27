'use client';

import React, { useState } from 'react';
import { servicesData, ServiceItem } from '@/data/services';
import { ArrowUpRight, Cpu, Layers, Zap, Bot, Database, Globe, Lock, Terminal, Activity } from 'lucide-react';

interface ServicesSectionProps {
  onOpenAudit: (serviceTitle?: string) => void;
}

export function ServicesSection({ onOpenAudit }: ServicesSectionProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <section id="services" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      <div className="space-y-4 mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>FULL AUTOMATION SUITE // 10 CORE CAPABILITIES</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none">
          Systems Engineered For{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-sky-300">
            Modern Scale.
          </span>
        </h2>
        <p className="text-base text-slate-300 font-sans leading-relaxed">
          From autonomous multi-agent networks to custom WebGL applications, we engineer production-grade digital architecture tailored to your operational stack.
        </p>
      </div>

      {/* 10 Services Interactive Explorer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 10 Service Titles List */}
        <div className="lg:col-span-6 space-y-2">
          {servicesData.map(service => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                  isActive
                    ? 'bg-obsidian-900 border-teal-500/50 shadow-[0_0_25px_rgba(45,212,191,0.15)] translate-x-2'
                    : 'bg-obsidian-950/60 border-white/[0.06] hover:border-teal-500/30 hover:bg-obsidian-900/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-teal-400' : 'text-slate-500'}`}>
                    {service.number}
                  </span>
                  <span className={`font-display font-bold text-base tracking-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {service.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest hidden sm:inline">
                    {service.category}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-teal-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Service Interactive Card & Motion Graphic Visual */}
        <div className="lg:col-span-6 sticky top-28">
          <div className="p-8 sm:p-10 rounded-2xl bg-obsidian-900/95 border border-teal-500/40 shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-sky-400" />
            
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-bold uppercase">
                CAPABILITY // {activeService.number}
              </span>
              <span className="text-slate-400">{activeService.category}</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl text-white tracking-tight">
              {activeService.title}
            </h3>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              {activeService.description}
            </p>

            {/* Motion Graphic Diagram Box */}
            <div className="p-6 rounded-xl bg-obsidian-950 border border-white/[0.08] relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-teal-400 animate-spin" />
                  <span>VISUALIZATION ENGINE</span>
                </div>
                <span className="text-teal-400 font-mono">ACTIVE // RUNTIME</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {activeService.features.map((feat, idx) => (
                  <div key={feat} className="flex items-center gap-2 font-mono text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & CTA */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeService.techStack.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenAudit(activeService.title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-400 text-obsidian-950 font-bold font-mono text-xs tracking-wider uppercase transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] whitespace-nowrap"
              >
                <span>Deploy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
