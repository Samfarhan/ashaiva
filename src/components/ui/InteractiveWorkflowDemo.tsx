'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Check, ArrowRight, Zap, Database, MessageSquare, Calendar, BarChart3, Bot } from 'lucide-react';

interface FlowNode {
  id: string;
  name: string;
  category: string;
  icon: any;
  metric: string;
  payloadKey: string;
  payloadVal: string;
}

export function InteractiveWorkflowDemo() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [leadScenario, setLeadScenario] = useState<'enterprise' | 'realestate' | 'clinic'>('enterprise');
  const [processedCount, setProcessedCount] = useState<number>(1420);

  const scenarios = {
    enterprise: {
      name: 'Enterprise B2B Deal',
      source: 'web.inbound_enterprise_form',
      contact: 'Sarah Lin (VP Ops @ Horizon AI)',
      budget: '$120,000 / yr',
      intent: 'Urgent Workflow Overhaul'
    },
    realestate: {
      name: 'Luxury Estate Buyer',
      source: 'portal.listing_inquiry',
      contact: 'Marcus Vance (Cash Buyer)',
      budget: '$4,250,000 Property',
      intent: 'Weekend Private Viewing'
    },
    clinic: {
      name: 'High-Value Surgical Lead',
      source: 'meta.ad_instant_lead',
      contact: 'Elena Rostova (Patient)',
      budget: '$18,500 Procedure',
      intent: 'Consultation with Chief Surgeon'
    }
  };

  const steps: FlowNode[] = [
    {
      id: '01',
      name: 'INBOUND SIGNAL',
      category: 'Sensor',
      icon: Zap,
      metric: 'Latency: 14ms',
      payloadKey: 'source_origin',
      payloadVal: scenarios[leadScenario].source
    },
    {
      id: '02',
      name: 'AI QUALIFICATION',
      category: 'Decisioning',
      icon: Bot,
      metric: 'Intent: 98.4%',
      payloadKey: 'semantic_score',
      payloadVal: 'TIER_1_QUALIFIED'
    },
    {
      id: '03',
      name: 'CRM MUTATION',
      category: 'Data Core',
      icon: Database,
      metric: 'HubSpot Deal #849',
      payloadKey: 'deal_status',
      payloadVal: 'PIPELINE_ENRICHED'
    },
    {
      id: '04',
      name: 'SPEED-TO-LEAD',
      category: 'Outreach',
      icon: MessageSquare,
      metric: 'Dispatched: 18s',
      payloadKey: 'channel_ping',
      payloadVal: 'WHATSAPP_PERSONALIZED'
    },
    {
      id: '05',
      name: 'CALENDAR BOOKED',
      category: 'Conversion',
      icon: Calendar,
      metric: 'Slot: Tomorrow 14:00',
      payloadKey: 'booking_state',
      payloadVal: 'MEETING_CONFIRMED'
    },
    {
      id: '06',
      name: 'EXECUTIVE BI',
      category: 'Intelligence',
      icon: BarChart3,
      metric: 'Pipeline +$120k',
      payloadKey: 'telemetry_log',
      payloadVal: 'DISPATCH_COMPLETE_200'
    }
  ];

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          setProcessedCount((c) => c + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isRunning, steps.length]);

  return (
    <div className="w-full rounded-2xl bg-obsidian-900 border border-white/[0.08] p-6 lg:p-8 relative overflow-hidden shadow-2xl shadow-black/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header controls & scenario picker */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400">
              LIVE AUTOMATION ENGINE
            </span>
          </div>
          <h3 className="font-display font-semibold text-xl text-white">
            End-to-End Autonomous Pipeline Simulation
          </h3>
        </div>

        {/* Scenario Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center bg-obsidian-800 p-1 rounded-lg border border-white/[0.08] text-xs font-mono">
            <button
              onClick={() => { setLeadScenario('enterprise'); setActiveStep(0); }}
              className={`px-3 py-1.5 rounded-md transition-all ${
                leadScenario === 'enterprise'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Enterprise B2B
            </button>
            <button
              onClick={() => { setLeadScenario('realestate'); setActiveStep(0); }}
              className={`px-3 py-1.5 rounded-md transition-all ${
                leadScenario === 'realestate'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Real Estate
            </button>
            <button
              onClick={() => { setLeadScenario('clinic'); setActiveStep(0); }}
              className={`px-3 py-1.5 rounded-md transition-all ${
                leadScenario === 'clinic'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Healthcare
            </button>
          </div>

          {/* Pause / Play */}
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-800 border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-teal-500/40 transition-colors"
          >
            {isRunning ? (
              <>
                <span className="w-2 h-2 bg-amber-400 rounded-sm" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-teal-400" />
                <span>Resume</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Visual Pipeline Flow Sequence */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-8 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <div
              key={step.id}
              onClick={() => { setActiveStep(idx); setIsRunning(false); }}
              className={`cursor-pointer rounded-xl p-4 transition-all duration-300 relative border ${
                isActive
                  ? 'bg-obsidian-750 border-teal-400 shadow-[0_0_25px_rgba(45,212,191,0.25)] scale-[1.03]'
                  : isPassed
                  ? 'bg-obsidian-850 border-teal-500/30'
                  : 'bg-obsidian-850/60 border-white/[0.06] opacity-70 hover:opacity-100'
              }`}
            >
              {/* Active Step Indicator Pill */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-slate-400">{step.id}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-teal-400 animate-ping' : isPassed ? 'bg-teal-500' : 'bg-slate-700'
                  }`}
                />
              </div>

              {/* Step Icon */}
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                  isActive
                    ? 'bg-teal-500/20 text-teal-300'
                    : isPassed
                    ? 'bg-teal-500/10 text-teal-400'
                    : 'bg-white/[0.04] text-slate-500'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Title & Metric */}
              <h4 className="font-mono text-xs font-semibold text-white tracking-wider mb-1">
                {step.name}
              </h4>
              <p className="text-[10px] text-teal-400/90 font-mono">
                {step.metric}
              </p>

              {/* Animated Progress Bar */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-sky-400 rounded-b-xl animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Live Terminal / Context Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-6 border-t border-white/[0.06] relative z-10 font-mono text-xs">
        {/* Active Lead Dossier */}
        <div className="rounded-xl bg-obsidian-800/80 border border-white/[0.06] p-4">
          <div className="flex items-center justify-between text-slate-400 text-[11px] mb-3">
            <span>INBOUND DOSSIER</span>
            <span className="text-teal-400">STATUS: LIVE</span>
          </div>
          <div className="space-y-1.5 text-slate-300 text-[11px]">
            <div><span className="text-slate-500">PROSPECT:</span> {scenarios[leadScenario].contact}</div>
            <div><span className="text-slate-500">INTENT:</span> {scenarios[leadScenario].intent}</div>
            <div><span className="text-slate-500">VALUATION:</span> <span className="text-teal-300 font-semibold">{scenarios[leadScenario].budget}</span></div>
          </div>
        </div>

        {/* Live Payload Stream */}
        <div className="rounded-xl bg-obsidian-950 border border-white/[0.08] p-4 lg:col-span-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              ACTIVE PAYLOAD TRANSMISSION [STAGE {steps[activeStep].id}]
            </span>
            <span className="text-slate-500">PIPELINES PROCESSED: {processedCount}</span>
          </div>
          <div className="text-[11px] text-teal-300/90 bg-obsidian-900/90 rounded-lg p-2.5 overflow-x-auto border border-white/[0.04]">
            <code>
              {`{ "stage": "${steps[activeStep].name}", "category": "${steps[activeStep].category}", "${steps[activeStep].payloadKey}": "${steps[activeStep].payloadVal}", "verified": true }`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
