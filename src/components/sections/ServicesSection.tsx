'use client';

import React, { useState } from 'react';
import { servicesData, ServiceItem } from '@/data/services';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onOpenAudit: (serviceTitle?: string) => void;
}

export function ServicesSection({ onOpenAudit }: ServicesSectionProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <section id="services" className="pt-28 pb-12 px-6 sm:px-10 max-w-7xl mx-auto relative z-10">
      <div className="editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
        {/* Section Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
            <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
              CAPABILITIES · 10 CORE DISCIPLINES
            </span>
          </div>

          <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
            Architectural Systems.{' '}
            <span className="text-gold font-serif italic">Engineered for Scale.</span>
          </h2>

          <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 font-sans leading-relaxed">
            We build sovereign digital infrastructure that automates repetitive workflows, connects siloed enterprise software, and delivers exceptional web products.
          </p>
        </div>

        {/* 10 Services Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Services Navigation Dossier */}
          <div className="lg:col-span-5 space-y-2">
            {servicesData.map(service => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-gold/10 border-gold/60 shadow-[0_0_25px_rgba(200,169,126,0.18)] translate-x-2'
                      : 'bg-white/[0.02] border-white/[0.08] hover:border-gold/30 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-gold' : 'text-warm-stone/60'}`}>
                      {service.number}
                    </span>
                    <span className={`font-sans font-semibold text-sm sm:text-base tracking-tight ${isActive ? 'text-warm-ivory' : 'text-warm-stone/80'}`}>
                      {service.title}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-warm-stone/60 uppercase tracking-widest hidden sm:inline">
                    {service.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Architectural Dossier */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-xl bg-white/[0.03] border border-white/[0.1] relative">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-gold tracking-widest uppercase">
                SPECIFICATION · {activeService.number}
              </span>
              <span className="font-mono text-xs text-warm-stone/70 tracking-widest uppercase">
                {activeService.category}
              </span>
            </div>

            <h3 className="editorial-title text-3xl sm:text-4xl text-warm-ivory tracking-tight mb-4">
              {activeService.title}
            </h3>

            <p className="editorial-sub text-base text-warm-stone/90 font-sans leading-relaxed mb-8">
              {activeService.description}
            </p>

            {/* Core Architectural Deliverables */}
            <div className="space-y-3 mb-8">
              <span className="font-mono text-[11px] text-gold tracking-widest uppercase block mb-3 font-semibold">
                SYSTEM ARCHITECTURE &amp; DELIVERABLES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-sans text-sm text-warm-ivory/90">
                    <span className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Conduits */}
            <div className="space-y-3 mb-10 pt-6 border-t border-white/[0.08]">
              <span className="font-mono text-[11px] text-warm-stone/70 tracking-widest uppercase block mb-2">
                DEPLOYED TECHNOLOGIES
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-warm-stone">
                {activeService.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-sm bg-white/[0.04] border border-white/[0.08]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquire CTA */}
            <button
              onClick={() => onOpenAudit(activeService.title)}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-sm bg-gold text-architectural-950 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_25px_rgba(200,169,126,0.4)] active:scale-[0.98]"
            >
              <span>Inquire About This System</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
