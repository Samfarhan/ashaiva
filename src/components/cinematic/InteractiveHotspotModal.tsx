'use client';

import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface InteractiveHotspotModalProps {
  isOpen: boolean;
  type: string;
  title: string;
  description: string;
  onClose: () => void;
  onOpenAudit: (serviceName?: string) => void;
}

export function InteractiveHotspotModal({
  isOpen,
  type,
  title,
  description,
  onClose,
  onOpenAudit,
}: InteractiveHotspotModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-architectural-950/60 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative w-full max-w-md rounded-sm bg-white/95 border border-white/40 p-6 sm:p-7 shadow-2xl text-architectural-950">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-sm bg-black/5 hover:bg-black/10 text-neutral-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Minimal Category Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-gold uppercase">
            STUDIO ENVIRONMENT · {type.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-semibold text-architectural-950 mb-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-sans">
          {description}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-black/10">
          <button
            onClick={onClose}
            className="font-mono text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Dismiss
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAudit(title);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-architectural-950 text-warm-ivory text-xs font-sans font-medium tracking-wider uppercase hover:bg-black transition-colors"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

