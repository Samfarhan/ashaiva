'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-8 max-w-6xl mx-auto transition-all duration-300">
      {/* Floating Architectural Luxury Pill Container */}
      <div
        className={`w-full rounded-full transition-all duration-500 flex items-center justify-between px-5 sm:px-7 py-3 ${
          scrolled
            ? 'backdrop-blur-2xl bg-[#080b10]/90 border border-white/[0.14] shadow-[0_20px_50px_rgba(0,0,0,0.75)]'
            : 'backdrop-blur-xl bg-[#080b10]/70 border border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Brand Monogram & Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-gold/40 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
            <span className="font-serif font-bold text-xs text-gold">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg tracking-[0.24em] text-warm-ivory group-hover:text-gold transition-colors">
              ASHAIVA
            </span>
            <span className="font-sans text-[8.5px] tracking-[0.3em] text-warm-stone/70 uppercase -mt-0.5">
              STUDIO ARCHITECTURE
            </span>
          </div>
        </a>

        {/* Center Minimalist Navigation Capsule */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
          {[
            { label: 'The Tower', href: '#building' },
            { label: 'The Studio', href: '#studio' },
            { label: 'Capabilities', href: '#services' },
            { label: 'Commissions', href: '#work' },
            { label: 'Leadership', href: '#team' },
            { label: 'Inquire', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-warm-stone/80 hover:text-warm-ivory hover:bg-white/[0.06] transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Studio Availability & Direct Engagement CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-warm-stone/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>AVAILABLE Q4 · Q1</span>
          </div>

          <button
            onClick={onOpenAudit}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c8a97e] to-[#b38f58] text-black font-sans font-bold text-[11px] tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,169,126,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-warm-ivory hover:text-gold transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu (Curved Luxury Card) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 rounded-2xl bg-[#080b10]/96 backdrop-blur-3xl border border-white/[0.12] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85)] space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3.5 text-xs font-sans font-medium tracking-[0.16em] uppercase text-warm-stone/85">
            {[
              { label: 'The Tower', href: '#building' },
              { label: 'The Studio', href: '#studio' },
              { label: 'Capabilities', href: '#services' },
              { label: 'Commissions', href: '#work' },
              { label: 'Leadership', href: '#team' },
              { label: 'Inquire', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-3 rounded-lg hover:bg-white/[0.05] hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[10px] font-mono text-warm-stone/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>COMMISSIONS OPEN · Q4 / Q1</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c8a97e] to-[#b38f58] text-black font-sans font-bold text-xs tracking-wider uppercase shadow-lg shadow-gold/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
