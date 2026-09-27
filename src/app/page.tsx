'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Lenis from 'lenis';
import { Navbar } from '@/components/ui/Navbar';
import { Preloader } from '@/components/ui/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { InteractiveWorkflowDemo } from '@/components/ui/InteractiveWorkflowDemo';
import { MotionOverlays } from '@/components/motion/MotionOverlays';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { InteractiveInterfaces } from '@/components/ui/InteractiveInterfaces';
import { IndustryShowcase } from '@/components/ui/IndustryShowcase';
import { ProcessRoadmap } from '@/components/ui/ProcessRoadmap';
import { RoiCalculator } from '@/components/ui/RoiCalculator';
import { SystemAuditModal } from '@/components/ui/SystemAuditModal';
import { Footer } from '@/components/ui/Footer';
import { ArrowUpRight, Cpu, Sparkles, Shield, ChevronDown, CheckCircle2, Zap } from 'lucide-react';

// Dynamic import of the 3D WebGL Canvas to prevent SSR hydration mismatches
const Scene = dynamic(() => import('@/components/3d/Scene').then((mod) => mod.Scene), {
  ssr: false,
});

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');

  // Setup Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
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
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-obsidian-950 text-slate-100 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-200">
      {/* Precision Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Futuristic Motion Graphics Overlays */}
      <MotionOverlays />

      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Persistent 3D WebGL Scene */}
      <Scene scrollProgress={scrollProgress} />

      {/* Minimal Navigation */}
      <Navbar onOpenAudit={() => openAuditWithService()} />

      {/* Scrollytelling DOM Container */}
      <div className="relative z-10">
        {/* ================================================================= */}
        {/* SECTION 1: CINEMATIC HERO (0% - 10%)                             */}
        {/* ================================================================= */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 max-w-7xl mx-auto pt-24 pb-16">
          <div className="max-w-3xl space-y-6">
            {/* Technical Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-teal-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(45,212,191,0.15)]">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span className="font-mono text-xs text-teal-300 font-medium tracking-widest uppercase">
                ASHAIVA ENTERPRISE AUTOMATION
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.04]">
              Automate the Work.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-sky-300">
                Amplify the Business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl leading-relaxed">
              ASHAIVA AUTOMATION designs intelligent systems that connect your leads, communication, operations, and data into one automated workflow.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openAuditWithService()}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-teal-400 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_0_35px_rgba(45,212,191,0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Build My Automation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-obsidian-850/90 border border-white/[0.12] text-slate-200 font-mono text-xs tracking-wider uppercase transition-all duration-300 hover:bg-obsidian-800 hover:border-teal-500/40 hover:text-white"
              >
                <span>Explore Systems</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>

            {/* Live Operational Telemetry Ticker */}
            <div className="pt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400 border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="text-teal-400 font-bold">18s</span>
                <span>MEDIAN LEAD RESPONSE</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="text-teal-400 font-bold">100%</span>
                <span>CRM ACCURACY</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="text-teal-400 font-bold">0%</span>
                <span>DROPPED LEADS</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 2: CENTRAL CONCEPT (10% - 22%)                           */}
        {/* ================================================================= */}
        <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="max-w-4xl space-y-6">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block">
              THE CENTRAL THESIS // 01 CHAOS TO SYSTEMS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Businesses are chaotic.{' '}
              <br />
              <span className="text-teal-300">ASHAIVA turns chaos into systems.</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
              In growing companies, valuable work fragments across separate SaaS silos, delayed inboxes, unupdated spreadsheets, and repetitive human labor. We replace operational chaos with cohesive, self-healing automated architectures.
            </p>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 3: LIVING ENGINE FLOW SIMULATION (22% - 35%)             */}
        {/* ================================================================= */}
        <section id="systems" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="mb-10 max-w-2xl space-y-2">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block">
              INTERACTIVE ARCHITECTURE // 02 LIVING PIPELINE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Watch The Automation Engine Run
            </h2>
            <p className="text-sm text-slate-300 font-sans">
              Test how an inbound lead signal travels through real-time AI qualification, CRM enrichment, speed-to-lead dispatch, and executive reporting.
            </p>
          </div>
          <InteractiveWorkflowDemo />
        </section>

        {/* ================================================================= */}
        {/* SECTION 4: 10 CORE SERVICES AUTOMATION SUITE                      */}
        {/* ================================================================= */}
        <ServicesSection onOpenAudit={openAuditWithService} />

        {/* ================================================================= */}
        {/* SECTION 5: 5-STAGE METHODOLOGY                                   */}
        {/* ================================================================= */}
        <section id="process" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="mb-10 max-w-2xl space-y-2">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block">
              METHODOLOGY // 05 FIVE PHASES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              From Chaos to Automated Execution in 14 Days
            </h2>
            <p className="text-sm text-slate-300 font-sans">
              A structured, low-risk engineering deployment designed to require zero technical overhead from your internal staff.
            </p>
          </div>
          <ProcessRoadmap />
        </section>

        {/* ================================================================= */}
        {/* SECTION 6: PROVEN WORK CASE STUDIES                              */}
        {/* ================================================================= */}
        <WorkSection onOpenAudit={openAuditWithService} />

        {/* ================================================================= */}
        {/* SECTION 7: BEFORE / AFTER TRANSFORMATION & PRODUCT INTERFACES     */}
        {/* ================================================================= */}
        <section id="before-after" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block">
              METAMORPHOSIS // THE OPERATIONAL SHIFT
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              The Cost of Inaction vs. The Speed of Ashaiva
            </h2>
            <p className="text-sm text-slate-300 font-sans">
              Examine how modern business operations transform when manual friction is engineered out of the organization.
            </p>
          </div>
          <BeforeAfterSlider />
        </section>

        <section id="interfaces" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="mb-10 max-w-2xl space-y-2">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block">
              TACTILE ENVIRONMENTS // PRODUCT SUITE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Operating System For Modern Scale
            </h2>
            <p className="text-sm text-slate-300 font-sans">
              Experience the unified control layer: live CRM pipelines, autonomous inbox triage, AI agent sandboxes, and real-time latency monitors.
            </p>
          </div>
          <InteractiveInterfaces />
        </section>

        <section id="industries" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="mb-10 max-w-2xl space-y-2">
            <span className="font-mono text-xs text-teal-400 uppercase tracking-widest block">
              INDUSTRY ARCHITECTURES // CUSTOM FIT
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Engineered For Diverse Business Categories
            </h2>
            <p className="text-sm text-slate-300 font-sans">
              From fast-scaling agencies and high-volume e-commerce to clinics and tech companies, ASHAIVA customizes every system to your exact workflow.
            </p>
          </div>
          <IndustryShowcase onSelectIndustry={openAuditWithService} />
        </section>

        {/* ================================================================= */}
        {/* SECTION 8: FOUNDER-LED STUDIO (FARHAN KHAN & MOHIT AGARWAL)       */}
        {/* ================================================================= */}
        <TeamSection />

        {/* ================================================================= */}
        {/* SECTION 9: ROI CALCULATOR                                        */}
        {/* ================================================================= */}
        <section id="calculator" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <RoiCalculator onOpenAudit={() => openAuditWithService()} />
        </section>

        {/* ================================================================= */}
        {/* SECTION 10: CINEMATIC FINAL CTA (96% - 100%)                     */}
        {/* ================================================================= */}
        <section className="relative py-32 px-6 sm:px-8 max-w-7xl mx-auto text-center border-t border-white/[0.08] overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs text-teal-400 tracking-widest uppercase block">
              THE NEXT STEP // SECURE YOUR SYSTEM
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Your business already has the work.{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-300">
                We build the system that runs it.
              </span>
            </h2>
            <p className="text-base text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
              Stop letting manual tasks and slow response times throttle your revenue. Deploy sovereign, custom AI automation tailored to your exact stack.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => openAuditWithService()}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-400 text-obsidian-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-teal-300 hover:shadow-[0_0_40px_rgba(45,212,191,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Automate Your Business</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => openAuditWithService('Strategy Call')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-obsidian-850 border border-teal-500/30 text-teal-300 font-mono text-xs tracking-wider uppercase transition-all duration-300 hover:bg-teal-500/10 hover:border-teal-400"
              >
                <span>Book a Strategy Call</span>
              </button>
            </div>
          </div>
        </section>

        {/* Minimal Editorial Footer */}
        <Footer />
      </div>

      {/* System Audit / Request Specification Modal */}
      <SystemAuditModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedServiceTitle}
      />
    </main>
  );
}
