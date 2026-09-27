'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);

  const steps = [
    { num: '01/04', text: 'CONNECTING CORE TELEMETRY' },
    { num: '02/04', text: 'STRUCTURING DATA TOPOLOGY' },
    { num: '03/04', text: 'INITIALIZING AUTONOMOUS PIPELINE' },
    { num: '04/04', text: 'SYSTEM READY' },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 280);
    const timer2 = setTimeout(() => setStep(2), 620);
    const timer3 = setTimeout(() => setStep(3), 960);
    const timer4 = setTimeout(() => {
      setFading(true);
      setTimeout(onComplete, 400);
    }, 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian-950 transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Glowing Geometric Pulse Icon */}
        <div className="relative mb-6 w-14 h-14 rounded-xl bg-obsidian-850 border border-teal-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.25)]">
          <Cpu className="w-7 h-7 text-teal-400 animate-pulse" />
          <div className="absolute inset-0 rounded-xl border border-teal-400/20 animate-ping" />
        </div>

        {/* Brand Headline */}
        <h2 className="font-display font-bold text-2xl tracking-tight text-white mb-1">
          ASHAIVA AUTOMATION
        </h2>
        <p className="font-mono text-[11px] tracking-widest text-slate-400 uppercase mb-8">
          TURNING CHAOS INTO SYSTEMS
        </p>

        {/* Step Status Readout */}
        <div className="w-full bg-obsidian-900 border border-white/[0.08] rounded-lg p-3.5 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2.5">
            {step === 3 ? (
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            )}
            <span className="text-slate-300 tracking-wider text-[11px]">
              {steps[step].text}
            </span>
          </div>
          <span className="text-teal-400 font-semibold">{steps[step].num}</span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-white/[0.06] h-1 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-sky-400 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(45,212,191,0.6)]"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
