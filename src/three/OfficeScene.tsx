'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface OfficeSceneProps {
  scrollProgress: number;
  onSelectHotspot?: (type: string, title: string, description: string) => void;
}

export function OfficeScene({ scrollProgress, onSelectHotspot }: OfficeSceneProps) {
  // Only render and calculate office when within the visible scroll range (0.24 to 0.95)
  const isVisible = scrollProgress > 0.22 && scrollProgress < 0.95;

  // Ultra-crisp architectural blueprint texture for the desk document
  const blueprintTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Classic deep architectural blueprint blue/slate
    ctx.fillStyle = '#141e2b';
    ctx.fillRect(0, 0, 1024, 768);

    // Fine grid
    ctx.strokeStyle = 'rgba(70, 120, 180, 0.25)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1024; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 768);
      ctx.stroke();
    }
    for (let y = 0; y < 768; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    // Title Block
    ctx.strokeStyle = '#6898c8';
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 960, 704);
    ctx.strokeRect(620, 560, 360, 160);

    ctx.fillStyle = '#d4e6f8';
    ctx.font = '600 24px "Cinzel", serif';
    ctx.fillText('ASHAIVA SYSTEMS ARCHITECTURE', 640, 600);
    ctx.font = '500 14px "JetBrains Mono", monospace';
    ctx.fillStyle = '#8db8dc';
    ctx.fillText('PROJECT: ENTERPRISE CONDUIT V4', 640, 630);
    ctx.fillText('SCALE: 1:50 · STAGE: PRODUCTION', 640, 655);
    ctx.fillText('LEADS: FARHAN KHAN · MOHIT AGARWAL', 640, 680);

    // Schematic nodes and flowlines
    ctx.strokeStyle = '#84b4de';
    ctx.lineWidth = 2.5;

    // Main central pipeline
    ctx.strokeRect(120, 160, 180, 100);
    ctx.fillStyle = 'rgba(100, 160, 230, 0.15)';
    ctx.fillRect(120, 160, 180, 100);
    ctx.fillStyle = '#eaf2fa';
    ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('DATA INGESTION', 145, 215);

    // Connecting vectors
    ctx.beginPath();
    ctx.moveTo(300, 210);
    ctx.lineTo(440, 210);
    ctx.stroke();

    ctx.strokeRect(440, 140, 220, 140);
    ctx.fillStyle = 'rgba(100, 160, 230, 0.2)';
    ctx.fillRect(440, 140, 220, 140);
    ctx.fillStyle = '#eaf2fa';
    ctx.fillText('AI AGENT ORCHESTRATION', 460, 205);
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.fillStyle = '#9dc0df';
    ctx.fillText('AUTONOMOUS EVENT LOOP', 475, 235);

    // Arrow to output
    ctx.beginPath();
    ctx.moveTo(660, 210);
    ctx.lineTo(780, 210);
    ctx.stroke();

    ctx.strokeRect(780, 160, 160, 100);
    ctx.fillStyle = 'rgba(100, 160, 230, 0.15)';
    ctx.fillRect(780, 160, 160, 100);
    ctx.fillStyle = '#eaf2fa';
    ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('API CONDUIT', 810, 215);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // Studio Ultra-Wide Monitor Display Texture
  const monitorTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 420;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Dark sleek UI background
    ctx.fillStyle = '#0b0d12';
    ctx.fillRect(0, 0, 1024, 420);

    // Top status bar
    ctx.fillStyle = '#141822';
    ctx.fillRect(0, 0, 1024, 40);
    ctx.fillStyle = '#dcd8cf';
    ctx.font = '600 14px "JetBrains Mono", monospace';
    ctx.fillText('ASHAIVA STUDIO INTERFACE // SYSTEM DISPATCH ACTIVE', 24, 25);
    ctx.fillStyle = '#c8a97e';
    ctx.fillText('SYNC: 100% · HEALTHY', 840, 25);

    // Left Panel: Metric Cards
    ctx.fillStyle = '#121620';
    ctx.fillRect(24, 60, 280, 330);
    ctx.strokeStyle = '#232938';
    ctx.strokeRect(24, 60, 280, 330);

    ctx.fillStyle = '#a6b0c2';
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.fillText('SYSTEM THROUGHPUT', 45, 95);
    ctx.fillStyle = '#f5f3ee';
    ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('2.48M ops/sec', 45, 135);

    ctx.fillStyle = '#a6b0c2';
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.fillText('AVG LATENCY', 45, 185);
    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('18.4 ms', 45, 225);

    ctx.fillStyle = '#a6b0c2';
    ctx.fillText('ACTIVE AGENTS', 45, 275);
    ctx.fillStyle = '#4ade80';
    ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('64 / 64 IDLE 0', 45, 315);

    // Center & Right: Realtime Vector Waveform
    ctx.fillStyle = '#121620';
    ctx.fillRect(324, 60, 676, 330);
    ctx.strokeStyle = '#232938';
    ctx.strokeRect(324, 60, 676, 330);

    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let x = 340; x < 980; x += 15) {
      const y = 230 + Math.sin(x * 0.03) * 55 + Math.cos(x * 0.07) * 25;
      if (x === 340) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  if (!isVisible) return null;

  return (
    <group name="StudioOfficeInterior" position={[0, 0, 0]}>
      {/* =================================================================== */}
      {/* 1. ROOM SHELL & ARCHITECTURAL FINISHES                              */}
      {/* =================================================================== */}
      {/* Smoked Oak Wide-Plank Hardwood Floor */}
      <mesh position={[0, 6.25, -12]} receiveShadow>
        <boxGeometry args={[28, 0.1, 26]} />
        <meshStandardMaterial color="#241e19" roughness={0.7} metalness={0.08} />
      </mesh>

      {/* Ceiling with Indirect Acoustic Panel Recesses */}
      <mesh position={[0, 10.3, -12]}>
        <boxGeometry args={[28, 0.1, 26]} />
        <meshStandardMaterial color="#ded9cd" roughness={0.8} />
      </mesh>

      {/* Rear Acoustic Slatted Walnut Wall */}
      <group position={[0, 8.25, -24.8]}>
        <mesh receiveShadow>
          <planeGeometry args={[28, 4.0]} />
          <meshStandardMaterial color="#1e1814" roughness={0.85} />
        </mesh>
        {/* Slatted vertical battens */}
        {Array.from({ length: 42 }).map((_, idx) => (
          <mesh key={`slat-${idx}`} position={[-13.5 + idx * 0.65, 0, 0.03]} castShadow>
            <boxGeometry args={[0.08, 4.0, 0.06]} />
            <meshStandardMaterial color="#423126" roughness={0.7} />
          </mesh>
        ))}
      </group>

      {/* Side Architectural Wall (Left) */}
      <mesh position={[-13.9, 8.25, -12]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[26, 4.0]} />
        <meshStandardMaterial color="#d8d2c4" roughness={0.8} />
      </mesh>

      {/* =================================================================== */}
      {/* 2. EXECUTIVE WORKSTATION & FURNITURE                                */}
      {/* =================================================================== */}
      <group position={[3.6, 6.3, -8.2]}>
        {/* Smoked Walnut Executive Desk Surface */}
        <mesh
          position={[0, 0.72, 0]}
          castShadow
          receiveShadow
          onClick={() =>
            onSelectHotspot?.(
              'workstation',
              'Executive Systems Workstation',
              'The core design station where enterprise workflow architectures and autonomous agent clusters are authored and verified.'
            )
          }
        >
          <boxGeometry args={[2.4, 0.06, 1.2]} />
          <meshStandardMaterial color="#32261e" roughness={0.55} metalness={0.08} />
        </mesh>

        {/* Minimal Dark Steel Trestle Legs */}
        <mesh position={[-1.0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.06, 0.7, 1.0]} />
          <meshStandardMaterial color="#16181c" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[1.0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.06, 0.7, 1.0]} />
          <meshStandardMaterial color="#16181c" metalness={0.9} roughness={0.25} />
        </mesh>

        {/* Rolled Out Architectural Blueprint on Desk */}
        <mesh
          position={[-0.45, 0.755, 0.1]}
          rotation={[-Math.PI / 2, 0, 0.08]}
          receiveShadow
          onClick={(e) => {
            e.stopPropagation();
            onSelectHotspot?.(
              'blueprint',
              'Enterprise Conduit Blueprint',
              'Full-scale technical schematic detailing autonomous agent orchestration, secure webhook conduits, and event-driven data propagation.'
            );
          }}
        >
          <planeGeometry args={[0.92, 0.62]} />
          <meshStandardMaterial
            map={blueprintTexture || undefined}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Ultra-Wide Curved Studio Display */}
        <group
          position={[0.3, 0.75, -0.32]}
          onClick={(e) => {
            e.stopPropagation();
            onSelectHotspot?.(
              'monitor',
              'Realtime Systems Telemetry',
              'Live monitoring console displaying autonomous process throughput, multi-agent dispatch states, and millisecond latency tracking.'
            );
          }}
        >
          {/* Display Stand */}
          <mesh position={[0, 0.16, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.32, 12]} />
            <meshStandardMaterial color="#181a20" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.01, 0]}>
            <cylinderGeometry args={[0.16, 0.16, 0.02, 24]} />
            <meshStandardMaterial color="#181a20" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Curved Display Chassis */}
          <mesh position={[0, 0.34, 0]} castShadow>
            <boxGeometry args={[1.4, 0.58, 0.04]} />
            <meshStandardMaterial color="#121316" metalness={0.88} roughness={0.25} />
          </mesh>
          {/* OLED Screen Surface */}
          <mesh position={[0, 0.34, 0.025]}>
            <planeGeometry args={[1.36, 0.54]} />
            <meshStandardMaterial
              map={monitorTexture || undefined}
              roughness={0.1}
              metalness={0.05}
            />
          </mesh>
        </group>

        {/* Minimal Architectural Brass Cantilever Task Lamp */}
        <group position={[0.95, 0.75, -0.35]}>
          <mesh position={[0, 0.01, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
            <meshStandardMaterial color="#c8a97e" metalness={0.85} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.28, 0]} castShadow>
            <cylinderGeometry args={[0.01, 0.01, 0.54, 8]} />
            <meshStandardMaterial color="#c8a97e" metalness={0.85} roughness={0.3} />
          </mesh>
          <mesh position={[-0.15, 0.55, 0.1]} rotation={[0.4, 0, 0.3]} castShadow>
            <cylinderGeometry args={[0.06, 0.02, 0.12, 16]} />
            <meshStandardMaterial color="#202228" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      </group>

      {/* =================================================================== */}
      {/* 3. REALISTIC HUMAN FIGURE (SEATED EXECUTIVE IN NATURAL POSTURE)     */}
      {/* =================================================================== */}
      {/* Located at desk: [3.6, 6.3, -7.55] looking thoughtfully at phone */}
      <group position={[3.6, 6.3, -7.5]}>
        {/* Executive Office Chair */}
        <group position={[0, 0, 0]}>
          {/* Five-Star Polished Aluminum Base & Casters */}
          <mesh position={[0, 0.06, 0]}>
            <cylinderGeometry args={[0.34, 0.34, 0.04, 16]} />
            <meshStandardMaterial color="#1f2228" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.24, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 0.36, 12]} />
            <meshStandardMaterial color="#888c94" metalness={0.92} roughness={0.15} />
          </mesh>
          {/* Chair Seat Cushion (Matte Charcoal Leather) */}
          <mesh position={[0, 0.44, -0.05]} castShadow>
            <boxGeometry args={[0.54, 0.09, 0.5]} />
            <meshStandardMaterial color="#1a1c20" roughness={0.7} />
          </mesh>
          {/* Curved High Backrest */}
          <mesh position={[0, 0.82, 0.22]} rotation={[-0.08, 0, 0]} castShadow>
            <boxGeometry args={[0.48, 0.72, 0.06]} />
            <meshStandardMaterial color="#1a1c20" roughness={0.7} />
          </mesh>
        </group>

        {/* Human Seated Body Assembly */}
        <group position={[0, 0.48, -0.05]}>
          {/* Thighs & Tailored Charcoal Trousers */}
          <mesh position={[-0.13, 0.05, -0.24]} rotation={[1.48, 0, 0]} castShadow>
            <capsuleGeometry args={[0.08, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1e2126" roughness={0.88} />
          </mesh>
          <mesh position={[0.13, 0.05, -0.24]} rotation={[1.48, 0, 0]} castShadow>
            <capsuleGeometry args={[0.08, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1e2126" roughness={0.88} />
          </mesh>

          {/* Lower Legs & Leather Shoes */}
          <mesh position={[-0.13, -0.24, -0.44]} rotation={[0.1, 0, 0]} castShadow>
            <capsuleGeometry args={[0.065, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1e2126" roughness={0.88} />
          </mesh>
          <mesh position={[0.13, -0.24, -0.44]} rotation={[0.1, 0, 0]} castShadow>
            <capsuleGeometry args={[0.065, 0.42, 8, 12]} />
            <meshStandardMaterial color="#1e2126" roughness={0.88} />
          </mesh>
          {/* Leather Oxford Shoes */}
          <mesh position={[-0.13, -0.46, -0.42]} castShadow>
            <boxGeometry args={[0.11, 0.07, 0.24]} />
            <meshStandardMaterial color="#111214" roughness={0.35} metalness={0.2} />
          </mesh>
          <mesh position={[0.13, -0.46, -0.42]} castShadow>
            <boxGeometry args={[0.11, 0.07, 0.24]} />
            <meshStandardMaterial color="#111214" roughness={0.35} metalness={0.2} />
          </mesh>

          {/* Torso & Tailored Midnight Wool Blazer */}
          {/* Subtle natural forward lean (angle -0.14 rad) */}
          <group position={[0, 0.32, -0.02]} rotation={[-0.12, 0, 0]}>
            {/* Main Torso */}
            <mesh castShadow>
              <capsuleGeometry args={[0.19, 0.42, 10, 14]} />
              <meshStandardMaterial color="#1c2027" roughness={0.85} />
            </mesh>
            {/* White Dress Shirt V-Neck & Collar */}
            <mesh position={[0, 0.22, -0.16]}>
              <boxGeometry args={[0.12, 0.16, 0.06]} />
              <meshStandardMaterial color="#f0ede6" roughness={0.6} />
            </mesh>

            {/* Neck */}
            <mesh position={[0, 0.38, -0.04]} castShadow>
              <cylinderGeometry args={[0.06, 0.07, 0.14, 12]} />
              <meshStandardMaterial color="#c89f82" roughness={0.7} />
            </mesh>

            {/* Anatomical Head with Jawline & Hair */}
            <group position={[0, 0.52, -0.04]} rotation={[0.18, 0, 0]}>
              {/* Face & Cranium */}
              <mesh castShadow>
                <sphereGeometry args={[0.115, 16, 14]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
              {/* Tapered Jaw */}
              <mesh position={[0, -0.04, -0.04]}>
                <boxGeometry args={[0.12, 0.09, 0.11]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
              {/* Styled Natural Dark Hair */}
              <mesh position={[0, 0.04, 0.01]} castShadow>
                <sphereGeometry args={[0.122, 16, 14]} />
                <meshStandardMaterial color="#151311" roughness={0.9} />
              </mesh>
            </group>

            {/* Left Arm: Extends naturally forward, hand holding the smartphone */}
            <group position={[-0.24, 0.22, 0]}>
              {/* Upper Arm */}
              <mesh position={[0.04, -0.14, -0.12]} rotation={[0.65, 0.1, -0.15]} castShadow>
                <capsuleGeometry args={[0.06, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              {/* Forearm angled forward toward phone */}
              <mesh position={[0.08, -0.26, -0.36]} rotation={[1.15, -0.2, 0.2]} castShadow>
                <capsuleGeometry args={[0.052, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              {/* Shirt Cuff */}
              <mesh position={[0.14, -0.24, -0.49]}>
                <cylinderGeometry args={[0.048, 0.048, 0.04, 12]} />
                <meshStandardMaterial color="#f0ede6" roughness={0.6} />
              </mesh>
              {/* Natural Hand holding device */}
              <mesh position={[0.15, -0.23, -0.54]} rotation={[0.2, 0.3, 0]} castShadow>
                <boxGeometry args={[0.07, 0.04, 0.09]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
            </group>

            {/* Right Arm: Resting naturally on the desk surface */}
            <group position={[0.24, 0.22, 0]}>
              {/* Upper Arm */}
              <mesh position={[-0.04, -0.14, -0.12]} rotation={[0.65, -0.1, 0.15]} castShadow>
                <capsuleGeometry args={[0.06, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              {/* Forearm resting along desk */}
              <mesh position={[-0.06, -0.28, -0.34]} rotation={[1.35, 0.15, -0.1]} castShadow>
                <capsuleGeometry args={[0.052, 0.28, 8, 10]} />
                <meshStandardMaterial color="#1c2027" roughness={0.85} />
              </mesh>
              {/* Right Hand resting flat */}
              <mesh position={[-0.08, -0.28, -0.52]} castShadow>
                <boxGeometry args={[0.07, 0.03, 0.09]} />
                <meshStandardMaterial color="#c89f82" roughness={0.7} />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* =================================================================== */}
      {/* 4. ARCHITECTURAL STUDIO ACCENTS (PLANT & CREDENZA)                 */}
      {/* =================================================================== */}
      {/* Broad-Leaf Fiddle-Leaf Fig in Matte White Ceramic Planter */}
      <group position={[1.2, 6.3, -9.8]}>
        {/* Ceramic Planter */}
        <mesh position={[0, 0.36, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.3, 0.24, 0.72, 24]} />
          <meshStandardMaterial color="#f0eee8" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.71, 0]}>
          <cylinderGeometry args={[0.28, 0.28, 0.04, 20]} />
          <meshStandardMaterial color="#3a2f26" roughness={0.9} />
        </mesh>
        {/* Realistic Natural Leaves */}
        {[0, 1.2, 2.4, 3.6, 4.8].map((angle, idx) => (
          <group key={`leaf-${idx}`} position={[0, 0.85 + idx * 0.15, 0]} rotation={[0, angle, 0.35]}>
            <mesh position={[0.28, 0.12, 0]} rotation={[0, 0, -0.3]} castShadow>
              <boxGeometry args={[0.38, 0.01, 0.22]} />
              <meshStandardMaterial color="#2d4834" roughness={0.65} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}
