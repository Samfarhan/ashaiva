'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-architectural-950 border-t border-white/[0.08] pt-20 pb-14 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-xl tracking-[0.2em] text-warm-ivory">
                ASHAIVA
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-gold uppercase mt-1">
                ARCHITECTURE OF INTELLIGENT SYSTEMS
              </span>
            </div>

            <p className="text-xs text-warm-stone/70 max-w-sm leading-relaxed font-sans">
              ASHAIVA designs intelligent automation systems and digital experiences that make businesses simpler, faster, and easier to operate.
            </p>

            <div className="pt-2 font-mono text-[10px] text-warm-muted tracking-widest uppercase">
              STUDIO // FARHAN KHAN &amp; MOHIT AGARWAL
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="text-warm-ivory font-medium tracking-[0.2em] uppercase text-[10px]">
              CAPABILITIES
            </h5>
            <ul className="space-y-2 text-warm-stone/60">
              <li><a href="#services" className="hover:text-gold transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">AI Agents</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">CRM &amp; Lead Systems</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">API &amp; SaaS Integrations</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Custom Web Products</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3 font-mono text-xs">
            <h5 className="text-warm-ivory font-medium tracking-[0.2em] uppercase text-[10px]">
              STUDIO
            </h5>
            <ul className="space-y-2 text-warm-stone/60">
              <li><a href="#city" className="hover:text-gold transition-colors">The City</a></li>
              <li><a href="#building" className="hover:text-gold transition-colors">Architecture</a></li>
              <li><a href="#studio" className="hover:text-gold transition-colors">Studio Floor</a></li>
              <li><a href="#work" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#leadership" className="hover:text-gold transition-colors">Leadership</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-warm-muted/60">
          <div>
            &copy; {new Date().getFullYear()} ASHAIVA. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>NEW YORK · LONDON · GLOBAL</span>
            <span className="text-gold/80">QUIET EXCELLENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
