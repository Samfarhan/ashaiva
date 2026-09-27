'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

interface SystemAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function SystemAuditModal({ isOpen, onClose, preselectedService }: SystemAuditModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(
    preselectedService ? [preselectedService] : ['AI Automation']
  );
  const [selectedTools, setSelectedTools] = useState<string[]>(['HubSpot API', 'REST API']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '100 - 500 records / mo',
    notes: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const goalsList = [
    'AI Automation',
    'AI Agents',
    'Workflow Automation',
    'CRM & Lead Systems',
    'Business Process Automation',
    'API & SaaS Integrations',
    'Custom Web Applications',
    'Internal Business Systems',
  ];

  const toolsList = [
    'HubSpot API',
    'Salesforce',
    'PostgreSQL',
    'Next.js / React',
    'Stripe',
    'AWS / Cloud',
    'Python / FastAPI',
    'REST APIs',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-architectural-950/90 backdrop-blur-xl animate-fadeIn font-sans">
      <div className="relative w-full max-w-2xl rounded-sm bg-architectural-900 border border-gold/30 p-8 sm:p-10 shadow-2xl shadow-black/95 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-sm bg-architectural-850 border border-white/[0.08] text-warm-muted hover:text-warm-ivory hover:border-gold/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 rounded-sm bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(200,169,126,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-serif text-3xl text-warm-ivory">
              System Specification Received
            </h3>
            <p className="text-sm text-warm-stone/80 max-w-md mx-auto leading-relaxed">
              Our lead systems architects (Farhan Khan &amp; Mohit Agarwal) will review your operational requirements and deliver a structured architectural proposal within 4 business hours.
            </p>
            <div className="p-4 rounded-sm bg-architectural-850 border border-white/[0.06] max-w-sm mx-auto font-mono text-xs text-gold">
              TRANSACTION ID: #ASH-{Math.floor(100000 + Math.random() * 900000)}
            </div>
            <button
              onClick={onClose}
              className="px-7 py-2.5 rounded-sm bg-gold text-architectural-950 font-sans font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              Return to Studio
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <span className="font-mono text-[10px] text-gold tracking-[0.25em] uppercase block mb-1.5">
                PROJECT INQUIRY // CONFIDENTIAL SPRINT
              </span>
              <h3 className="font-serif text-3xl text-warm-ivory">
                Start an Architecture Project
              </h3>
              <p className="text-xs text-warm-stone/70 mt-1">
                Detail your operational friction and software stack. We architect your automated systems.
              </p>
            </div>

            {/* Stepper */}
            <div className="flex items-center gap-3 mb-6 border-b border-white/[0.08] pb-3 text-xs font-mono">
              <button
                onClick={() => setStep(1)}
                className={`pb-1 transition-colors ${
                  step === 1 ? 'text-gold border-b-2 border-gold font-medium' : 'text-warm-muted'
                }`}
              >
                01. Scope &amp; Goals
              </button>
              <span className="text-warm-muted/40">/</span>
              <button
                onClick={() => setStep(2)}
                className={`pb-1 transition-colors ${
                  step === 2 ? 'text-gold border-b-2 border-gold font-medium' : 'text-warm-muted'
                }`}
              >
                02. Stack &amp; Tools
              </button>
              <span className="text-warm-muted/40">/</span>
              <button
                onClick={() => setStep(3)}
                className={`pb-1 transition-colors ${
                  step === 3 ? 'text-gold border-b-2 border-gold font-medium' : 'text-warm-muted'
                }`}
              >
                03. Contact &amp; Brief
              </button>
            </div>

            {/* STEP 1: GOALS */}
            {step === 1 && (
              <div className="space-y-4">
                <span className="font-mono text-xs text-warm-stone/80 block">
                  Select key areas to automate or build:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {goalsList.map((goal) => {
                    const isSelected = selectedGoals.includes(goal);
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => toggleGoal(goal)}
                        className={`p-3 rounded-sm border text-left text-xs font-mono transition-all ${
                          isSelected
                            ? 'bg-gold/10 border-gold text-gold'
                            : 'bg-architectural-850 border-white/[0.06] text-warm-muted hover:text-warm-ivory'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{goal}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-gold" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gold text-architectural-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
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
                <span className="font-mono text-xs text-warm-stone/80 block">
                  Select your current technology stack:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {toolsList.map((tool) => {
                    const isSelected = selectedTools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleTool(tool)}
                        className={`p-3 rounded-sm border text-center text-xs font-mono transition-all ${
                          isSelected
                            ? 'bg-gold/10 border-gold text-gold'
                            : 'bg-architectural-850 border-white/[0.06] text-warm-muted hover:text-warm-ivory'
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
                    className="px-4 py-2 text-xs font-mono text-warm-muted hover:text-warm-ivory"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gold text-architectural-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
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
                    <label className="font-mono text-[11px] text-warm-muted block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-sm bg-architectural-950 border border-white/[0.1] text-xs text-warm-ivory focus:outline-none focus:border-gold font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-warm-muted block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-sm bg-architectural-950 border border-white/[0.1] text-xs text-warm-ivory focus:outline-none focus:border-gold font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[11px] text-warm-muted block mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Systems"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-sm bg-architectural-950 border border-white/[0.1] text-xs text-warm-ivory focus:outline-none focus:border-gold font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-warm-muted block mb-1">
                      Operational Volume
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-sm bg-architectural-950 border border-white/[0.1] text-xs text-warm-ivory focus:outline-none focus:border-gold font-mono"
                    >
                      <option>Under 100 records / mo</option>
                      <option>100 - 500 records / mo</option>
                      <option>500 - 2,500 records / mo</option>
                      <option>2,500+ records / mo (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-warm-muted block mb-1">
                    Describe your primary operational friction
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g., manual lead routing delays response times by 3 hours..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-sm bg-architectural-950 border border-white/[0.1] text-xs text-warm-ivory focus:outline-none focus:border-gold font-mono"
                  />
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-warm-muted">
                    <Lock className="w-3 h-3 text-gold" />
                    <span>Confidential Non-Disclosure Assured</span>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-gold text-architectural-950 font-semibold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors shadow-[0_0_20px_rgba(200,169,126,0.35)]"
                  >
                    <span>Request Architecture Sprint</span>
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
