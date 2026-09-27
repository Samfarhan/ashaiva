'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, ArrowUpRight, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [systemTime, setSystemTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateClock = () => {
      const now = new Date();
      setSystemTime(
        now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg bg-obsidian-850 border border-teal-500/40 flex items-center justify-center transition-all duration-300 group-hover:border-teal-400 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
            <Cpu className="w-4 h-4 text-teal-400 transition-transform duration-500 group-hover:rotate-90" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-teal-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-teal-300 transition-colors">
              ASHAIVA
            </span>
            <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase -mt-0.5">
              AUTOMATION
            </span>
          </div>
        </a>

        {/* Center Technical Telemetry */}
        <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-slate-300">CORE STATUS:</span>
            <span className="text-teal-400 font-medium">99.98% OPTIMAL</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-slate-500" />
            <span>UTC: {systemTime || '12:00:00'}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-300">
          <a href="#services" className="hover:text-teal-300 transition-colors">
            Services
          </a>
          <a href="#systems" className="hover:text-teal-300 transition-colors">
            Living Engine
          </a>
          <a href="#process" className="hover:text-teal-300 transition-colors">
            Process
          </a>
          <a href="#work" className="hover:text-teal-300 transition-colors">
            Work
          </a>
          <a href="#team" className="hover:text-teal-300 transition-colors">
            Team
          </a>
          <a href="#calculator" className="hover:text-teal-300 transition-colors">
            ROI
          </a>
        </nav>

        {/* Primary Magnetic CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-teal-500 to-teal-400 text-obsidian-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Automating</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
