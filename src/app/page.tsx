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
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.3,
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
    <main className="relative min-h-screen bg-architectural-950 text-warm-ivory overflow-x-hidden selection:bg-gold selection:text-architectural-950 font-sans">
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

      {/* Minimalist Architectural Navigation */}
      <Navbar onOpenAudit={() => openAuditWithService()} />

      {/* =================================================================== */}
      {/* CONTINUOUS CAMERA STORYBOARD DOM SECTIONS                           */}
      {/* =================================================================== */}
      <div className="relative z-10 pointer-events-none">
        {/* ================================================================= */}
        {/* SCENE 01: THE CITY (ESTABLISHING SHOT, 0% - 15%)                  */}
        {/* ================================================================= */}
        <section
          id="city"
          className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto pt-28 pb-20 pointer-events-auto"
        >
          <div className="max-w-3xl">
            <CinematicTypography
              scrollProgress={scrollProgress}
              onOpenAudit={() => openAuditWithService()}
            />
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 02 & 03: THE TOWER APPROACH (15% - 28%)                     */}
        {/* ================================================================= */}
        <section
          id="building"
          className="min-h-screen flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto pointer-events-auto"
        >
          <div className="max-w-2xl editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
              <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
                THE METROPOLITAN MONOLITH
              </span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-warm-ivory tracking-tight leading-[1.05]">
              From the outside, modern commerce looks seamless.{' '}
              <span className="text-gold font-serif italic">Inside, it runs on silent architecture.</span>
            </h2>
            <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 font-sans leading-relaxed">
              Growing companies often suffer from invisible operational friction: disconnected software, delayed inboxes, and manual copy-paste bottlenecks. We engineer sovereign automated architectures that quietly eliminate operational drag.
            </p>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 04 & 05: THE CREATIVE STUDIO FLOOR (28% - 46%)              */}
        {/* ================================================================= */}
        <section
          id="studio"
          className="min-h-screen flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto pointer-events-auto"
        >
          <div className="max-w-3xl editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
              <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
                THE PHYSICAL STUDIO FLOOR
              </span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-warm-ivory tracking-tight leading-[1.05]">
              Where complex engineering meets{' '}
              <span className="text-gold font-serif italic">spatial discipline.</span>
            </h2>
            <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 font-sans leading-relaxed">
              Passing through the panoramic glass reveals our creative workspace: gallery walls hung with architectural topologies, real-time enterprise telemetry displays, and active collaborative design tables where workflows are transformed into autonomous systems.
            </p>

            <div className="p-4 rounded-lg bg-white/[0.04] border border-white/[0.08] inline-flex items-center gap-3 font-mono text-xs text-warm-stone/90">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>EXPLORE THE STUDIO: CLICK WORKSTATION, MONITORS, OR WALL BLUEPRINTS</span>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 06 & 07: HUMAN PURPOSE & VELOCITY (46% - 58%)               */}
        {/* ================================================================= */}
        <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto pointer-events-auto">
          <div className="max-w-2xl editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)] space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
              <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
                HUMAN PURPOSE · MACHINE VELOCITY
              </span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-warm-ivory tracking-tight leading-[1.05]">
              Power made{' '}
              <span className="text-gold font-serif italic">effortlessly quiet.</span>
            </h2>
            <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 font-sans leading-relaxed">
              Real business systems should never feel complicated to the people using them. The true test of high-end engineering is creating an interface so intuitive that an entire enterprise runs through a single screen.
            </p>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 08, 09 & 10: THE MOBILE ECOSYSTEM (58% - 74%)                */}
        {/* ================================================================= */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 max-w-7xl mx-auto pointer-events-auto text-center">
          <div className="max-w-2xl editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)] space-y-6">
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
              <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
                THE MOBILE ECOSYSTEM
              </span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-warm-ivory tracking-tight leading-[1.05]">
              Entering the digital core of{' '}
              <span className="font-serif italic text-gold">Ashaiva.</span>
            </h2>
            <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 max-w-xl mx-auto font-sans leading-relaxed">
              As the lens approaches the smartphone screen, the physical studio yields to our digital craft: sovereign AI agents, workflow architectures, and bespoke web products.
            </p>

            <button
              onClick={() => setPhoneExperienceOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-gold text-architectural-950 font-sans font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-[0_0_25px_rgba(200,169,126,0.4)] transition-all duration-300"
            >
              <span>Explore Mobile Conduit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SCENE 11, 12 & 13: CAPABILITIES (74% - 86%)                       */}
        {/* ================================================================= */}
        <div className="pointer-events-auto">
          <ServicesSection onOpenAudit={openAuditWithService} />
        </div>

        {/* ================================================================= */}
        {/* SCENE 14: SELECTED COMMISSIONS (86% - 92%)                        */}
        {/* ================================================================= */}
        <div className="pointer-events-auto">
          <WorkSection onOpenAudit={openAuditWithService} />
        </div>

        {/* ================================================================= */}
        {/* SCENE 15: LEADERSHIP (FARHAN KHAN & MOHIT AGARWAL) (92% - 96%)    */}
        {/* ================================================================= */}
        <div className="pointer-events-auto">
          <TeamSection />
        </div>

        {/* ================================================================= */}
        {/* SCENE 16: COMMISSIONING ARCHITECTURE (96% - 100%)                 */}
        {/* ================================================================= */}
        <section
          id="contact"
          className="relative py-32 px-6 sm:px-12 max-w-7xl mx-auto text-center pointer-events-auto"
        >
          <div className="editorial-panel backdrop-blur-3xl bg-[#07090e]/92 border border-white/[0.12] rounded-2xl p-10 sm:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] max-w-3xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_#c8a97e]" />
              <span className="font-mono text-[11px] text-gold tracking-[0.25em] uppercase font-semibold">
                COMMISSIONING ARCHITECTURE
              </span>
            </div>

            <h2 className="editorial-title text-4xl sm:text-6xl lg:text-7xl text-warm-ivory tracking-tight leading-[0.98]">
              HAVE A SYSTEM <br />
              <span className="text-gold font-serif italic">WORTH BUILDING?</span>
            </h2>

            <p className="editorial-sub text-base sm:text-lg text-warm-stone/90 max-w-xl mx-auto font-sans leading-relaxed">
              Tell us what you want to automate, connect or build. Our founders respond within 24 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <button
                onClick={() => openAuditWithService()}
                className="group inline-flex items-center gap-3 px-9 py-4 rounded-sm bg-gold text-architectural-950 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_35px_rgba(200,169,126,0.4)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => openAuditWithService('Strategy Call')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-white/[0.04] border border-white/[0.14] text-warm-ivory font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/[0.08] hover:border-gold/40"
              >
                <span>Book Strategy Call</span>
              </button>
            </div>
          </div>
        </section>

        {/* Minimalist Architectural Footer */}
        <div className="pointer-events-auto">
          <Footer />
        </div>
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
