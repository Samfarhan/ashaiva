'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Cpu, Lock, ShieldCheck } from 'lucide-react';

interface SystemAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function SystemAuditModal({ isOpen, onClose, preselectedService }: SystemAuditModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(
    preselectedService ? [preselectedService] : ['AI Lead Automation']
  );
  const [selectedTools, setSelectedTools] = useState<string[]>(['HubSpot', 'WhatsApp API']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '100-500 leads / mo',
    notes: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const goalsList = [
    'AI Lead Automation',
    'Speed-to-Lead (<30s response)',
    'Missed-Call Recovery Bot',
    'AI Inbox & Ticket Triage',
    'Customer Support Agent',
    'Living CRM Hygiene Sync',
    'Document-to-Database OCR',
    'Autonomous Custom Agents',
  ];

  const toolsList = [
    'HubSpot',
    'Salesforce',
    'WhatsApp API',
    'Gmail / Outlook',
    'Stripe',
    'Zendesk',
    'Make / n8n',
    'PostgreSQL / Supabase',
  ];

  const toggleGoal = (g: string) => {
    setSelectedGoals((prev) =>
      prev.includes(g) ? prev.filter((item) => item !== g) : [...prev, g]
    );
  };

  const toggleTool = (t: string) => {
    setSelectedTools((prev) =>
      prev.includes(t) ? prev.filter((item) => item !== t) : [...prev, t]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl bg-obsidian-900 border border-teal-500/40 p-6 sm:p-8 shadow-2xl shadow-black/95 overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-obsidian-850 border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/15 border border-teal-400/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(45,212,191,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              System Architecture Request Logged
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
              Our lead systems engineers are reviewing your architecture requirements. You will receive your tailored diagnostic blueprint within 4 business hours.
            </p>
            <div className="p-4 rounded-xl bg-obsidian-850 border border-white/[0.06] max-w-sm mx-auto font-mono text-xs text-teal-300">
              PRIORITY TICKET: #ASH-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-teal-400 text-obsidian-950 font-semibold text-xs uppercase tracking-wider hover:bg-teal-300 transition-colors"
            >
              Return to System
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <Cpu className="w-4 h-4 text-teal-400" />
                <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
                  CONFIDENTIAL SYSTEM ARCHITECT SPRINT
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Build My Automation System
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Tell us where your business operations suffer friction. We architect your automated solution.
              </p>
            </div>

            {/* Stepper Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/[0.08] pb-3 text-xs font-mono">
              <button
                onClick={() => setStep(1)}
                className={`pb-1 transition-colors ${
                  step === 1 ? 'text-teal-400 border-b-2 border-teal-400 font-bold' : 'text-slate-500'
                }`}
              >
                01. Scope & Goals
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setStep(2)}
                className={`pb-1 transition-colors ${
                  step === 2 ? 'text-teal-400 border-b-2 border-teal-400 font-bold' : 'text-slate-500'
                }`}
              >
                02. Stack & Tools
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setStep(3)}
                className={`pb-1 transition-colors ${
                  step === 3 ? 'text-teal-400 border-b-2 border-teal-400 font-bold' : 'text-slate-500'
                }`}
              >
                03. Contact & Brief
              </button>
            </div>

            {/* STEP 1: GOALS */}
            {step === 1 && (
              <div className="space-y-4">
                <span className="font-mono text-xs text-slate-300 block">
                  Select key areas to automate (multi-select):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {goalsList.map((goal) => {
                    const isSelected = selectedGoals.includes(goal);
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => toggleGoal(goal)}
                        className={`p-3 rounded-lg border text-left text-xs font-mono transition-all ${
                          isSelected
                            ? 'bg-teal-500/15 border-teal-400 text-teal-300'
                            : 'bg-obsidian-850 border-white/[0.06] text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{goal}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase hover:bg-teal-300 transition-colors"
                  >
                    <span>Next: Integrations</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: TOOLS */}
            {step === 2 && (
              <div className="space-y-4">
                <span className="font-mono text-xs text-slate-300 block">
                  Select your current software stack:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {toolsList.map((tool) => {
                    const isSelected = selectedTools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleTool(tool)}
                        className={`p-3 rounded-lg border text-center text-xs font-mono transition-all ${
                          isSelected
                            ? 'bg-teal-500/15 border-teal-400 text-teal-300'
                            : 'bg-obsidian-850 border-white/[0.06] text-slate-400 hover:text-white'
                        }`}
                      >
                        {tool}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase hover:bg-teal-300 transition-colors"
                  >
                    <span>Next: Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: CONTACT FORM */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[11px] text-slate-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-obsidian-950 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-teal-400 font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-slate-400 block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-obsidian-950 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-teal-400 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[11px] text-slate-400 block mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-obsidian-950 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-teal-400 font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-slate-400 block mb-1">
                      Monthly Lead / Transaction Volume
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-obsidian-950 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-teal-400 font-mono"
                    >
                      <option>Under 100 / mo</option>
                      <option>100 - 500 / mo</option>
                      <option>500 - 2,500 / mo</option>
                      <option>2,500+ / mo (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-slate-400 block mb-1">
                    Describe your biggest operational pain point
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., leads take 4 hours to follow up, sales reps forget to update HubSpot..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-obsidian-950 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-teal-400 font-mono"
                  />
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <Lock className="w-3 h-3 text-teal-400" />
                    <span>SOC2 & GDPR Compliant NDA Guaranteed</span>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-teal-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase hover:bg-teal-300 transition-colors shadow-[0_0_20px_rgba(45,212,191,0.4)]"
                  >
                    <span>Request Architecture Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
