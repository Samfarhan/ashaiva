'use client';

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Zap, RefreshCw, Layers, ShieldAlert, Cpu } from 'lucide-react';

export function BeforeAfterSlider() {
  const [mode, setMode] = useState<'after' | 'before'>('after');

  const comparisons = [
    {
      label: 'Lead Capture & Response',
      before: {
        title: '3 to 5 Hours Manual Delay',
        desc: 'Inquiries sit in shared email inboxes while prospects contact competing services.',
        badge: 'High Leakage',
      },
      after: {
        title: 'Sub-30-Second Instant Outreach',
        desc: 'Inbound leads receive personalized WhatsApp / SMS engagement in under 30 seconds.',
        badge: 'Zero Dropoff',
      },
    },
    {
      label: 'CRM & Pipeline Hygiene',
      before: {
        title: 'Manual Rep Data Entry',
        desc: 'Stale spreadsheets, forgotten follow-ups, and incomplete client records.',
        badge: 'Data Rot',
      },
      after: {
        title: 'Self-Updating Living CRM',
        desc: 'Meeting summaries, deal stages, and account attributes mutate automatically.',
        badge: '100% Synced',
      },
    },
    {
      label: 'Support & Inquiry Resolution',
      before: {
        title: 'Support Inbox Overload',
        desc: 'Staff burns out answering identical tier-1 inquiries day after day.',
        badge: 'Burnout Bottleneck',
      },
      after: {
        title: 'Knowledge-Grounded AI Agents',
        desc: 'Autonomous agents resolve 70%+ of tickets instantly without hallucinations.',
        badge: '24/7 Autonomy',
      },
    },
    {
      label: 'Document & Invoice Processing',
      before: {
        title: 'Manual Retyping from PDFs',
        desc: 'Days wasted extracting invoice line items, tax numbers, and contract terms.',
        badge: 'Human Error Prone',
      },
      after: {
        title: 'Instant Document-to-Database ETL',
        desc: 'Neural OCR extracts tabular data and pushes straight into ERP in 2.4 seconds.',
        badge: '99.9% Accuracy',
      },
    },
  ];

  return (
    <div className="w-full">
      {/* State Toggle Buttons */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center p-1.5 rounded-xl bg-obsidian-850 border border-white/[0.08] shadow-xl">
          <button
            onClick={() => setMode('before')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 ${
              mode === 'before'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>BEFORE ASHAIVA [CHAOS]</span>
          </button>
          <button
            onClick={() => setMode('after')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 ${
              mode === 'after'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-[0_0_25px_rgba(45,212,191,0.35)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            <span>AFTER ASHAIVA [SYSTEMS]</span>
          </button>
        </div>
      </div>

      {/* Grid Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comparisons.map((item, idx) => {
          const isAfter = mode === 'after';
          const content = isAfter ? item.after : item.before;

          return (
            <div
              key={idx}
              className={`rounded-2xl p-6 lg:p-7 border transition-all duration-500 relative overflow-hidden ${
                isAfter
                  ? 'bg-obsidian-850 border-teal-500/30 shadow-[0_10px_35px_-10px_rgba(45,212,191,0.15)]'
                  : 'bg-obsidian-900 border-rose-500/25 shadow-[0_10px_35px_-10px_rgba(244,63,94,0.12)]'
              }`}
            >
              {/* Category Eyebrow */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  {item.label}
                </span>
                <span
                  className={`font-mono text-[10px] px-2.5 py-1 rounded border uppercase font-medium ${
                    isAfter
                      ? 'bg-teal-500/10 text-teal-300 border-teal-500/30'
                      : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                  }`}
                >
                  {content.badge}
                </span>
              </div>

              {/* Status Header */}
              <div className="flex items-start gap-3 mb-3">
                {isAfter ? (
                  <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                  </div>
                )}
                <div>
                  <h4 className="font-display font-semibold text-lg text-white">
                    {content.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mt-1 font-sans">
                    {content.desc}
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Line */}
              <div
                className={`h-0.5 w-full mt-5 rounded-full transition-colors duration-500 ${
                  isAfter
                    ? 'bg-gradient-to-r from-teal-500/50 to-transparent'
                    : 'bg-gradient-to-r from-rose-500/40 to-transparent'
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
