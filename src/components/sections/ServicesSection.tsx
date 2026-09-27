'use client';

import React, { useState } from 'react';
import { servicesData } from '@/data/services';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenAudit: (serviceTitle?: string) => void;
}

export function ServicesSection({ onOpenAudit }: ServicesSectionProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <section
      id="services"
      className="py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10 font-sans"
    >
      <div className="space-y-4 mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-warm-ivory/[0.03] border border-gold/30 text-gold font-mono text-[10px] tracking-[0.25em] uppercase">
          <span>SPATIAL CAPABILITIES // 10 CORE DISCIPLINES</span>
        </div>
        <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
          Systems Engineered For{' '}
          <span className="text-gold">
            Effortless Velocity.
          </span>
        </h2>
        <p className="editorial-sub text-base text-warm-stone/80 max-w-2xl leading-relaxed">
          From autonomous multi-agent networks to custom high-performance web products, we build bespoke digital infrastructure integrated into your operational core.
        </p>
      </div>

      {/* 10 Services Editorial Master Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 10 Architectural Service Rows */}
        <div className="lg:col-span-6 space-y-2">
          {servicesData.map(service => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`w-full text-left p-5 rounded-sm transition-all duration-300 flex items-center justify-between border ${
                  isActive
                    ? 'bg-architectural-900 border-gold/50 shadow-[0_0_30px_rgba(200,169,126,0.12)] translate-x-2'
                    : 'bg-architectural-950/60 border-white/[0.06] hover:border-gold/30 hover:bg-architectural-900/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs font-semibold ${isActive ? 'text-gold' : 'text-warm-muted'}`}>
                    {service.number}
                  </span>
                  <span className={`font-sans font-medium text-base tracking-tight ${isActive ? 'text-warm-ivory' : 'text-warm-stone/80'}`}>
                    {service.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-warm-muted uppercase tracking-widest hidden sm:inline">
                    {service.category}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'text-gold translate-x-0.5 -translate-y-0.5' : 'text-warm-muted/40'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Architectural Detail Specification Card */}
        <div className="lg:col-span-6 sticky top-28">
          <div className="p-8 sm:p-10 rounded-sm bg-architectural-900/90 border border-gold/30 shadow-2xl relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between font-mono text-xs border-b border-white/[0.08] pb-4">
              <span className="text-gold font-medium uppercase tracking-widest text-[11px]">
                DISCIPLINE // {activeService.number}
              </span>
              <span className="text-warm-muted text-[11px]">{activeService.category}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-warm-ivory tracking-wide">
              {activeService.title}
            </h3>

            <p className="text-base text-warm-stone/85 font-sans leading-relaxed">
              {activeService.description}
            </p>

            {/* Architecture Scope Breakdown */}
            <div className="p-6 rounded-sm bg-architectural-950 border border-white/[0.08] space-y-3">
              <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] block">
                SYSTEM SPECIFICATIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {activeService.features.map(feat => (
                  <div key={feat} className="flex items-center gap-2 font-mono text-xs text-warm-stone/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/80" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Action */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeService.techStack.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-architectural-850 border border-white/[0.06] font-mono text-[10px] text-warm-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenAudit(activeService.title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gold text-architectural-950 font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_25px_rgba(200,169,126,0.35)] whitespace-nowrap"
              >
                <span>Deploy System</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
