'use client';

import React from 'react';
import { Activity, ShieldCheck, Terminal, Cpu, Database, Zap, Lock } from 'lucide-react';

export function MotionOverlays() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Top Left Grid Telemetry Coordinates */}
      <div className="absolute top-24 left-8 hidden lg:flex flex-col gap-1 font-mono text-[9px] text-teal-400/60 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>SYS.LATENCY // 1.2MS</span>
        </div>
        <div className="text-slate-500">COORD: 44.8021° N, 10.4201° E</div>
        <div className="text-slate-500">GRID: INFRASTRUCTURE.V2.4</div>
      </div>

      {/* Top Right System Status Indicator */}
      <div className="absolute top-24 right-8 hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full bg-obsidian-900/80 border border-teal-500/20 backdrop-blur-md font-mono text-[10px] text-slate-300">
        <Lock className="w-3 h-3 text-teal-400" />
        <span className="text-slate-400">ENCRYPTION:</span>
        <span className="text-teal-300 font-semibold">AES-256-GCM</span>
      </div>

      {/* Bottom Left Dynamic Signal Pulse */}
      <div className="absolute bottom-8 left-8 hidden lg:flex items-center gap-3 font-mono text-[10px] text-slate-400">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
          <Activity className="w-3 h-3 text-teal-400 animate-bounce" />
          <span className="text-teal-300">NODE STATUS: 100% OPERATIONAL</span>
        </div>
      </div>

      {/* Subtle Horizontal Scanning Line Animation */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-scan" />
    </div>
  );
}
