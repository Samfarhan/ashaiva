'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface SmartphonePortalProps {
  scrollProgress: number;
}

export function SmartphonePortal({ scrollProgress }: SmartphonePortalProps) {
  // Texture for the high-end mobile interface on the phone screen
  const phoneScreenTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 750;
    canvas.height = 1600;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Dark luxury background
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, 750, 1600);

    // Subtle warm radial gradient at center
    const grad = ctx.createRadialGradient(375, 500, 20, 375, 500, 450);
    grad.addColorStop(0, 'rgba(200, 169, 126, 0.08)');
    grad.addColorStop(1, 'rgba(8, 8, 8, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 750, 1600);

    // Top status pill (Dynamic Island)
    ctx.fillStyle = '#141416';
    ctx.beginPath();
    ctx.roundRect(275, 35, 200, 50, 25);
    ctx.fill();

    // Brand Monogram
    ctx.fillStyle = '#C8A97E';
    ctx.font = '600 48px "Cinzel", "Playfair Display", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '12px';
    ctx.fillText('A S H A I V A', 375, 320);

    // Sub-eyebrow
    ctx.fillStyle = '#8E8B82';
    ctx.font = '500 20px "JetBrains Mono", monospace';
    ctx.letterSpacing = '4px';
    ctx.fillText('INTELLIGENT SYSTEMS STUDIO', 375, 380);

    // Fine gold divider line
    ctx.strokeStyle = 'rgba(200, 169, 126, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(220, 430);
    ctx.lineTo(530, 430);
    ctx.stroke();

    // Core Pillars
    ctx.fillStyle = '#F5F3EE';
    ctx.font = '600 36px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('AI AUTOMATION', 375, 540);
    ctx.fillText('DIGITAL SYSTEMS', 375, 620);
    ctx.fillText('CUSTOM EXPERIENCES', 375, 700);

    // Founders Box
    ctx.fillStyle = '#141416';
    ctx.beginPath();
    ctx.roundRect(80, 840, 590, 280, 24);
    ctx.fill();
    ctx.strokeStyle = 'rgba(245, 243, 238, 0.08)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#C8A97E';
    ctx.font = '500 18px "JetBrains Mono", monospace';
    ctx.letterSpacing = '3px';
    ctx.fillText('STUDIO LEADERSHIP', 375, 890);

    ctx.fillStyle = '#F5F3EE';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('FARHAN KHAN', 375, 950);
    ctx.fillStyle = '#8E8B82';
    ctx.font = '400 18px "JetBrains Mono", monospace';
    ctx.fillText('Co-Founder · Lead', 375, 985);

    ctx.fillStyle = '#F5F3EE';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('MOHIT AGARWAL', 375, 1045);
    ctx.fillStyle = '#8E8B82';
    ctx.font = '400 18px "JetBrains Mono", monospace';
    ctx.fillText('Co-Founder · Lead', 375, 1080);

    // Bottom Action Pill
    ctx.fillStyle = '#C8A97E';
    ctx.beginPath();
    ctx.roundRect(140, 1260, 470, 90, 45);
    ctx.fill();

    ctx.fillStyle = '#080808';
    ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('START A PROJECT', 375, 1315);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group
      name="SmartphonePortal"
      position={[3.12, 1.34, -6.18]}
      rotation={[-0.42, -0.22, 0.06]}
    >
      {/* ================================================================= */}
      {/* 1. DARK TITANIUM AEROSPACE CHASSIS                                */}
      {/* ================================================================= */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.38, 0.78, 0.024]} />
        <meshStandardMaterial
          color="#16171b"
          metalness={0.92}
          roughness={0.22}
        />
      </mesh>

      {/* Titanium Beveled Edge Frame */}
      <mesh position={[0, 0, 0.002]}>
        <boxGeometry args={[0.384, 0.784, 0.022]} />
        <meshStandardMaterial
          color="#22242b"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>

      {/* ================================================================= */}
      {/* 2. REAR CAMERA MODULE                                             */}
      {/* ================================================================= */}
      <group position={[-0.1, 0.26, -0.016]}>
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.14, 0.01]} />
          <meshStandardMaterial color="#0e0f12" metalness={0.9} roughness={0.3} />
        </mesh>
        {/* Lenses */}
        <mesh position={[-0.03, 0.03, -0.006]}>
          <cylinderGeometry args={[0.02, 0.02, 0.008, 16]} />
          <meshStandardMaterial color="#050608" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[0.03, -0.03, -0.006]}>
          <cylinderGeometry args={[0.02, 0.02, 0.008, 16]} />
          <meshStandardMaterial color="#050608" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 3. RETINA SCREEN DISPLAY (ACTIVE ASHAIVA MOBILE INTERFACE)        */}
      {/* ================================================================= */}
      <mesh position={[0, 0, 0.013]}>
        <planeGeometry args={[0.36, 0.75]} />
        <meshStandardMaterial
          map={phoneScreenTexture || undefined}
          roughness={0.15}
          metalness={0.1}
          emissive="#c8a97e"
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Top Glass Surface with Optical Specular Highlight */}
      <mesh position={[0, 0, 0.014]}>
        <planeGeometry args={[0.365, 0.755]} />
        <meshPhysicalMaterial
          color="#dbeef7"
          transparent
          opacity={0.18}
          roughness={0.03}
          metalness={0.1}
          transmission={0.94}
          ior={1.52}
          reflectivity={0.8}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
