'use client';

import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);

  const steps = [
    { num: '01 / 03', text: 'COMPOSING URBAN ARCHITECTURE' },
    { num: '02 / 03', text: 'CALIBRATING CAMERA CHOREOGRAPHY' },
    { num: '03 / 03', text: 'ENTERING THE WORLD OF ASHAIVA' },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 350);
    const timer2 = setTimeout(() => setStep(2), 750);
    const timer3 = setTimeout(() => {
      setFading(true);
      setTimeout(onComplete, 450);
    }, 1150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-architectural-950 transition-opacity duration-700 ease-out select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Architectural Monogram */}
        <div className="mb-6 font-serif text-3xl font-medium tracking-[0.3em] text-warm-ivory">
          ASHAIVA
        </div>

        <p className="font-mono text-[9px] tracking-[0.25em] text-gold uppercase mb-8">
          ARCHITECTURE OF INTELLIGENT SYSTEMS
        </p>

        {/* Phase Indicator */}
        <div className="w-full bg-architectural-900 border border-white/[0.08] rounded-sm p-4 flex items-center justify-between font-mono text-xs">
          <span className="text-warm-stone/80 tracking-widest text-[10px]">
            {steps[step].text}
          </span>
          <span className="text-gold font-medium tracking-widest text-[10px]">
            {steps[step].num}
          </span>
        </div>

        {/* Hairline Progress Bar */}
        <div className="w-full bg-white/[0.06] h-[1px] mt-4 overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-400 ease-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
