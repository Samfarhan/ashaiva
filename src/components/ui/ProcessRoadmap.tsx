'use client';

import React, { useState } from 'react';
import { Search, Compass, Network, Cpu, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProcessRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Discover & Diagnose',
      subtitle: 'Process Mining & Bottleneck Audit',
      icon: Search,
      desc: 'We trace how information flows across your team, identify dropped leads, quantify manual spreadsheet hours, and pinpoint the exact friction costing you margin.',
      deliverables: ['Operational Friction Map', 'Time-Loss Audit Report', 'ROI Feasibility Matrix'],
      timeline: 'Days 1 – 3',
    },
    {
      num: '02',
      title: 'Architect & Design',
      subtitle: 'Bespoke Neural Systems Blueprint',
      icon: Compass,
      desc: 'We architect your tailored automation topology: state machines, API webhook endpoints, data contracts, and AI agent guardrails before writing a line of code.',
      deliverables: ['System Architecture Diagram', 'Data Schema Contracts', 'Security & Compliance Blueprint'],
      timeline: 'Days 4 – 7',
    },
    {
      num: '03',
      title: 'Integrate & Connect',
      subtitle: 'Omni-Channel API & CRM Synthesis',
      icon: Network,
      desc: 'We bridge your CRM, email inboxes, WhatsApp Business API, documents, ERPs, and internal databases with resilient retry logic and rate-limit buffering.',
      deliverables: ['Custom Middleware Webhooks', 'Bi-Directional CRM Sync', 'Encrypted Secret Storage'],
      timeline: 'Days 8 – 11',
    },
    {
      num: '04',
      title: 'Automate & Deploy',
      subtitle: 'Autonomous Agent Swarm Activation',
      icon: Cpu,
      desc: 'We launch your speed-to-lead systems, triage engines, and custom autonomous agents in staging, perform edge-case stress testing, and transition to live production.',
      deliverables: ['Sub-30s Response Engine', 'Self-Healing CRM Workflows', 'Staff Training & Briefings'],
      timeline: 'Days 12 – 14',
    },
    {
      num: '05',
      title: 'Optimize & Scale',
      subtitle: 'Telemetry Monitoring & Speed Tuning',
      icon: TrendingUp,
      desc: 'We monitor live execution telemetry, eliminate micro-latencies, fine-tune model accuracy, and expand your automation footprint as your transaction volume multiplies.',
      deliverables: ['24/7 SLA Telemetry Monitor', 'Monthly Velocity Reviews', 'Continuous Model Fine-Tuning'],
      timeline: 'Ongoing Partnership',
    },
  ];

  return (
    <div className="w-full">
      {/* 5-Step Horizontal Navigation Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isCurrent = idx === activeStep;
          const isPassed = idx < activeStep;

          return (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 relative text-left ${
                isCurrent
                  ? 'bg-obsidian-800 border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.25)] scale-[1.02]'
                  : isPassed
                  ? 'bg-obsidian-850 border-teal-500/30'
                  : 'bg-obsidian-850/60 border-white/[0.06] opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-semibold text-teal-400">
                  PHASE {step.num}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isCurrent ? 'bg-teal-400 animate-ping' : isPassed ? 'bg-teal-500' : 'bg-slate-700'
                  }`}
                />
              </div>
              <h4 className="font-display font-semibold text-sm text-white">
                {step.title}
              </h4>
              <p className="font-mono text-[10px] text-slate-400 mt-1">
                {step.timeline}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Detail Card */}
      <div className="rounded-2xl bg-obsidian-850 border border-teal-500/30 p-6 lg:p-8 relative overflow-hidden shadow-2xl shadow-black/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl font-bold text-teal-400">
                {steps[activeStep].num}
              </span>
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                  {steps[activeStep].subtitle}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {steps[activeStep].desc}
            </p>

            <div className="pt-2">
              <span className="font-mono text-[11px] text-teal-400 uppercase tracking-wider block mb-2">
                KEY DELIVERABLES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {steps[activeStep].deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-obsidian-900 border border-white/[0.06] text-xs font-mono text-slate-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline & Next step trigger */}
          <div className="lg:col-span-4 rounded-xl bg-obsidian-900 border border-white/[0.08] p-6 text-center space-y-4">
            <span className="font-mono text-xs text-slate-400 uppercase block">
              EXECUTION WINDOW
            </span>
            <p className="font-display font-bold text-2xl text-teal-300">
              {steps[activeStep].timeline}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Full turnkey engineering. Zero internal engineering lift needed.
            </p>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-800 border border-teal-500/40 text-teal-300 font-semibold text-xs tracking-wider uppercase hover:bg-teal-500/10 transition-colors"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
