'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';
import { Navbar } from '@/components/ui/Navbar';
import { Preloader } from '@/components/ui/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { MotionOverlays } from '@/components/motion/MotionOverlays';
import { CinematicTypography } from '@/components/typography/CinematicTypography';
import { InteractiveHotspotModal } from '@/components/cinematic/InteractiveHotspotModal';
import { PhoneInteractiveExperience } from '@/components/phone/PhoneInteractiveExperience';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { SystemAuditModal } from '@/components/ui/SystemAuditModal';
import { Footer } from '@/components/ui/Footer';
import { ArrowUpRight } from 'lucide-react';

// Dynamic import of 3D Daytime Architectural Canvas to prevent SSR hydration mismatches
const Scene = dynamic(() => import('@/three/Scene').then((mod) => mod.Scene), {
  ssr: false,
});

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [auditModalOpen, setAuditModalOpen] = useState<boolean>(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  // Interactive Office Hotspot Modal State
  const [hotspotModal, setHotspotModal] = useState<{
    isOpen: boolean;
    type: string;
    title: string;
    description: string;
  }>({
    isOpen: false,
    type: '',
    title: '',
    description: '',
  });

  // Interactive Phone Experience Modal State
  const [phoneExperienceOpen, setPhoneExperienceOpen] = useState<boolean>(false);

  // Setup Lenis Smooth Inertial Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      lenis.destroy();
    };
  }, []);

  const openAuditWithService = (serviceName?: string) => {
    setSelectedServiceTitle(serviceName || '');
    setAuditModalOpen(true);
  };

  const handleSelectHotspot = (type: string, title: string, description: string) => {
    setHotspotModal({
      isOpen: true,
      type,
      title,
      description,
    });
  };

  return (
    <main className="relative min-h-screen bg-architectural-950 text-warm-ivory overflow-x-hidden selection:bg-gold-dim selection:text-gold-light font-sans">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Subtle Frame Overlays */}
      <MotionOverlays />

      {/* Luxury Editorial Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Persistent 3D Daytime Architectural Canvas */}
      <Scene
        scrollProgress={scrollProgress}
        onSelectHotspot={handleSelectHotspot}
        onPhoneClick={() => setPhoneExperienceOpen(true)}
      />

      {/* Minimalist Navigation */}
      <Navbar onOpenAudit={() => openAuditWithService()} />

      {/* =================================================================== */}
      {/* CONTINUOUS CAMERA STORYBOARD DOM SECTIONS                           */}
      {/* =================================================================== */}
      <div className="relative z-10">
        {/* ================================================================= */}
        {/* SCENE 01: THE CITY (ESTABLISHING SHOT, 0% - 15%)                  */}
        {/* ================================================================= */}
        <section
          id="city"
          className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto pt-28 pb-20"
        >
          <div className="max-w-3xl">
            <CinematicTypography
              scrollProgress={scrollProgress}
              onOpenAudit={() => openAuditWithService()}
            />
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 02 & 03: APPROACH THE BUILDING & TOWER SIGNAGE (15% - 28%)  */}
        {/* ================================================================= */}
        <section
          id="building"
          className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.06]"
        >
          <div className="max-w-2xl space-y-6">
            <span className="font-mono text-[10px] text-gold tracking-[0.25em] uppercase block">
              01 // THE APPROACH · ASHAIVA CORPORATE TOWER
            </span>
            <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
              From the outside, modern commerce looks seamless.{' '}
              <span className="text-gold">Inside, it runs on infrastructure.</span>
            </h2>
            <p className="editorial-sub text-base text-warm-stone/80 font-sans leading-relaxed">
              Growing companies often suffer from invisible operational friction: disconnected software, delayed inboxes, and manual copy-paste bottlenecks. We engineer sovereign automated architectures that eliminate operational drag.
            </p>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 04 & 05: ENTER THROUGH THE GLASS & STUDIO FLOOR (28% - 46%) */}
        {/* ================================================================= */}
        <section
          id="studio"
          className="min-h-[95vh] flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.06]"
        >
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-[10px] text-gold tracking-[0.25em] uppercase block">
              02 // THE STUDIO FLOOR · PHYSICAL GLASS ENTRY
            </span>
            <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
              A studio dedicated to{' '}
              <span className="text-gold">systems discipline.</span>
            </h2>
            <p className="editorial-sub text-base text-warm-stone/80 font-sans leading-relaxed">
              Passing through the 3rd-floor glass facade reveals our workspace: where complex enterprise workflows are dissected, modeled, and transformed into autonomous digital pipelines.
            </p>

            <div className="p-4 rounded-sm bg-white/[0.04] border border-white/[0.08] inline-flex items-center gap-3 font-mono text-xs text-warm-stone/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>EXPLORE THE STUDIO: CLICK WORKSTATION, MONITOR, OR WHITEBOARD FOR BLUEPRINTS</span>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 06 & 07: HUMAN MOMENT & WORKSTATION (46% - 58%)             */}
        {/* ================================================================= */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="max-w-2xl space-y-6">
            <span className="font-mono text-[10px] text-gold tracking-[0.25em] uppercase block">
              03 // THE HUMAN TOUCHPOINT · SINGLE-TOUCH CLARITY
            </span>
            <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
              Sophistication made{' '}
              <span className="text-gold">effortlessly simple.</span>
            </h2>
            <p className="editorial-sub text-base text-warm-stone/80 font-sans leading-relaxed">
              Real business systems should never feel complicated to the people using them. The true test of high-end engineering is creating an interface so intuitive that an entire enterprise runs through a single screen.
            </p>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 08, 09 & 10: PHONE TRANSITION & ASHAIVA DISCOVERED          */}
        {/* (58% - 74%)                                                       */}
        {/* ================================================================= */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.06] text-center">
          <div className="max-w-2xl space-y-6">
            <span className="font-mono text-[10px] text-gold tracking-[0.25em] uppercase block">
              04 // THE PHONE INTERACTION · ASHAIVA DISCOVERED
            </span>
            <h2 className="editorial-title text-4xl sm:text-6xl text-warm-ivory tracking-tight">
              Entering the digital core of{' '}
              <span className="font-serif italic text-gold">Ashaiva.</span>
            </h2>
            <p className="editorial-sub text-base text-warm-stone/80 max-w-xl mx-auto font-sans leading-relaxed">
              As the lens approaches the smartphone screen, the physical studio yields to our digital craft: sovereign AI agents, workflow architectures, and bespoke web products.
            </p>

            <button
              onClick={() => setPhoneExperienceOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 border border-gold/40 text-gold font-mono text-xs tracking-widest uppercase hover:bg-gold hover:text-architectural-950 transition-all duration-300"
            >
              <span>Explore Mobile Conduit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 11, 12 & 13: EXIT PHONE & SPATIAL SERVICES (74% - 86%)      */}
        {/* ================================================================= */}
        <ServicesSection onOpenAudit={openAuditWithService} />

        {/* ================================================================= */}
        {/* SCENE 14: WORK / PORTFOLIO INSTALLATIONS (86% - 92%)              */}
        {/* ================================================================= */}
        <WorkSection onOpenAudit={openAuditWithService} />

        {/* ================================================================= */}
        {/* SCENE 15: TEAM / LEADERSHIP (FARHAN KHAN & MOHIT AGARWAL)         */}
        {/* (92% - 96%)                                                       */}
        {/* ================================================================= */}
        <TeamSection />

        {/* ================================================================= */}
        {/* SCENE 16: FINAL CTA & DAYLIGHT CITYSCAPE (96% - 100%)             */}
        {/* ================================================================= */}
        <section
          id="contact"
          className="relative py-40 px-6 sm:px-12 max-w-7xl mx-auto text-center border-t border-white/[0.08] overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <span className="font-mono text-[10px] text-gold tracking-[0.25em] uppercase block">
              THE NEXT HORIZON // ARCHITECTURAL ENGAGEMENT
            </span>
            <h2 className="editorial-title text-5xl sm:text-7xl lg:text-8xl text-warm-ivory tracking-tight leading-[0.94]">
              HAVE A SYSTEM <br />
              <span className="text-gold font-serif italic">WORTH BUILDING?</span>
            </h2>
            <p className="editorial-sub text-base sm:text-lg text-warm-stone/80 max-w-xl mx-auto font-sans leading-relaxed">
              Tell us what you want to automate, connect or build.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <button
                onClick={() => openAuditWithService()}
                className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-sm bg-gold text-architectural-950 font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-400 hover:bg-gold-light hover:shadow-[0_0_35px_rgba(200,169,126,0.4)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => openAuditWithService('Strategy Call')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-architectural-900 border border-white/[0.12] text-warm-stone font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:border-gold/40 hover:text-warm-ivory"
              >
                <span>Let&apos;s Talk</span>
              </button>
            </div>
          </div>
        </section>

        {/* Minimalist Architectural Footer */}
        <Footer />
      </div>

      {/* Interactive Office Hotspot Modal */}
      <InteractiveHotspotModal
        isOpen={hotspotModal.isOpen}
        type={hotspotModal.type}
        title={hotspotModal.title}
        description={hotspotModal.description}
        onClose={() => setHotspotModal((prev) => ({ ...prev, isOpen: false }))}
        onOpenAudit={openAuditWithService}
      />

      {/* Interactive Phone Simulation Modal */}
      <PhoneInteractiveExperience
        isVisible={phoneExperienceOpen}
        onOpenAudit={openAuditWithService}
        onExitPhone={() => setPhoneExperienceOpen(false)}
      />

      {/* Project Inquiry / Architecture Sprint Modal */}
      <SystemAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        preselectedService={selectedServiceTitle}
      />
    </main>
  );
}

