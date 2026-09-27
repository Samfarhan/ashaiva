'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, Check } from 'lucide-react';

interface PhoneInteractiveExperienceProps {
  isVisible: boolean;
  onOpenAudit: (serviceTitle?: string) => void;
  onExitPhone: () => void;
}

export function PhoneInteractiveExperience({
  isVisible,
  onOpenAudit,
  onExitPhone,
}: PhoneInteractiveExperienceProps) {
  const [activeTab, setActiveTab] = useState<'systems' | 'services' | 'team'>('systems');

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6 bg-architectural-950/70 backdrop-blur-xl animate-fade-in font-sans">
      {/* Smartphone Viewport Simulation Frame */}
      <div className="relative w-full max-w-[390px] h-[780px] max-h-[92vh] rounded-[48px] bg-[#f8f6f0] border-[10px] border-[#1e2025] shadow-2xl flex flex-col overflow-hidden text-architectural-950 select-none">
        {/* Dynamic Island Status Capsule */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#16171b] rounded-full z-20 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-gold/80" />
        </div>

        {/* Mobile Header Bar */}
        <div className="pt-12 px-6 pb-4 flex items-center justify-between border-b border-black/5 bg-[#f8f6f0]/95 backdrop-blur-md sticky top-0 z-10">
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-lg tracking-[0.2em] text-architectural-950">
              ASHAIVA
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] text-gold uppercase -mt-0.5">
              MOBILE CONDUIT
            </span>
          </div>

          <button
            onClick={onExitPhone}
            className="px-3 py-1 rounded-full bg-black/5 hover:bg-black/10 font-mono text-[10px] text-neutral-600 transition-colors"
          >
            Return to Studio
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-black/[0.03] border-b border-black/5 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('systems')}
            className={`pb-1 transition-colors ${
              activeTab === 'systems' ? 'text-gold border-b-2 border-gold font-bold' : 'text-neutral-500'
            }`}
          >
            Systems
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`pb-1 transition-colors ${
              activeTab === 'services' ? 'text-gold border-b-2 border-gold font-bold' : 'text-neutral-500'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`pb-1 transition-colors ${
              activeTab === 'team' ? 'text-gold border-b-2 border-gold font-bold' : 'text-neutral-500'
            }`}
          >
            Leadership
          </button>
        </div>

        {/* Scrollable Mobile Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: SYSTEMS */}
          {activeTab === 'systems' && (
            <div className="space-y-4 animate-fade-in">
              <span className="font-mono text-[9px] text-gold tracking-widest uppercase block">
                01 // CORE ARCHITECTURE
              </span>
              <h4 className="font-serif text-2xl text-architectural-950 leading-tight">
                Autonomous Workflows. Zero Human Drag.
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                ASHAIVA replaces disconnected tools, manual spreadsheets, and delayed inboxes with unified, event-driven automated pipelines.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm space-y-1">
                  <div className="font-mono text-[10px] text-gold font-semibold uppercase">01 · Autonomous Agents</div>
                  <div className="text-xs font-medium text-neutral-800">Domain-trained AI agents executing routine tasks 24/7.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm space-y-1">
                  <div className="font-mono text-[10px] text-gold font-semibold uppercase">02 · Speed-to-Lead</div>
                  <div className="text-xs font-medium text-neutral-800">Inbound sales inquiry qualification in under 20 seconds.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm space-y-1">
                  <div className="font-mono text-[10px] text-gold font-semibold uppercase">03 · Unified CRM Sync</div>
                  <div className="text-xs font-medium text-neutral-800">Bi-directional real-time data sync across all software.</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-4 animate-fade-in">
              <span className="font-mono text-[9px] text-gold tracking-widest uppercase block">
                02 // CAPABILITIES
              </span>
              <h4 className="font-serif text-2xl text-architectural-950 leading-tight">
                Bespoke Systems Engineering
              </h4>

              <div className="divide-y divide-black/5">
                {[
                  'AI Automation Pipelines',
                  'Autonomous AI Agents',
                  'Workflow Automation',
                  'CRM & Lead Infrastructure',
                  'API & SaaS Integrations',
                  'Custom Web Applications',
                ].map((s) => (
                  <button
                    key={s}
                    onClick={() => onOpenAudit(s)}
                    className="w-full py-3 flex items-center justify-between text-left group"
                  >
                    <span className="text-xs font-medium text-neutral-800 group-hover:text-gold transition-colors">
                      {s}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-gold transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LEADERSHIP */}
          {activeTab === 'team' && (
            <div className="space-y-4 animate-fade-in">
              <span className="font-mono text-[9px] text-gold tracking-widest uppercase block">
                03 // FOUNDERS
              </span>
              <h4 className="font-serif text-2xl text-architectural-950 leading-tight">
                Founder-Led Studio
              </h4>

              {/* Farhan Khan */}
              <div className="p-4 rounded-xl bg-white border border-black/5 shadow-sm space-y-1">
                <div className="font-serif font-semibold text-base text-architectural-950">FARHAN KHAN</div>
                <div className="font-mono text-[10px] text-gold uppercase tracking-wider">Co-Founder · Lead</div>
                <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                  Directs AI systems architecture, agent execution, speed-to-lead pipelines, and enterprise API conduits.
                </p>
              </div>

              {/* Mohit Agarwal */}
              <div className="p-4 rounded-xl bg-white border border-black/5 shadow-sm space-y-1">
                <div className="font-serif font-semibold text-base text-architectural-950">MOHIT AGARWAL</div>
                <div className="font-mono text-[10px] text-gold uppercase tracking-wider">Co-Founder · Lead</div>
                <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                  Directs custom web product engineering, WebGL 3D spatial experiences, and tactile software interfaces.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action Footer */}
        <div className="p-5 border-t border-black/5 bg-[#f8f6f0]/95 backdrop-blur-md">
          <button
            onClick={() => onOpenAudit()}
            className="w-full py-3.5 rounded-2xl bg-architectural-950 text-warm-ivory font-sans font-semibold text-xs tracking-widest uppercase hover:bg-black transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

