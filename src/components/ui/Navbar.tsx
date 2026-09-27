'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-architectural-950/85 backdrop-blur-xl border-b border-white/[0.06] py-4'
          : 'bg-transparent py-7 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Architectural Brand Wordmark */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-lg tracking-[0.2em] text-warm-ivory group-hover:text-gold transition-colors">
              ASHAIVA
            </span>
            <span className="font-mono text-[8px] tracking-[0.25em] text-warm-muted uppercase -mt-0.5">
              INTELLIGENT SYSTEMS
            </span>
          </div>
        </a>

        {/* Minimal Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-xs tracking-wider text-warm-stone/80 font-sans">
          <a href="#city" className="hover:text-gold transition-colors">
            City
          </a>
          <a href="#building" className="hover:text-gold transition-colors">
            Architecture
          </a>
          <a href="#studio" className="hover:text-gold transition-colors">
            Studio
          </a>
          <a href="#services" className="hover:text-gold transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-gold transition-colors">
            Work
          </a>
          <a href="#leadership" className="hover:text-gold transition-colors">
            Leadership
          </a>
        </nav>

        {/* Start a Project Architectural CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAudit}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-warm-ivory/5 border border-gold/40 text-warm-ivory font-sans text-xs tracking-widest uppercase transition-all duration-400 hover:bg-gold hover:text-architectural-950 hover:border-gold"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
