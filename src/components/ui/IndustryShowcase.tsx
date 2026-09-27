'use client';

import React, { useState } from 'react';
import { ASHAIVA_INDUSTRIES, IndustryItem } from '@/lib/industriesData';
import { Building2, ShoppingBag, Home, Stethoscope, Laptop, Briefcase, Truck, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface IndustryShowcaseProps {
  onSelectIndustry: (name: string) => void;
}

export function IndustryShowcase({ onSelectIndustry }: IndustryShowcaseProps) {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(ASHAIVA_INDUSTRIES[0].id);

  const icons: Record<string, any> = {
    agencies: Building2,
    ecommerce: ShoppingBag,
    'real-estate': Home,
    clinics: Stethoscope,
    saas: Laptop,
    'professional-services': Briefcase,
    'operations-heavy': Truck,
    education: GraduationCap,
  };

  const active = ASHAIVA_INDUSTRIES.find((ind) => ind.id === activeIndustryId) || ASHAIVA_INDUSTRIES[0];
  const ActiveIcon = icons[active.id] || Building2;

  return (
    <div className="w-full">
      {/* Industry Horizontal Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
        {ASHAIVA_INDUSTRIES.map((ind) => {
          const Icon = icons[ind.id] || Building2;
          const isSelected = ind.id === active.id;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveIndustryId(ind.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-300 ${
                isSelected
                  ? 'bg-teal-500/15 border-teal-400 text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] scale-[1.03]'
                  : 'bg-obsidian-850 border-white/[0.06] text-slate-400 hover:text-white hover:border-white/[0.15]'
              }`}
            >
              <Icon className="w-5 h-5 mb-2" />
              <span className="font-mono text-[11px] leading-tight font-medium">
                {ind.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Industry Deep-Dive Card */}
      <div className="rounded-2xl bg-obsidian-850 border border-teal-500/30 p-6 lg:p-8 relative overflow-hidden shadow-2xl shadow-black/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-obsidian-800 border border-teal-500/40 flex items-center justify-center">
                <ActiveIcon className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-teal-400 tracking-widest uppercase">
                  INDUSTRY BLUEPRINT // {active.name.toUpperCase()}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {active.tagline}
                </h3>
              </div>
            </div>

            {/* Pain Point vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-obsidian-900 border border-rose-500/20">
                <span className="font-mono text-[10px] text-rose-400 uppercase tracking-wider block mb-1">
                  CURRENT OPERATIONAL BOTTLENECK:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {active.painPoint}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-900 border border-teal-500/20">
                <span className="font-mono text-[10px] text-teal-400 uppercase tracking-wider block mb-1">
                  ASHAIVA BESPOKE AUTOMATION:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {active.solution}
                </p>
              </div>
            </div>

            {/* Workflows deployed */}
            <div className="pt-2">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-2">
                DEPLOYED WORKFLOWS:
              </span>
              <div className="flex flex-wrap gap-2">
                {active.workflows.map((wf, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-obsidian-900 border border-white/[0.08] text-xs font-mono text-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    <span>{wf}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Highlight & CTA */}
          <div className="lg:col-span-4 rounded-xl bg-obsidian-900 border border-white/[0.08] p-6 text-center space-y-4">
            <span className="font-mono text-xs text-slate-400 uppercase block">
              MEASURED OPERATIONAL IMPACT
            </span>
            <p className="font-display font-bold text-3xl text-teal-300">
              {active.keyMetric}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Zero code required from your internal team. Deployed in under 14 days.
            </p>
            <button
              onClick={() => onSelectIndustry(active.name)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.35)]"
            >
              <span>Build for {active.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
