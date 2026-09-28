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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#07090e]/90 backdrop-blur-2xl border-b border-white/[0.1] py-4 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-7 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Wordmark & Architectural Discipline */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif font-bold text-xl sm:text-2xl tracking-[0.22em] text-warm-ivory group-hover:text-gold transition-colors">
            ASHAIVA
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-warm-stone/75 uppercase -mt-0.5">
            SYSTEMS &amp; ARCHITECTURE
          </span>
        </a>

        {/* Center Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9 text-xs font-mono tracking-widest uppercase text-warm-stone/85">
          <a
            href="#building"
            className="hover:text-gold transition-colors duration-200"
          >
            The Tower
          </a>
          <a
            href="#studio"
            className="hover:text-gold transition-colors duration-200"
          >
            Studio Floor
          </a>
          <a
            href="#services"
            className="hover:text-gold transition-colors duration-200"
          >
            Systems
          </a>
          <a
            href="#work"
            className="hover:text-gold transition-colors duration-200"
          >
            Selected Work
          </a>
          <a
            href="#team"
            className="hover:text-gold transition-colors duration-200"
          >
            Founders
          </a>
          <a
            href="#contact"
            className="hover:text-gold transition-colors duration-200"
          >
            Inquire
          </a>
        </nav>

        {/* Right Action: Studio Availability & Direct Engagement CTA */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-2.5 font-mono text-[11px] text-warm-stone/70">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
            <span>COMMISSIONS OPEN · Q4 / Q1</span>
          </div>

          <button
            onClick={onOpenAudit}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-warm-ivory text-architectural-950 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold hover:text-architectural-950 hover:shadow-[0_0_25px_rgba(200,169,126,0.35)] active:scale-[0.98]"
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
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e]/98 backdrop-blur-3xl border-b border-white/[0.12] px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-5 text-sm font-mono tracking-widest uppercase text-warm-stone">
            <a
              href="#building"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold transition-colors"
            >
              The Tower
            </a>
            <a
              href="#studio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold transition-colors"
            >
              Studio Floor
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold transition-colors"
            >
              Systems
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold transition-colors"
            >
              Founders
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold transition-colors"
            >
              Inquire
            </a>
          </nav>

          <div className="pt-4 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-gold text-architectural-950 font-sans font-bold text-xs tracking-widest uppercase shadow-lg shadow-gold/20"
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
