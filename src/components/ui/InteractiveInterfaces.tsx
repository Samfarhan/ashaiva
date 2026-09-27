'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Mail, Bot, LineChart, CheckCircle2, AlertTriangle, ArrowUpRight, Clock, ShieldCheck, Play, Sparkles } from 'lucide-react';

export function InteractiveInterfaces() {
  const [activeTab, setActiveTab] = useState<'crm' | 'inbox' | 'agent' | 'analytics'>('crm');

  return (
    <div className="w-full rounded-2xl bg-obsidian-900 border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/90">
      {/* Top OS Window Bar */}
      <div className="bg-obsidian-950 border-b border-white/[0.08] px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Window Lights */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-3 font-mono text-[11px] text-slate-400">
            ashaiva://engine.os/v2.4
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-obsidian-850 p-1 rounded-lg border border-white/[0.06] text-xs font-mono">
          <button
            onClick={() => setActiveTab('crm')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'crm'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>CRM Pipeline</span>
          </button>
          <button
            onClick={() => setActiveTab('inbox')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'inbox'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>AI Inbox Triage</span>
          </button>
          <button
            onClick={() => setActiveTab('agent')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'agent'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Autonomous Agent</span>
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'analytics'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LineChart className="w-3.5 h-3.5" />
            <span>Speed Telemetry</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content Viewport */}
      <div className="p-6 lg:p-8 min-h-[460px] bg-obsidian-900/90 relative">
        {/* TAB 1: CRM INTELLIGENCE */}
        {activeTab === 'crm' && (
          <div className="space-y-6 animate-fadeIn">
            {/* KPI Header Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl bg-obsidian-850 p-4 border border-white/[0.06]">
                <span className="font-mono text-[10px] text-slate-400 uppercase">Automated Pipeline</span>
                <p className="font-display font-bold text-2xl text-white mt-1">$482,500</p>
                <span className="text-[10px] text-teal-400 font-mono">+42% this month</span>
              </div>
              <div className="rounded-xl bg-obsidian-850 p-4 border border-white/[0.06]">
                <span className="font-mono text-[10px] text-slate-400 uppercase">Deals Synced Today</span>
                <p className="font-display font-bold text-2xl text-teal-300 mt-1">28</p>
                <span className="text-[10px] text-teal-400 font-mono">0 manual inputs</span>
              </div>
              <div className="rounded-xl bg-obsidian-850 p-4 border border-white/[0.06]">
                <span className="font-mono text-[10px] text-slate-400 uppercase">Avg Close Velocity</span>
                <p className="font-display font-bold text-2xl text-white mt-1">6.2 Days</p>
                <span className="text-[10px] text-teal-400 font-mono">-58% cycle time</span>
              </div>
              <div className="rounded-xl bg-obsidian-850 p-4 border border-white/[0.06]">
                <span className="font-mono text-[10px] text-slate-400 uppercase">CRM Hygiene Score</span>
                <p className="font-display font-bold text-2xl text-teal-300 mt-1">99.8%</p>
                <span className="text-[10px] text-teal-400 font-mono">Real-time dedupe</span>
              </div>
            </div>

            {/* Pipeline Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl bg-obsidian-850/70 border border-white/[0.06] p-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>AI QUALIFIED (12)</span>
                  <span className="text-teal-400">$180k</span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-obsidian-800 border border-teal-500/30">
                    <div className="flex items-center justify-between text-xs text-white font-semibold">
                      <span>Starlight Enterprise</span>
                      <span className="text-teal-300">$65k</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Intent score 0.96 • Auto-assigned to AE</p>
                  </div>
                  <div className="p-3 rounded-lg bg-obsidian-800 border border-white/[0.06]">
                    <div className="flex items-center justify-between text-xs text-white font-semibold">
                      <span>Apex Health Network</span>
                      <span className="text-teal-300">$45k</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">WhatsApp meeting booked for 2pm</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-obsidian-850/70 border border-white/[0.06] p-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>CONTRACT SENT (8)</span>
                  <span className="text-sky-400">$215k</span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-obsidian-800 border border-sky-500/30">
                    <div className="flex items-center justify-between text-xs text-white font-semibold">
                      <span>Vanguard Global</span>
                      <span className="text-sky-300">$140k</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">DocuSign auto-generated • Legal approved</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-obsidian-850/70 border border-white/[0.06] p-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>CLOSED / WON (6)</span>
                  <span className="text-emerald-400">$87.5k</span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-lg bg-obsidian-800 border border-emerald-500/30">
                    <div className="flex items-center justify-between text-xs text-white font-semibold">
                      <span>Kinesis Logistics</span>
                      <span className="text-emerald-300">$87.5k</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Stripe payment cleared • Provisioned in Slack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI INBOX TRIAGE */}
        {activeTab === 'inbox' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-slate-400">
              <span>ZERO-INBOX NEURAL ROUTER</span>
              <span className="text-teal-400">STATUS: 4 EMAILS TRIAGED IN LAST 60s</span>
            </div>

            <div className="space-y-3">
              {[
                {
                  from: 'David K. (Procurement Officer)',
                  subject: 'Urgent: Vendor MSA & Security Annex Review',
                  tag: 'HIGH_PRIORITY_LEGAL',
                  tagColor: 'border-rose-500/40 text-rose-300 bg-rose-500/10',
                  action: 'Security questionnaire auto-filled from vector store; routed to Legal',
                  time: '1m ago',
                },
                {
                  from: 'Rachel M. (E-Commerce Director)',
                  subject: 'Inquiring regarding Q4 Enterprise Rollout Tier',
                  tag: 'HIGH_INTENT_SALES',
                  tagColor: 'border-teal-500/40 text-teal-300 bg-teal-500/10',
                  action: 'Enriched with Apollo data; calendar booking link pre-drafted',
                  time: '4m ago',
                },
                {
                  from: 'Support Desk Bot',
                  subject: 'API Webhook Retry Limit Reached (Customer #492)',
                  tag: 'SYSTEM_AUTONOMOUS_FIX',
                  tagColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
                  action: 'Auto-regenerated API token; pinged customer via WhatsApp with resolution',
                  time: '12m ago',
                },
              ].map((mail, i) => (
                <div key={i} className="p-4 rounded-xl bg-obsidian-850 border border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${mail.tagColor}`}>
                        {mail.tag}
                      </span>
                      <span className="text-xs text-white font-medium">{mail.from}</span>
                      <span className="text-[10px] text-slate-500 font-mono">• {mail.time}</span>
                    </div>
                    <h5 className="text-sm font-semibold text-white">{mail.subject}</h5>
                    <p className="text-xs text-slate-400 mt-1 font-mono">{mail.action}</p>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-obsidian-800 border border-teal-500/30 text-teal-300 text-xs font-mono shrink-0 hover:bg-teal-500/10 transition-colors">
                    Approve Draft
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: AUTONOMOUS AGENT MONITOR */}
        {activeTab === 'agent' && (
          <div className="rounded-xl bg-obsidian-950 border border-white/[0.08] p-5 font-mono text-xs space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/[0.06] text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-400">AGENT: RESEARCH_ENGINE_DELTA</span>
              </div>
              <span>MEMORY: 1536-DIM VECTOR</span>
            </div>

            <div className="text-slate-300 space-y-2 text-[11px]">
              <p><span className="text-teal-400">[03:28:11]</span> <span className="text-slate-500">OBJECTIVE:</span> Process inbound enterprise RFP and match past proposals.</p>
              <p><span className="text-teal-400">[03:28:12]</span> <span className="text-sky-400">[TOOL EXEC]</span> query_vector_database(query="Enterprise SLA pricing tiers")</p>
              <p><span className="text-teal-400">[03:28:13]</span> <span className="text-emerald-400">[RESOLVED]</span> Retrieved 4 similar approved contracts. Similarity index: 0.94</p>
              <p><span className="text-teal-400">[03:28:14]</span> <span className="text-sky-400">[TOOL EXEC]</span> render_proposal_pdf(template="Tier_3_SLA", custom_clauses=["99.99% Uptime"])</p>
              <p><span className="text-teal-400">[03:28:15]</span> <span className="text-teal-300 font-semibold">[SUCCESS]</span> Proposal generated in 3.4 seconds. Sent to VP Ops for signature.</p>
            </div>
          </div>
        )}

        {/* TAB 4: SPEED-TO-LEAD TELEMETRY */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-obsidian-850 border border-teal-500/30">
                <span className="font-mono text-xs text-slate-400 uppercase">Median First Response</span>
                <p className="font-display font-bold text-3xl text-teal-300 mt-1">18 Seconds</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Industry average: 4.2 hours</p>
              </div>
              <div className="p-4 rounded-xl bg-obsidian-850 border border-white/[0.06]">
                <span className="font-mono text-xs text-slate-400 uppercase">Conversion Lift</span>
                <p className="font-display font-bold text-3xl text-white mt-1">+340%</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Speed directly amplifies close rate</p>
              </div>
              <div className="p-4 rounded-xl bg-obsidian-850 border border-white/[0.06]">
                <span className="font-mono text-xs text-slate-400 uppercase">System Uptime</span>
                <p className="font-display font-bold text-3xl text-teal-300 mt-1">99.98%</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Zero dropped webhooks</p>
              </div>
            </div>

            {/* Speed Comparison Bar */}
            <div className="p-5 rounded-xl bg-obsidian-850 border border-white/[0.06] space-y-4">
              <h5 className="font-mono text-xs text-slate-300 uppercase">Speed-to-Lead Response Latency Comparison</h5>
              <div>
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Traditional Manual Team</span>
                  <span>~240 Minutes</span>
                </div>
                <div className="w-full bg-obsidian-950 h-3 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[95%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-teal-300 mb-1">
                  <span>ASHAIVA Autonomous Engine</span>
                  <span>18 Seconds (Instant)</span>
                </div>
                <div className="w-full bg-obsidian-950 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-400 to-sky-400 h-full w-[4%] shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
