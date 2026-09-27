'use client';

import React, { useState } from 'react';
import { Calculator, ArrowUpRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export function RoiCalculator({ onOpenAudit }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [manualHoursPerRep, setManualHoursPerRep] = useState<number>(14);

  // Math: Hours saved per year = teamSize * (manualHoursPerRep * 0.70) * 50 weeks
  const annualHoursSaved = Math.round(teamSize * (manualHoursPerRep * 0.72) * 50);
  const annualPayrollRecaptured = Math.round(annualHoursSaved * hourlyRate);
  // Speed-to-lead amplified deal value estimate
  const estimatedRevenueLift = Math.round(annualPayrollRecaptured * 1.85);

  return (
    <div className="w-full rounded-2xl bg-obsidian-850 border border-teal-500/30 p-6 lg:p-10 relative overflow-hidden shadow-2xl shadow-black/90">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 mb-1">
            <Calculator className="w-4 h-4 text-teal-400" />
            <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
              EFFICIENCY & ROI MODELER
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Calculate How Much Chaos Costs Your Business
          </h3>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Repetitive copy-pasting, lead delays, and spreadsheet triage drain hundreds of productive hours. Calculate the bottom-line recapture of deploying ASHAIVA systems.
          </p>

          <div className="space-y-5 pt-2">
            {/* Team Size Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Team Size (Sales, Ops & Support):</span>
                <span className="text-teal-300 font-bold">{teamSize} team members</span>
              </div>
              <input
                type="range"
                min="2"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
            </div>

            {/* Average Hourly Blended Cost */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Blended Hourly Cost:</span>
                <span className="text-teal-300 font-bold">${hourlyRate} / hour</span>
              </div>
              <input
                type="range"
                min="25"
                max="250"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
            </div>

            {/* Manual Hours Lost per Rep/Week */}
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Manual Hours Lost per Person/Wk:</span>
                <span className="text-teal-300 font-bold">{manualHoursPerRep} hrs / week</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={manualHoursPerRep}
                onChange={(e) => setManualHoursPerRep(Number(e.target.value))}
                className="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
            </div>
          </div>
        </div>

        {/* Right: Projected Output Cards */}
        <div className="lg:col-span-6 rounded-xl bg-obsidian-900 border border-white/[0.08] p-6 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-obsidian-850 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>ANNUAL HOURS RECLAIMED</span>
              </div>
              <p className="font-display font-bold text-3xl text-white">
                {annualHoursSaved.toLocaleString()} <span className="text-base font-normal text-slate-400">hrs</span>
              </p>
              <p className="text-[11px] text-teal-400/90 font-mono mt-1">
                Equivalent to {Math.round(annualHoursSaved / 2000 * 10) / 10} full-time roles
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-850 border border-teal-500/30">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                <DollarSign className="w-3.5 h-3.5 text-teal-400" />
                <span>PAYROLL VALUE RECAPTURED</span>
              </div>
              <p className="font-display font-bold text-3xl text-teal-300">
                ${annualPayrollRecaptured.toLocaleString()}
              </p>
              <p className="text-[11px] text-teal-400/90 font-mono mt-1">
                Direct bottom-line efficiency
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-950 border border-white/[0.08] text-center space-y-2">
            <span className="font-mono text-xs text-slate-400 uppercase block">
              ESTIMATED TOP-LINE REVENUE EXPANSION
            </span>
            <p className="font-display font-bold text-4xl text-white">
              +${estimatedRevenueLift.toLocaleString()}
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Via sub-30s speed-to-lead, automated re-engagement, and zero dropped prospects.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-teal-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]"
          >
            <span>Lock In These Efficiencies // Request System Spec</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
