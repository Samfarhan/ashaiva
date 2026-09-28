'use client';

import React from 'react';
import { Cpu, ShieldCheck, Terminal, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-obsidian-950 border-t border-white/[0.08] pt-16 pb-12 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-obsidian-850 border border-teal-500/40 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-teal-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">
                  ASHAIVA AUTOMATION
                </span>
                <span className="font-mono text-[9px] tracking-widest text-slate-500 uppercase -mt-0.5">
                  AI Systems • Automation • Operations
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              ASHAIVA designs intelligent automation systems that turn fragmented operations into synchronized, high-velocity business infrastructure.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                <span>UPTIME: 99.98%</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>SOC2 TYPE II READY</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="text-white font-semibold tracking-wider uppercase text-[11px]">
              Solutions
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-teal-300 transition-colors">AI Lead Automation</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Speed-to-Lead Engines</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Missed-Call Recovery</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">AI Inbox & Triage</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Living CRM Hygiene</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Document Extraction</a></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="text-white font-semibold tracking-wider uppercase text-[11px]">
              Industries
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#industries" className="hover:text-teal-300 transition-colors">Agencies & Studios</a></li>
              <li><a href="#industries" className="hover:text-teal-300 transition-colors">E-Commerce Brands</a></li>
              <li><a href="#industries" className="hover:text-teal-300 transition-colors">Real Estate Brokerages</a></li>
              <li><a href="#industries" className="hover:text-teal-300 transition-colors">Healthcare & Clinics</a></li>
              <li><a href="#industries" className="hover:text-teal-300 transition-colors">SaaS & Tech Startups</a></li>
              <li><a href="#industries" className="hover:text-teal-300 transition-colors">Logistics & Heavy Ops</a></li>
            </ul>
          </div>

          {/* Architecture & Legal */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="text-white font-semibold tracking-wider uppercase text-[11px]">
              Architecture
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#process" className="hover:text-teal-300 transition-colors">5-Stage Methodology</a></li>
              <li><a href="#interfaces" className="hover:text-teal-300 transition-colors">Operating System (OS)</a></li>
              <li><a href="#calculator" className="hover:text-teal-300 transition-colors">ROI Modeler</a></li>
              <li><a href="#" className="hover:text-teal-300 transition-colors">Security & Privacy</a></li>
              <li><a href="#" className="hover:text-teal-300 transition-colors">Terms of Engagement</a></li>
              <li><a href="#" className="hover:text-teal-300 transition-colors">Status Dashboard</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ASHAIVA AUTOMATION LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>ASHAIVA SYSTEMS ARCHITECTURE · VERSION 2.4</span>
            <span className="text-teal-400">SOVEREIGN ENTERPRISE RUNTIME</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
