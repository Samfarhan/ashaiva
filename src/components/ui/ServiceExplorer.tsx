'use client';

import React, { useState } from 'react';
import { ASHAIVA_SERVICES, ServiceItem } from '@/lib/servicesData';
import { ArrowUpRight, Cpu, CheckCircle2, ChevronRight, Zap, Terminal } from 'lucide-react';

interface ServiceExplorerProps {
  onSelectServiceForAudit: (serviceTitle: string) => void;
}

export function ServiceExplorer({ onSelectServiceForAudit }: ServiceExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontline' | 'Operations' | 'Intelligence' | 'Engineering'>('All');
  const [activeServiceId, setActiveServiceId] = useState<string>(ASHAIVA_SERVICES[0].id);

  const filteredServices = selectedCategory === 'All'
    ? ASHAIVA_SERVICES
    : ASHAIVA_SERVICES.filter((s) => s.category === selectedCategory);

  const activeService = ASHAIVA_SERVICES.find((s) => s.id === activeServiceId) || ASHAIVA_SERVICES[0];

  return (
    <div className="w-full">
      {/* Category Navigation Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {(['All', 'Frontline', 'Operations', 'Intelligence', 'Engineering'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 border ${
              selectedCategory === cat
                ? 'bg-teal-500/15 border-teal-400 text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.25)]'
                : 'bg-obsidian-850 border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.15]'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Two-Column OS Explorer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Service List */}
        <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredServices.map((service) => {
            const isSelected = service.id === activeService.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`group cursor-pointer rounded-xl p-4 transition-all duration-300 border text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-obsidian-800 border-teal-400 shadow-[0_0_25px_rgba(45,212,191,0.18)] translate-x-1'
                    : 'bg-obsidian-900/80 border-white/[0.06] hover:bg-obsidian-850 hover:border-white/[0.15]'
                }`}
              >
                {/* Left active accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-teal-400 transition-transform duration-300 ${
                    isSelected ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'
                  }`}
                />

                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] text-teal-400 font-semibold">
                      SYS-{service.number}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04]">
                      {service.category}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? 'text-teal-400 rotate-90' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </div>

                <h4 className="font-display font-semibold text-sm text-white group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-sans">
                  {service.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right: Active Service Deep-Dive Inspector Terminal */}
        <div className="lg:col-span-7 rounded-2xl bg-obsidian-850 border border-teal-500/30 p-6 lg:p-8 relative overflow-hidden shadow-2xl shadow-black/90">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-obsidian-800 border border-teal-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.25)]">
                <Cpu className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-teal-400 font-bold tracking-widest uppercase">
                  ARCHITECTURE SPEC // SYSTEM {activeService.number}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Impact Metric Badge */}
            <div className="text-right hidden sm:block">
              <span className="font-mono text-[10px] text-slate-400 block uppercase">
                {activeService.metrics.label}
              </span>
              <span className="font-display font-bold text-xl text-teal-300">
                {activeService.metrics.value}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="py-6 border-b border-white/[0.08] relative z-10">
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {activeService.fullDesc}
            </p>
            <div className="flex sm:hidden items-center justify-between p-3 rounded-lg bg-obsidian-900 border border-white/[0.06]">
              <span className="font-mono text-xs text-slate-400 uppercase">{activeService.metrics.label}</span>
              <span className="font-display font-bold text-base text-teal-300">{activeService.metrics.value}</span>
            </div>
          </div>

          {/* Visual Execution Flow Pipeline */}
          <div className="py-6 border-b border-white/[0.08] relative z-10">
            <h5 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-teal-400" />
              <span>AUTONOMOUS EXECUTION FLOW</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {activeService.flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-obsidian-900 border border-white/[0.06] p-3 text-left relative overflow-hidden"
                >
                  <span className="font-mono text-[10px] text-teal-400 font-semibold block mb-1">
                    STEP 0{idx + 1}
                  </span>
                  <span className="text-xs text-slate-200 font-medium leading-snug block">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Payload */}
          <div className="py-6 relative z-10 space-y-4">
            <div>
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-2">
                CONNECTED INFRASTRUCTURE:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeService.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-3 py-1 rounded bg-obsidian-900 border border-white/[0.08] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Payload Terminal */}
            <div className="rounded-xl bg-obsidian-950 border border-white/[0.08] p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" />
                  EVENT DISPATCH PAYLOAD
                </span>
                <span className="text-teal-400/80">POST /v1/workflow/trigger</span>
              </div>
              <pre className="text-teal-300/90 overflow-x-auto text-[11px]">
                {JSON.stringify(activeService.samplePayload, null, 2)}
              </pre>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <span className="text-xs text-slate-400 font-mono">
              Designed for enterprise uptime & zero data leakage.
            </span>
            <button
              onClick={() => onSelectServiceForAudit(activeService.title)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]"
            >
              <span>Deploy {activeService.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
