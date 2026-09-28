'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface OfficeSceneProps {
  scrollProgress: number;
  onSelectHotspot?: (type: string, title: string, description: string) => void;
}

export function OfficeScene({ scrollProgress, onSelectHotspot }: OfficeSceneProps) {
  const isVisible = scrollProgress > 0.22 && scrollProgress < 0.98;

  // =========================================================================
  // 1. TEXTURE: Large Wall Data Board (Live Enterprise Systems Metrics)
  // =========================================================================
  const mainDataBoardTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1536;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Deep architectural matte slate background with subtle grid
    ctx.fillStyle = '#0a0d13';
    ctx.fillRect(0, 0, 1536, 768);

    ctx.strokeStyle = '#151b26';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1536; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 768);
      ctx.stroke();
    }
    for (let y = 0; y < 768; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1536, y);
      ctx.stroke();
    }

    // Top Header Bar
    ctx.fillStyle = '#121824';
    ctx.fillRect(0, 0, 1536, 64);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 20px "Cinzel", serif';
    ctx.letterSpacing = '6px';
    ctx.fillText('ASHAIVA LIVING ENGINE · REAL-TIME SYSTEM TELEMETRY', 48, 40);

    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.arc(1420, 32, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f5f3ee';
    ctx.font = '500 16px "JetBrains Mono", monospace';
    ctx.fillText('ACTIVE · 100% HEALTH', 1440, 38);

    // Metric 1: System Throughput
    ctx.fillStyle = '#101520';
    ctx.fillRect(48, 100, 320, 240);
    ctx.strokeStyle = '#222b3d';
    ctx.strokeRect(48, 100, 320, 240);

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '500 15px "JetBrains Mono", monospace';
    ctx.fillText('THROUGHPUT / 24H', 72, 140);
    ctx.fillStyle = '#fbfaf8';
    ctx.font = '700 52px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('2.84M', 72, 210);
    ctx.fillStyle = '#4ade80';
    ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('↑ +38.4% automated actions', 72, 255);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillText('PEAK: 12,400 ops/min', 72, 300);

    // Metric 2: Latency
    ctx.fillStyle = '#101520';
    ctx.fillRect(400, 100, 320, 240);
    ctx.strokeStyle = '#222b3d';
    ctx.strokeRect(400, 100, 320, 240);

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '500 15px "JetBrains Mono", monospace';
    ctx.fillText('CONDUIT LATENCY', 424, 140);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '700 52px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('14.2 ms', 424, 210);
    ctx.fillStyle = '#f5f3ee';
    ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Zero packet drop guarantee', 424, 255);
    ctx.fillStyle = '#8f9bb3';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillText('TLS 1.3 · E2E ENCRYPTED', 424, 300);

    // Metric 3: Active Agents
    ctx.fillStyle = '#101520';
    ctx.fillRect(752, 100, 320, 240);
    ctx.strokeStyle = '#222b3d';
    ctx.strokeRect(752, 100, 320, 240);

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '500 15px "JetBrains Mono", monospace';
    ctx.fillText('AGENT SWARMS', 776, 140);
    ctx.fillStyle = '#fbfaf8';
    ctx.font = '700 52px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('64 / 64', 776, 210);
    ctx.fillStyle = '#4ade80';
    ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Autonomous triage active', 776, 255);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillText('ROUTER: DUAL-LLM POOL', 776, 300);

    // Metric 4: Revenue Conduits
    ctx.fillStyle = '#101520';
    ctx.fillRect(1104, 100, 384, 240);
    ctx.strokeStyle = '#222b3d';
    ctx.strokeRect(1104, 100, 384, 240);

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '500 15px "JetBrains Mono", monospace';
    ctx.fillText('PIPELINE REVENUE FLOW', 1128, 140);
    ctx.fillStyle = '#fbfaf8';
    ctx.font = '700 52px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('$18.42M', 1128, 210);
    ctx.fillStyle = '#4ade80';
    ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Validated enterprise value', 1128, 255);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillText('STATUS: EXPANDING Q4', 1128, 300);

    // Bottom Half: Realtime Vector Waveform & Node Network
    ctx.fillStyle = '#0d1118';
    ctx.fillRect(48, 370, 1440, 350);
    ctx.strokeStyle = '#1e2638';
    ctx.strokeRect(48, 370, 1440, 350);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.fillText('EVENT STREAM VELOCITY · REAL-TIME DISPATCH DYNAMICS', 80, 410);

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#c8a97e';
    ctx.beginPath();
    for (let x = 80; x < 1440; x += 12) {
      const y = 560 + Math.sin(x * 0.02) * 55 + Math.cos(x * 0.045) * 35;
      if (x === 80) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(74, 222, 128, 0.6)';
    ctx.beginPath();
    for (let x = 80; x < 1440; x += 12) {
      const y = 590 + Math.sin(x * 0.015 + 2) * 40 + Math.cos(x * 0.05) * 20;
      if (x === 80) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 2. TEXTURE: Large Fine Art Architectural Poster A (Systems Topology)
  // =========================================================================
  const posterTopologyTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1440;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#f4ede2';
    ctx.fillRect(0, 0, 1024, 1440);

    ctx.strokeStyle = '#1e1c18';
    ctx.lineWidth = 2;
    ctx.strokeRect(48, 48, 928, 1344);

    ctx.fillStyle = '#1e1c18';
    ctx.font = '700 48px "Cinzel", serif';
    ctx.fillText('ASHAIVA', 80, 140);
    ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '5px';
    ctx.fillText('SYSTEMS TOPOLOGY V4', 80, 180);
    ctx.font = '500 14px "JetBrains Mono", monospace';
    ctx.fillStyle = '#6e685f';
    ctx.fillText('EXHIBITION ARCHIVE · AUTONOMOUS ENGINES', 80, 210);

    // Axonometric architectural cubes & conduits
    ctx.strokeStyle = '#1e1c18';
    ctx.lineWidth = 4;

    ctx.fillStyle = '#e8dccb';
    ctx.beginPath();
    ctx.moveTo(512, 440);
    ctx.lineTo(720, 540);
    ctx.lineTo(720, 780);
    ctx.lineTo(512, 680);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#dfcfba';
    ctx.beginPath();
    ctx.moveTo(512, 440);
    ctx.lineTo(304, 540);
    ctx.lineTo(304, 780);
    ctx.lineTo(512, 680);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#f7eedf';
    ctx.beginPath();
    ctx.moveTo(512, 440);
    ctx.lineTo(720, 540);
    ctx.lineTo(512, 640);
    ctx.lineTo(304, 540);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Architectural Copper Accent Lines
    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(512, 640);
    ctx.lineTo(512, 1040);
    ctx.moveTo(720, 660);
    ctx.lineTo(840, 720);
    ctx.lineTo(840, 1040);
    ctx.moveTo(304, 660);
    ctx.lineTo(184, 720);
    ctx.lineTo(184, 1040);
    ctx.stroke();

    ctx.fillStyle = '#1e1c18';
    ctx.font = '600 24px "Cinzel", serif';
    ctx.fillText('THE ARCHITECTURE OF AUTOMATION', 80, 1180);
    ctx.font = '400 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#4e4840';
    ctx.fillText('Engineered for sovereign business resilience.', 80, 1220);
    ctx.fillText('Bespoke AI agents, API conduits, and verified data pipelines.', 80, 1250);

    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillStyle = '#8e8679';
    ctx.fillText('DESIGNED IN STUDIO · MOHIT AGARWAL & FARHAN KHAN', 80, 1320);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 3. TEXTURE: Large Fine Art Architectural Poster B (The Manifesto)
  // =========================================================================
  const posterManifestoTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1440;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#13151a';
    ctx.fillRect(0, 0, 1024, 1440);

    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 3;
    ctx.strokeRect(48, 48, 928, 1344);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 20px "JetBrains Mono", monospace';
    ctx.letterSpacing = '8px';
    ctx.fillText('STUDIO MANIFESTO · 2024–2026', 80, 140);

    ctx.fillStyle = '#fcfaf7';
    ctx.font = '700 72px "Cinzel", serif';
    ctx.fillText('CODE AS', 80, 250);
    ctx.font = '700 72px "Cinzel", serif';
    ctx.fillStyle = '#c8a97e';
    ctx.fillText('PHYSICAL', 80, 335);
    ctx.fillStyle = '#fcfaf7';
    ctx.fillText('STRUCTURE.', 80, 420);

    ctx.fillStyle = '#c8a97e';
    ctx.fillRect(80, 480, 180, 4);

    const principles = [
      { num: '01', title: 'RESILIENCE OVER COMPLEXITY', desc: 'A system must thrive under volatile enterprise volume without fragile dependencies.' },
      { num: '02', title: 'HUMAN INTENT, AUTONOMOUS EXECUTION', desc: 'Eliminate repetitive friction so leadership focuses entirely on strategic velocity.' },
      { num: '03', title: 'SOVEREIGN ARCHITECTURE', desc: 'No vendor lock-in. Clean, modular, inspectable pipelines built on open standards.' },
    ];

    principles.forEach((p, idx) => {
      const y = 570 + idx * 220;
      ctx.fillStyle = '#c8a97e';
      ctx.font = '700 32px "JetBrains Mono", monospace';
      ctx.fillText(p.num, 80, y);

      ctx.fillStyle = '#fcfaf7';
      ctx.font = '600 28px "Cinzel", serif';
      ctx.fillText(p.title, 160, y);

      ctx.fillStyle = '#a6b0c2';
      ctx.font = '400 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(p.desc, 160, y + 45);
    });

    ctx.fillStyle = '#5c6475';
    ctx.font = '500 15px "JetBrains Mono", monospace';
    ctx.fillText('ASHAIVA STUDIO · FARHAN KHAN & MOHIT AGARWAL', 80, 1310);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 4. TEXTURE: Large Studio Pinboard / Workflow Mood Board
  // =========================================================================
  const pinboardTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1536;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#d8cbba';
    ctx.fillRect(0, 0, 1536, 1024);

    ctx.strokeStyle = '#423326';
    ctx.lineWidth = 24;
    ctx.strokeRect(12, 12, 1512, 1000);

    // Sheet 1: Pinned Blueprint Sheet
    ctx.fillStyle = '#182538';
    ctx.fillRect(80, 80, 480, 360);
    ctx.fillStyle = '#d4e5f8';
    ctx.font = '600 20px "Cinzel", serif';
    ctx.fillText('ENTERPRISE DATA CONDUIT', 110, 130);
    ctx.font = '14px "JetBrains Mono", monospace';
    ctx.fillStyle = '#8db8dc';
    ctx.fillText('SCHEMATIC V2 · DEPLOYED', 110, 160);
    ctx.strokeStyle = '#6898c8';
    ctx.lineWidth = 2;
    ctx.strokeRect(110, 200, 120, 80);
    ctx.strokeRect(300, 200, 160, 80);
    ctx.beginPath();
    ctx.moveTo(230, 240);
    ctx.lineTo(300, 240);
    ctx.stroke();

    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(90, 90, 8, 0, Math.PI * 2);
    ctx.arc(550, 90, 8, 0, Math.PI * 2);
    ctx.fill();

    // Sheet 2: Pinned Architectural Facade Sketch
    ctx.fillStyle = '#fbf8f2';
    ctx.fillRect(620, 80, 460, 420);
    ctx.strokeStyle = '#1e1c18';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(620, 80, 460, 420);
    ctx.fillStyle = '#1e1c18';
    ctx.font = '600 18px "Cinzel", serif';
    ctx.fillText('TOWER ELEVATION STUDY', 650, 130);
    for (let x = 680; x <= 1020; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 160);
      ctx.lineTo(x, 450);
      ctx.stroke();
    }
    ctx.fillStyle = '#c8a97e';
    ctx.beginPath();
    ctx.arc(850, 90, 9, 0, Math.PI * 2);
    ctx.fill();

    // Sheet 3: Pinned Sticky Notes & Color Swatches
    const notes = [
      { x: 1140, y: 90, color: '#fef08a', text: 'Optimize agent\nlatency to <12ms' },
      { x: 1300, y: 110, color: '#fed7aa', text: 'Render 3D studio\nin high realism' },
      { x: 1150, y: 260, color: '#bfdbfe', text: 'HubSpot & Salesforce\nwebhook sync' },
      { x: 1310, y: 280, color: '#bbf7d0', text: 'Client brief sprint\nscheduled 10 AM' },
    ];

    notes.forEach((note) => {
      ctx.fillStyle = note.color;
      ctx.fillRect(note.x, note.y, 140, 130);
      ctx.fillStyle = '#1e293b';
      ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
      const lines = note.text.split('\n');
      lines.forEach((l, i) => ctx.fillText(l, note.x + 12, note.y + 40 + i * 22));
    });

    // Sheet 4: Roadmap Gantt
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(80, 500, 1000, 440);
    ctx.strokeStyle = '#cbd5e1';
    ctx.strokeRect(80, 500, 1000, 440);
    ctx.fillStyle = '#0f172a';
    ctx.font = '700 24px "Cinzel", serif';
    ctx.fillText('Q4 PRODUCTION PIPELINE ROADMAP', 120, 560);

    const phases = [
      { name: 'Architecture Discovery Sprint', w: 420, color: '#c8a97e' },
      { name: 'Multi-Agent Network Build', w: 620, color: '#38bdf8' },
      { name: 'Enterprise Integration & Webhooks', w: 540, color: '#4ade80' },
      { name: 'Production Stress Verification', w: 780, color: '#a855f7' },
    ];

    phases.forEach((ph, i) => {
      const y = 620 + i * 70;
      ctx.fillStyle = '#475569';
      ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(ph.name, 120, y + 25);
      ctx.fillStyle = ph.color;
      ctx.fillRect(440, y + 5, ph.w, 30);
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 5. TEXTURE: Corridor Poster 1 (Autonomous Pipeline Architecture)
  // =========================================================================
  const corridorPoster1Texture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1440;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#0b0e14';
    ctx.fillRect(0, 0, 1024, 1440);

    ctx.strokeStyle = '#232c3d';
    ctx.lineWidth = 2;
    ctx.strokeRect(36, 36, 952, 1368);

    // Warm Gold Framing Accent
    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 1;
    ctx.strokeRect(48, 48, 928, 1344);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.letterSpacing = '6px';
    ctx.fillText('ASHAIVA ARCHITECTURAL SPECIFICATION', 80, 120);

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 44px "Cinzel", serif';
    ctx.fillText('AUTONOMOUS', 80, 185);
    ctx.fillText('PIPELINE V5', 80, 235);

    // Blueprint Grid in Center
    ctx.fillStyle = '#111622';
    ctx.fillRect(80, 280, 864, 620);
    ctx.strokeStyle = '#1d2638';
    ctx.strokeRect(80, 280, 864, 620);

    // Grid lines inside blueprint
    ctx.strokeStyle = '#182030';
    ctx.lineWidth = 1;
    for (let x = 80; x <= 944; x += 48) {
      ctx.beginPath();
      ctx.moveTo(x, 280);
      ctx.lineTo(x, 900);
      ctx.stroke();
    }
    for (let y = 280; y <= 900; y += 48) {
      ctx.beginPath();
      ctx.moveTo(80, y);
      ctx.lineTo(944, y);
      ctx.stroke();
    }

    // Pipeline Nodes
    const pipelineNodes = [
      { x: 180, y: 440, label: 'INGRESS · WEBHOOKS', sub: 'TLS 1.3 / HMAC' },
      { x: 512, y: 440, label: 'ORCHESTRATOR', sub: '64 AGENT POOL' },
      { x: 840, y: 440, label: 'VECTOR MEMORY', sub: 'EMBEDDINGS STORE' },
      { x: 340, y: 720, label: 'TOOL EXECUTION', sub: 'DETERMINISTIC RUNTIME' },
      { x: 680, y: 720, label: 'EGRESS · CRM / ERP', sub: 'ZERO DROP GUARANTEE' },
    ];

    // Conduits
    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(180, 440);
    ctx.lineTo(512, 440);
    ctx.lineTo(840, 440);
    ctx.moveTo(512, 440);
    ctx.lineTo(340, 720);
    ctx.moveTo(512, 440);
    ctx.lineTo(680, 720);
    ctx.stroke();

    pipelineNodes.forEach((node) => {
      ctx.fillStyle = '#182133';
      ctx.fillRect(node.x - 110, node.y - 45, 220, 90);
      ctx.strokeStyle = '#c8a97e';
      ctx.lineWidth = 2;
      ctx.strokeRect(node.x - 110, node.y - 45, 220, 90);

      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(node.x - 90, node.y - 20, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f8f6f0';
      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.fillText(node.label, node.x - 76, node.y - 15);
      ctx.fillStyle = '#8f9bb3';
      ctx.font = '500 11px "JetBrains Mono", monospace';
      ctx.fillText(node.sub, node.x - 76, node.y + 15);
    });

    // Technical Stats below diagram
    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('99.98%', 80, 990);
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillStyle = '#8f9bb3';
    ctx.fillText('DETERMINISTIC RETRIEVAL', 80, 1020);

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('8.4 ms', 380, 990);
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillStyle = '#8f9bb3';
    ctx.fillText('MEDIAN INGRESS LATENCY', 380, 1020);

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('256', 680, 990);
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillStyle = '#8f9bb3';
    ctx.fillText('CONCURRENT PIPELINES', 680, 1020);

    ctx.strokeStyle = '#222b3d';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, 1070);
    ctx.lineTo(944, 1070);
    ctx.stroke();

    ctx.fillStyle = '#5c6475';
    ctx.font = '500 14px "JetBrains Mono", monospace';
    ctx.fillText('STUDIO ARCHITECTURE · MOHIT AGARWAL & FARHAN KHAN', 80, 1310);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 6. TEXTURE: Corridor Poster 2 (Live Enterprise SLA & Telemetry Board)
  // =========================================================================
  const corridorPoster2Texture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1440;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#0f141d';
    ctx.fillRect(0, 0, 1024, 1440);

    ctx.strokeStyle = '#222d3f';
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, 944, 1360);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 18px "Cinzel", serif';
    ctx.letterSpacing = '6px';
    ctx.fillText('ASHAIVA ENTERPRISE TELEMETRY', 80, 120);

    // Large Big Number 1: 99.998% Uptime SLA
    ctx.fillStyle = '#141c2b';
    ctx.fillRect(80, 160, 864, 260);
    ctx.strokeStyle = '#2c3b52';
    ctx.strokeRect(80, 160, 864, 260);

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.fillText('GUARANTEED SYSTEM SLA', 110, 210);

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 80px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('99.998%', 110, 310);

    ctx.fillStyle = '#4ade80';
    ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('● Zero unplanned downtime recorded in 365 days', 110, 370);

    // Big Number 2: 12,400 Actions / Min
    ctx.fillStyle = '#141c2b';
    ctx.fillRect(80, 460, 410, 260);
    ctx.strokeStyle = '#2c3b52';
    ctx.strokeRect(80, 460, 410, 260);

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '600 14px "JetBrains Mono", monospace';
    ctx.fillText('PEAK ACTION VELOCITY', 110, 510);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '700 58px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('12.4K', 110, 600);
    ctx.fillStyle = '#a6b0c2';
    ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('actions dispatched / min', 110, 650);

    // Big Number 3: 14.2 ms Conduit Latency
    ctx.fillStyle = '#141c2b';
    ctx.fillRect(534, 460, 410, 260);
    ctx.strokeStyle = '#2c3b52';
    ctx.strokeRect(534, 460, 410, 260);

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '600 14px "JetBrains Mono", monospace';
    ctx.fillText('MEDIAN ROUND-TRIP', 564, 510);
    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 58px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('14.2 ms', 564, 600);
    ctx.fillStyle = '#4ade80';
    ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Sub-frame response budget', 564, 650);

    // Bar Chart: Latency Distribution
    ctx.fillStyle = '#141c2b';
    ctx.fillRect(80, 760, 864, 380);
    ctx.strokeStyle = '#2c3b52';
    ctx.strokeRect(80, 760, 864, 380);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.fillText('LATENCY DISTRIBUTION BY REGION', 110, 810);

    const regions = [
      { name: 'US-East (N. Virginia)', ms: '9.2 ms', bar: 700, col: '#4ade80' },
      { name: 'EU-Central (Frankfurt)', ms: '12.8 ms', bar: 620, col: '#38bdf8' },
      { name: 'AP-East (Tokyo)', ms: '16.4 ms', bar: 540, col: '#c8a97e' },
      { name: 'Global Edge Anycast', ms: '14.2 ms', bar: 660, col: '#a855f7' },
    ];

    regions.forEach((r, idx) => {
      const y = 870 + idx * 56;
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '500 14px "JetBrains Mono", monospace';
      ctx.fillText(r.name, 110, y + 14);

      ctx.fillStyle = '#222d3f';
      ctx.fillRect(400, y, 420, 20);
      ctx.fillStyle = r.col;
      ctx.fillRect(400, y, (parseInt(r.ms) / 20) * 420, 20);

      ctx.fillStyle = '#f8f6f0';
      ctx.font = '600 14px "JetBrains Mono", monospace';
      ctx.fillText(r.ms, 840, y + 14);
    });

    ctx.fillStyle = '#5c6475';
    ctx.font = '500 14px "JetBrains Mono", monospace';
    ctx.fillText('ASHAIVA LIVING TELEMETRY · REFRESH INTERVAL: REALTIME', 80, 1310);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 7. TEXTURE: Freestanding Glass Telemetry Totem Monolith
  // =========================================================================
  const monolithTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, 512, 1024);

    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 4;
    ctx.strokeRect(16, 16, 480, 992);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '700 20px "Cinzel", serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('ASHAIVA TOTEM', 40, 70);

    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.arc(440, 65, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#8f9bb3';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillText('CORE METRICS', 40, 120);

    const stats = [
      { label: 'HEALTH', val: '100.0%' },
      { label: 'ACTIVE PIPELINES', val: '18 / 18' },
      { label: 'AVG QUEUE WAIT', val: '1.2 ms' },
      { label: 'CACHE HIT RATE', val: '99.4%' },
      { label: 'CONDUIT STATUS', val: 'LOCKED' },
    ];

    stats.forEach((s, i) => {
      const y = 170 + i * 70;
      ctx.fillStyle = '#101622';
      ctx.fillRect(36, y, 440, 52);
      ctx.strokeStyle = '#1e293b';
      ctx.strokeRect(36, y, 440, 52);

      ctx.fillStyle = '#8f9bb3';
      ctx.font = '500 13px "JetBrains Mono", monospace';
      ctx.fillText(s.label, 52, y + 32);

      ctx.fillStyle = '#f8f6f0';
      ctx.font = '700 16px "JetBrains Mono", monospace';
      ctx.fillText(s.val, 340, y + 32);
    });

    // Circular Gauge
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(256, 680, 90, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(256, 680, 90, -Math.PI / 2, Math.PI * 1.3);
    ctx.stroke();

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 36px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('94.8%', 256, 685);
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillStyle = '#8f9bb3';
    ctx.fillText('TOTAL AUTOMATION YIELD', 256, 725);
    ctx.textAlign = 'left';

    // Waveform stream at bottom
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#4ade80';
    ctx.beginPath();
    for (let x = 40; x <= 472; x += 8) {
      const y = 880 + Math.sin(x * 0.05) * 20;
      if (x === 40) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.fillStyle = '#5c6475';
    ctx.font = '500 12px "JetBrains Mono", monospace';
    ctx.fillText('SYSTEM HEARTBEAT · ACTIVE', 40, 950);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 8. TEXTURE: Drafting Table Technical Blueprint
  // =========================================================================
  const draftingBlueprintTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#0f2744';
    ctx.fillRect(0, 0, 1024, 768);

    ctx.strokeStyle = '#295482';
    ctx.lineWidth = 1;
    for (let x = 0; x <= 1024; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 768);
      ctx.stroke();
    }
    for (let y = 0; y <= 768; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    ctx.strokeStyle = '#8ab8e6';
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 32, 960, 704);

    ctx.fillStyle = '#e8f2fc';
    ctx.font = '700 24px "Cinzel", serif';
    ctx.fillText('ASHAIVA AUTOMATION SUITE · ARCHITECTURAL DRAWING 01', 64, 80);

    // Architectural drawing boxes
    ctx.strokeStyle = '#c5dff8';
    ctx.lineWidth = 2;
    ctx.strokeRect(96, 140, 240, 200);
    ctx.strokeRect(400, 140, 260, 200);
    ctx.strokeRect(720, 140, 200, 200);

    ctx.beginPath();
    ctx.moveTo(336, 240);
    ctx.lineTo(400, 240);
    ctx.moveTo(660, 240);
    ctx.lineTo(720, 240);
    ctx.stroke();

    ctx.fillStyle = '#c5dff8';
    ctx.font = '600 14px "JetBrains Mono", monospace';
    ctx.fillText('INGRESS LAYER', 120, 180);
    ctx.fillText('AGENT ENGINE', 424, 180);
    ctx.fillText('EGRESS API', 744, 180);

    // Lower detail elevation
    ctx.strokeRect(96, 400, 560, 260);
    ctx.fillText('ELEVATION & CONDUIT TOPOLOGY', 120, 440);

    // Compass rose
    ctx.beginPath();
    ctx.arc(820, 520, 60, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText('N', 815, 480);
    ctx.fillText('SCALE 1:50', 780, 610);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // =========================================================================
  // 9. TEXTURE: Curved Ultra-Wide Executive Desk Monitor
  // =========================================================================
  const curvedMonitorTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#090c12';
    ctx.fillRect(0, 0, 1024, 512);

    // Header Bar
    ctx.fillStyle = '#101724';
    ctx.fillRect(0, 0, 1024, 40);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 14px "Cinzel", serif';
    ctx.fillText('ASHAIVA STUDIO CONSOLE · ACTIVE TERMINAL', 24, 25);

    // Window 1: Code / Pipeline DAG
    ctx.fillStyle = '#0d131f';
    ctx.fillRect(20, 60, 310, 420);
    ctx.strokeStyle = '#1d273a';
    ctx.strokeRect(20, 60, 310, 420);
    ctx.fillStyle = '#4ade80';
    ctx.font = '500 11px "JetBrains Mono", monospace';
    ctx.fillText('const agentCluster = new Swarm({', 36, 100);
    ctx.fillText('  orchestrator: "Ashaiva-Core",', 36, 125);
    ctx.fillText('  concurrency: 64,', 36, 150);
    ctx.fillText('  guardrails: "Sovereign-v4",', 36, 175);
    ctx.fillText('  telemetry: "Realtime-Stream",', 36, 200);
    ctx.fillText('});', 36, 225);
    ctx.fillText('await agentCluster.deploy();', 36, 260);
    ctx.fillStyle = '#c8a97e';
    ctx.fillText('✓ PIPELINE ACTIVE · 0 ERRORS', 36, 310);

    // Window 2: Live Network Graph
    ctx.fillStyle = '#0d131f';
    ctx.fillRect(350, 60, 380, 420);
    ctx.strokeStyle = '#1d273a';
    ctx.strokeRect(350, 60, 380, 420);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillText('AGENT CONDUIT TOPOLOGY', 370, 95);

    // Nodes
    const graphNodes = [
      { x: 440, y: 180 }, { x: 540, y: 150 }, { x: 640, y: 200 },
      { x: 480, y: 280 }, { x: 580, y: 310 }, { x: 650, y: 380 },
    ];
    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(440, 180); ctx.lineTo(540, 150);
    ctx.lineTo(640, 200); ctx.lineTo(580, 310);
    ctx.lineTo(480, 280); ctx.lineTo(440, 180);
    ctx.lineTo(580, 310); ctx.lineTo(650, 380);
    ctx.stroke();

    graphNodes.forEach((n) => {
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    // Window 3: Realtime Metrics Stream
    ctx.fillStyle = '#0d131f';
    ctx.fillRect(750, 60, 254, 420);
    ctx.strokeStyle = '#1d273a';
    ctx.strokeRect(750, 60, 254, 420);
    ctx.fillStyle = '#8f9bb3';
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillText('THROUGHPUT METRICS', 770, 95);
    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('2.84M', 770, 145);
    ctx.fillStyle = '#4ade80';
    ctx.font = '500 11px "JetBrains Mono", monospace';
    ctx.fillText('+38.4% automated', 770, 175);

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('14.2 ms', 770, 240);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '500 11px "JetBrains Mono", monospace';
    ctx.fillText('conduit latency', 770, 270);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  if (!isVisible) return null;

  return (
    <group name="AshaivaCreativeStudioFloor">
      {/* =================================================================== */}
      {/* 1. ROOM SHELL & ARCHITECTURAL FINISHES                              */}
      {/* =================================================================== */}
      {/* Warm Scandinavian White Oak Floor Planks */}
      <mesh position={[0, 6.25, -12]} receiveShadow>
        <boxGeometry args={[28, 0.1, 26]} />
        <meshStandardMaterial color="#c2ab8f" roughness={0.55} metalness={0.05} />
      </mesh>

      {/* Acoustic Plaster Ceiling */}
      <mesh position={[0, 10.3, -12]}>
        <boxGeometry args={[28, 0.1, 26]} />
        <meshStandardMaterial color="#f0ece4" roughness={0.8} />
      </mesh>

      {/* Acoustic Walnut Wood Slat Wall (Rear) */}
      <group position={[0, 8.25, -24.8]}>
        <mesh receiveShadow>
          <planeGeometry args={[28, 4.0]} />
          <meshStandardMaterial color="#2d221b" roughness={0.8} />
        </mesh>
        {Array.from({ length: 44 }).map((_, idx) => (
          <mesh key={`wood-slat-${idx}`} position={[-13.5 + idx * 0.62, 0, 0.03]} castShadow>
            <boxGeometry args={[0.06, 4.0, 0.05]} />
            <meshStandardMaterial color="#4d3b2e" roughness={0.7} />
          </mesh>
        ))}
      </group>

      {/* Left Gallery Wall (Plaster for Posters) */}
      <mesh position={[-13.9, 8.25, -12]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[26, 4.0]} />
        <meshStandardMaterial color="#f4efe6" roughness={0.8} />
      </mesh>

      {/* =================================================================== */}
      {/* 2. REAR WALL DISPLAYS: DATA TELEMETRY & PINBOARD                    */}
      {/* =================================================================== */}
      {/* POSTER A: Left Gallery Wall (Systems Topology Fine Art Print) */}
      <group position={[-13.82, 8.3, -5.5]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.8, 2.5, 0.08]} />
          <meshStandardMaterial color="#1a1815" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[1.7, 2.4]} />
          <meshStandardMaterial
            map={posterTopologyTexture || undefined}
            roughness={0.3}
            metalness={0.05}
          />
        </mesh>
        <spotLight
          position={[0, 1.8, 1.2]}
          target-position={[0, 0, 0]}
          intensity={1.8}
          angle={Math.PI / 5}
          penumbra={0.6}
          color="#fff6e8"
        />
      </group>

      {/* POSTER B: Left Gallery Wall (Manifesto: Code As Physical Structure) */}
      <group position={[-13.82, 8.3, -11.0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.8, 2.5, 0.08]} />
          <meshStandardMaterial color="#1a1815" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[1.7, 2.4]} />
          <meshStandardMaterial
            map={posterManifestoTexture || undefined}
            roughness={0.3}
            metalness={0.05}
          />
        </mesh>
        <spotLight
          position={[0, 1.8, 1.2]}
          target-position={[0, 0, 0]}
          intensity={1.8}
          angle={Math.PI / 5}
          penumbra={0.6}
          color="#fff6e8"
        />
      </group>

      {/* LARGE DATA DISPLAY 1: Central Rear Wall (Global Enterprise Systems Telemetry) */}
      <group position={[0, 8.4, -24.68]}>
        <mesh castShadow>
          <boxGeometry args={[5.2, 2.6, 0.08]} />
          <meshStandardMaterial color="#0c0e14" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[5.1, 2.5]} />
          <meshStandardMaterial
            map={mainDataBoardTexture || undefined}
            roughness={0.15}
            metalness={0.1}
            emissive="#ffffff"
            emissiveMap={mainDataBoardTexture || undefined}
            emissiveIntensity={0.4}
          />
        </mesh>
        <pointLight position={[0, 0.5, 1.5]} intensity={1.5} distance={6} color="#ffeacc" />
      </group>

      {/* LARGE ARCHITECTURAL PINBOARD: Left-Rear Wall */}
      <group position={[-7.5, 8.3, -24.68]}>
        <mesh castShadow>
          <boxGeometry args={[4.2, 2.7, 0.06]} />
          <meshStandardMaterial color="#3d2c1e" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <planeGeometry args={[4.1, 2.6]} />
          <meshStandardMaterial
            map={pinboardTexture || undefined}
            roughness={0.6}
            metalness={0.05}
          />
        </mesh>
      </group>

      {/* =================================================================== */}
      {/* 3. PROMINENT RIGHT CORRIDOR GALLERY WALL WITH 2 LARGE ILLUMINATED POSTERS */}
      {/* Placed right along the camera's trajectory (x: 4.8 to 5.2, z: -3.5 to -7.5) */}
      {/* =================================================================== */}
      <group position={[5.2, 8.25, -5.5]} rotation={[0, -Math.PI / 2, 0]}>
        {/* Gallery Wall Partition in Venetian Plaster */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[5.8, 3.6, 0.16]} />
          <meshStandardMaterial color="#ebe6dc" roughness={0.6} />
        </mesh>

        {/* POSTER C: Autonomous Pipeline Architecture Blueprint */}
        <group position={[-1.5, 0.1, 0.09]}>
          <mesh castShadow>
            <boxGeometry args={[1.9, 2.6, 0.06]} />
            <meshStandardMaterial color="#111318" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.035]}>
            <planeGeometry args={[1.8, 2.5]} />
            <meshStandardMaterial
              map={corridorPoster1Texture || undefined}
              roughness={0.2}
              metalness={0.1}
              emissive="#ffffff"
              emissiveMap={corridorPoster1Texture || undefined}
              emissiveIntensity={0.25}
            />
          </mesh>
          <spotLight
            position={[0, 1.8, 1.2]}
            target-position={[0, 0, 0]}
            intensity={2.2}
            angle={Math.PI / 4}
            penumbra={0.6}
            color="#fff8eb"
          />
        </group>

        {/* POSTER D: Enterprise SLA & Telemetry Board */}
        <group position={[1.5, 0.1, 0.09]}>
          <mesh castShadow>
            <boxGeometry args={[1.9, 2.6, 0.06]} />
            <meshStandardMaterial color="#111318" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.035]}>
            <planeGeometry args={[1.8, 2.5]} />
            <meshStandardMaterial
              map={corridorPoster2Texture || undefined}
              roughness={0.2}
              metalness={0.1}
              emissive="#ffffff"
              emissiveMap={corridorPoster2Texture || undefined}
              emissiveIntensity={0.3}
            />
          </mesh>
          <spotLight
            position={[0, 1.8, 1.2]}
            target-position={[0, 0, 0]}
            intensity={2.2}
            angle={Math.PI / 4}
            penumbra={0.6}
            color="#fff8eb"
          />
        </group>
      </group>

      {/* =================================================================== */}
      {/* 4. FREESTANDING GLASS TELEMETRY TOTEM MONOLITH                      */}
      {/* Positioned at x: 2.1, z: -4.5 right alongside the camera walkway    */}
      {/* =================================================================== */}
      <group position={[2.1, 7.3, -4.5]}>
        {/* Dark Titanium Base */}
        <mesh position={[0, -0.95, 0]} castShadow>
          <boxGeometry args={[0.9, 0.1, 0.4]} />
          <meshStandardMaterial color="#13161c" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Double-Sided Luminous Glass Telemetry Screen */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.8, 1.8, 0.04]} />
          <meshStandardMaterial
            map={monolithTexture || undefined}
            emissive="#ffffff"
            emissiveMap={monolithTexture || undefined}
            emissiveIntensity={0.45}
            roughness={0.1}
            metalness={0.15}
          />
        </mesh>
        <pointLight position={[0, 0, 0.4]} intensity={1.2} distance={3.5} color="#ffe8cc" />
      </group>

      {/* =================================================================== */}
      {/* 5. ARCHITECTURAL DRAFTING TABLE WITH OPEN BLUEPRINTS & PLANS        */}
      {/* Positioned on the left side of the walkway at x: 0.1, z: -3.2       */}
      {/* =================================================================== */}
      <group position={[0.1, 6.3, -3.2]} rotation={[0, 0.25, 0]}>
        {/* Matte Black Steel Trestle Legs */}
        <mesh position={[-0.7, 0.45, 0]} castShadow>
          <boxGeometry args={[0.06, 0.9, 0.7]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.85} roughness={0.3} />
        </mesh>
        <mesh position={[0.7, 0.45, 0]} castShadow>
          <boxGeometry args={[0.06, 0.9, 0.7]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.85} roughness={0.3} />
        </mesh>

        {/* Tilted Walnut Drawing Board (Tilted 15 degrees) */}
        <group position={[0, 0.92, 0]} rotation={[0.26, 0, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.7, 0.05, 1.1]} />
            <meshStandardMaterial color="#423326" roughness={0.6} />
          </mesh>
          {/* Blueprint Drawing Sheet */}
          <mesh position={[0, 0.03, 0]}>
            <planeGeometry args={[1.5, 0.95]} />
            <meshStandardMaterial
              map={draftingBlueprintTexture || undefined}
              roughness={0.5}
            />
          </mesh>

          {/* Brass Angle Architect Lamp */}
          <group position={[0.7, 0.1, -0.4]}>
            <mesh position={[0, 0.15, 0]} castShadow>
              <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
              <meshStandardMaterial color="#c8a97e" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[-0.1, 0.35, 0.1]} rotation={[0.5, 0, 0.3]} castShadow>
              <cylinderGeometry args={[0.06, 0.02, 0.12, 16]} />
              <meshStandardMaterial color="#1e2026" metalness={0.9} roughness={0.2} />
            </mesh>
            <pointLight position={[-0.1, 0.3, 0.15]} intensity={1.5} distance={2.5} color="#fff2db" />
          </group>
        </group>
      </group>

      {/* =================================================================== */}
      {/* 6. GLASS CONFERENCE ROOM & COLLABORATION AREA                       */}
      {/* =================================================================== */}
      <group position={[-6.5, 6.3, -12.0]}>
        <mesh position={[0, 1.9, 0]}>
          <boxGeometry args={[0.08, 3.8, 8.0]} />
          <meshPhysicalMaterial
            color="#bad7eb"
            transparent
            opacity={0.3}
            roughness={0.05}
            transmission={0.9}
            ior={1.5}
          />
        </mesh>
        <mesh position={[0, 1.9, -2.5]}>
          <boxGeometry args={[0.12, 3.8, 0.1]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-2.2, 0.74, 0]} castShadow>
          <boxGeometry args={[2.4, 0.06, 4.2]} />
          <meshStandardMaterial color="#ded7cc" roughness={0.3} metalness={0.1} />
        </mesh>
        {[-1.2, 0, 1.2].map((cz, idx) => (
          <group key={`conf-chair-${idx}`}>
            <mesh position={[-3.2, 0.44, cz]} castShadow>
              <boxGeometry args={[0.5, 0.08, 0.5]} />
              <meshStandardMaterial color="#22242a" roughness={0.7} />
            </mesh>
            <mesh position={[-1.2, 0.44, cz]} castShadow>
              <boxGeometry args={[0.5, 0.08, 0.5]} />
              <meshStandardMaterial color="#22242a" roughness={0.7} />
            </mesh>
          </group>
        ))}
      </group>

      {/* =================================================================== */}
      {/* 7. ARCHITECTURAL PHYSICAL MODEL ON PEDESTAL                         */}
      {/* =================================================================== */}
      <group position={[-4.5, 6.3, -4.5]}>
        <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.9, 1.0, 0.9]} />
          <meshStandardMaterial color="#f0ece4" roughness={0.3} />
        </mesh>
        <mesh position={[0, 1.02, 0]} castShadow>
          <boxGeometry args={[0.7, 0.04, 0.7]} />
          <meshStandardMaterial color="#c8a97e" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Micro-architectural tower blocks */}
        <mesh position={[-0.12, 1.22, -0.1]} castShadow>
          <boxGeometry args={[0.18, 0.36, 0.18]} />
          <meshStandardMaterial color="#e5e0d5" roughness={0.4} />
        </mesh>
        <mesh position={[0.12, 1.28, 0.08]} castShadow>
          <boxGeometry args={[0.14, 0.48, 0.14]} />
          <meshStandardMaterial color="#e5e0d5" roughness={0.4} />
        </mesh>
        <mesh position={[-0.05, 1.34, 0.12]} castShadow>
          <boxGeometry args={[0.12, 0.6, 0.12]} />
          <meshStandardMaterial color="#d4cebf" roughness={0.4} />
        </mesh>
        {/* Glass vitrine over model */}
        <mesh position={[0, 1.36, 0]}>
          <boxGeometry args={[0.72, 0.68, 0.72]} />
          <meshPhysicalMaterial
            color="#bad7eb"
            transparent
            opacity={0.25}
            roughness={0.05}
            transmission={0.9}
            ior={1.5}
          />
        </mesh>
      </group>

      {/* =================================================================== */}
      {/* 8. EXECUTIVE WORKSTATION, CURVED DISPLAY & SEATED FIGURE            */}
      {/* =================================================================== */}
      <group position={[3.6, 6.3, -8.2]}>
        {/* Walnut Executive Desk */}
        <mesh
          position={[0, 0.72, 0]}
          castShadow
          receiveShadow
          onClick={() =>
            onSelectHotspot?.(
              'workstation',
              'Executive Systems Workstation',
              'The primary engineering terminal where autonomous agent clusters and enterprise conduits are architected.'
            )
          }
        >
          <boxGeometry args={[2.4, 0.06, 1.2]} />
          <meshStandardMaterial color="#3a2b22" roughness={0.5} metalness={0.06} />
        </mesh>
        <mesh position={[-1.0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.06, 0.7, 1.0]} />
          <meshStandardMaterial color="#1c1e24" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[1.0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.06, 0.7, 1.0]} />
          <meshStandardMaterial color="#1c1e24" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Curved 49-inch Studio Display */}
        <group position={[0, 1.15, -0.42]}>
          <mesh position={[0, -0.22, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.44, 8]} />
            <meshStandardMaterial color="#222630" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.42, 0]} castShadow>
            <cylinderGeometry args={[0.16, 0.16, 0.02, 16]} />
            <meshStandardMaterial color="#222630" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.02, 0]} castShadow>
            <boxGeometry args={[1.35, 0.54, 0.04]} />
            <meshStandardMaterial color="#101216" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.02, 0.025]}>
            <planeGeometry args={[1.32, 0.51]} />
            <meshStandardMaterial
              map={curvedMonitorTexture || undefined}
              emissive="#ffffff"
              emissiveMap={curvedMonitorTexture || undefined}
              emissiveIntensity={0.5}
              roughness={0.15}
            />
          </mesh>
        </group>

        {/* Desk Objects: Ceramic Mug & Sketchbook */}
        <mesh position={[-0.8, 0.78, 0.3]} castShadow>
          <cylinderGeometry args={[0.045, 0.045, 0.09, 16]} />
          <meshStandardMaterial color="#f4efe6" roughness={0.4} />
        </mesh>
        <mesh position={[-0.5, 0.76, 0.3]} rotation={[0, 0.15, 0]} castShadow>
          <boxGeometry args={[0.22, 0.015, 0.3]} />
          <meshStandardMaterial color="#1e1c18" roughness={0.7} />
        </mesh>

        {/* Brass Cantilever Task Lamp */}
        <group position={[0.95, 0.75, -0.35]}>
          <mesh position={[0, 0.01, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
            <meshStandardMaterial color="#c8a97e" metalness={0.85} roughness={0.25} />
          </mesh>
          <mesh position={[0, 0.28, 0]} castShadow>
            <cylinderGeometry args={[0.012, 0.012, 0.54, 8]} />
            <meshStandardMaterial color="#c8a97e" metalness={0.85} roughness={0.25} />
          </mesh>
          <mesh position={[-0.15, 0.55, 0.1]} rotation={[0.4, 0, 0.3]} castShadow>
            <cylinderGeometry args={[0.06, 0.02, 0.12, 16]} />
            <meshStandardMaterial color="#1e2026" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      </group>

      {/* Natural Seated Human Silhouette at Desk */}
      <group position={[3.6, 6.3, -7.5]}>
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.34, 0.34, 0.04, 16]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.24, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.36, 12]} />
          <meshStandardMaterial color="#888c94" metalness={0.92} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0.44, -0.05]} castShadow>
          <boxGeometry args={[0.54, 0.09, 0.5]} />
          <meshStandardMaterial color="#181a20" roughness={0.75} />
        </mesh>
        <mesh position={[0, 0.82, 0.22]} rotation={[-0.08, 0, 0]} castShadow>
          <boxGeometry args={[0.48, 0.72, 0.06]} />
          <meshStandardMaterial color="#181a20" roughness={0.75} />
        </mesh>

        <group position={[0, 0.48, -0.05]}>
          <mesh position={[-0.13, 0.05, -0.24]} rotation={[1.48, 0, 0]} castShadow>
            <capsuleGeometry args={[0.08, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1c2027" roughness={0.85} />
          </mesh>
          <mesh position={[0.13, 0.05, -0.24]} rotation={[1.48, 0, 0]} castShadow>
            <capsuleGeometry args={[0.08, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1c2027" roughness={0.85} />
          </mesh>

          <mesh position={[-0.13, -0.24, -0.44]} rotation={[0.1, 0, 0]} castShadow>
            <capsuleGeometry args={[0.065, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1c2027" roughness={0.85} />
          </mesh>
          <mesh position={[0.13, -0.24, -0.44]} rotation={[0.1, 0, 0]} castShadow>
            <capsuleGeometry args={[0.065, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1c2027" roughness={0.85} />
          </mesh>
          <mesh position={[-0.13, -0.46, -0.42]} castShadow>
            <boxGeometry args={[0.11, 0.07, 0.24]} />
            <meshStandardMaterial color="#111214" roughness={0.35} metalness={0.2} />
          </mesh>
          <mesh position={[0.13, -0.46, -0.42]} castShadow>
            <boxGeometry args={[0.11, 0.07, 0.24]} />
            <meshStandardMaterial color="#111214" roughness={0.35} metalness={0.2} />
          </mesh>

          <group position={[0, 0.32, -0.02]} rotation={[-0.12, 0, 0]}>
            <mesh castShadow>
              <capsuleGeometry args={[0.19, 0.42, 10, 14]} />
              <meshStandardMaterial color="#1c2027" roughness={0.85} />
            </mesh>
            <mesh position={[0, 0.22, -0.16]}>
              <boxGeometry args={[0.12, 0.16, 0.06]} />
              <meshStandardMaterial color="#f0ede6" roughness={0.6} />
            </mesh>
            <mesh position={[0, 0.38, -0.04]} castShadow>
              <cylinderGeometry args={[0.06, 0.07, 0.14, 12]} />
              <meshStandardMaterial color="#c89f82" roughness={0.7} />
            </mesh>

            <group position={[0, 0.52, -0.04]} rotation={[0.18, 0, 0]}>
              <mesh castShadow>
                <sphereGeometry args={[0.115, 16, 14]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
              <mesh position={[0, -0.04, -0.04]}>
                <boxGeometry args={[0.12, 0.09, 0.11]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
              <mesh position={[0, 0.04, 0.01]} castShadow>
                <sphereGeometry args={[0.122, 16, 14]} />
                <meshStandardMaterial color="#151311" roughness={0.9} />
              </mesh>
            </group>

            <group position={[-0.24, 0.22, 0]}>
              <mesh position={[0.04, -0.14, -0.12]} rotation={[0.65, 0.1, -0.15]} castShadow>
                <capsuleGeometry args={[0.06, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              <mesh position={[0.08, -0.26, -0.36]} rotation={[1.15, -0.2, 0.2]} castShadow>
                <capsuleGeometry args={[0.052, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              <mesh position={[0.15, -0.23, -0.54]} rotation={[0.2, 0.3, 0]} castShadow>
                <boxGeometry args={[0.07, 0.04, 0.09]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
            </group>

            <group position={[0.24, 0.22, 0]}>
              <mesh position={[-0.04, -0.14, -0.12]} rotation={[0.65, -0.1, 0.15]} castShadow>
                <capsuleGeometry args={[0.06, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              <mesh position={[-0.06, -0.28, -0.34]} rotation={[1.35, 0.15, -0.1]} castShadow>
                <capsuleGeometry args={[0.052, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              <mesh position={[-0.08, -0.28, -0.52]} castShadow>
                <boxGeometry args={[0.07, 0.03, 0.09]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* =================================================================== */}
      {/* 9. INDOOR LUSH ARCHITECTURAL BOTANICAL ACCENTS                     */}
      {/* =================================================================== */}
      <group position={[1.2, 6.3, -9.8]}>
        <mesh position={[0, 0.36, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.32, 0.26, 0.72, 24]} />
          <meshStandardMaterial color="#eae5dc" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.71, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.04, 20]} />
          <meshStandardMaterial color="#3a2f26" roughness={0.9} />
        </mesh>
        {[0, 1.2, 2.4, 3.6, 4.8].map((angle, idx) => (
          <group key={`leaf-${idx}`} position={[0, 0.85 + idx * 0.15, 0]} rotation={[0, angle, 0.35]}>
            <mesh position={[0.28, 0.12, 0]} rotation={[0, 0, -0.3]} castShadow>
              <boxGeometry args={[0.38, 0.01, 0.22]} />
              <meshStandardMaterial color="#2c4c34" roughness={0.65} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Second Botanical Plant by the Gallery Wall */}
      <group position={[4.6, 6.3, -2.8]}>
        <mesh position={[0, 0.32, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.28, 0.22, 0.64, 24]} />
          <meshStandardMaterial color="#eae5dc" roughness={0.4} />
        </mesh>
        {[0.6, 1.8, 3.0, 4.2, 5.4].map((angle, idx) => (
          <group key={`leaf2-${idx}`} position={[0, 0.75 + idx * 0.12, 0]} rotation={[0, angle, 0.3]}>
            <mesh position={[0.24, 0.1, 0]} rotation={[0, 0, -0.25]} castShadow>
              <boxGeometry args={[0.32, 0.01, 0.18]} />
              <meshStandardMaterial color="#223e2b" roughness={0.65} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}
