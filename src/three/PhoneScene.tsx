'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface PhoneSceneProps {
  scrollProgress: number;
  onPhoneClick?: () => void;
}

export function PhoneScene({ scrollProgress, onPhoneClick }: PhoneSceneProps) {
  // Only render when camera is near the desk and phone (scroll 0.45 to 0.85)
  const isVisible = scrollProgress > 0.44 && scrollProgress < 0.86;
  const screenMeshRef = useRef<THREE.Mesh>(null);

  // High-Resolution OLED Screen Texture with Crisp Enterprise Systems UI
  const phoneScreenTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 2340;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // True OLED Deep Black Background
    ctx.fillStyle = '#06070a';
    ctx.fillRect(0, 0, 1080, 2340);

    // Subtle luxury background gradient glow
    const grad = ctx.createRadialGradient(540, 700, 50, 540, 700, 600);
    grad.addColorStop(0, 'rgba(200, 169, 126, 0.08)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 2340);

    // 1. Status Bar (Time, Dynamic Island, Battery)
    ctx.fillStyle = '#f5f3ee';
    ctx.font = '600 48px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('09:41', 110, 145);

    // Dynamic Island pill
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.roundRect(390, 85, 300, 90, 45);
    ctx.fill();

    // 5G & Battery icon
    ctx.fillStyle = '#f5f3ee';
    ctx.font = '500 40px "JetBrains Mono", monospace';
    ctx.fillText('5G  100%', 810, 145);

    // 2. Brand Header
    ctx.fillStyle = '#c8a97e';
    ctx.font = '600 36px "Cinzel", serif';
    ctx.letterSpacing = '8px';
    ctx.fillText('A S H A I V A', 110, 290);
    ctx.fillStyle = '#8e96a8';
    ctx.font = '500 28px "JetBrains Mono", monospace';
    ctx.letterSpacing = '3px';
    ctx.fillText('ENTERPRISE MOBILE CONDUIT', 110, 340);

    // 3. Primary KPI Card (Realtime System Velocity)
    ctx.fillStyle = '#0e1118';
    ctx.beginPath();
    ctx.roundRect(80, 410, 920, 400, 36);
    ctx.fill();
    ctx.strokeStyle = 'rgba(200, 169, 126, 0.3)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#9aa4b6';
    ctx.font = '500 32px "JetBrains Mono", monospace';
    ctx.fillText('SYSTEM REVENUE CONDUIT', 130, 490);

    ctx.fillStyle = '#fbfaf8';
    ctx.font = '700 86px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('$148,250', 130, 600);

    ctx.fillStyle = '#4ade80';
    ctx.font = '600 36px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('+28.4% efficiency vs manual ops', 130, 680);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '500 30px "JetBrains Mono", monospace';
    ctx.fillText('STATUS: FULLY AUTONOMOUS', 130, 745);

    // 4. Autonomous Agent Swarm Card
    ctx.fillStyle = '#0e1118';
    ctx.beginPath();
    ctx.roundRect(80, 850, 920, 520, 36);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#f5f3ee';
    ctx.font = '700 42px "Cinzel", serif';
    ctx.fillText('Active Agent Clusters', 130, 940);

    // Agent items
    const agents = [
      { name: 'Lead Intake & Scoring Agent', time: '1.2s', status: 'ACTIVE' },
      { name: 'Financial Reconciliation Bot', time: '0.4s', status: 'SYNCHED' },
      { name: 'Customer Lifecycle Pipeline', time: '2.1s', status: 'DISPATCHED' },
    ];

    agents.forEach((ag, idx) => {
      const y = 1040 + idx * 110;
      ctx.fillStyle = '#141822';
      ctx.beginPath();
      ctx.roundRect(120, y - 55, 840, 85, 20);
      ctx.fill();

      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(160, y - 12, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f0ede6';
      ctx.font = '600 34px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(ag.name, 195, y);

      ctx.fillStyle = '#c8a97e';
      ctx.font = '600 30px "JetBrains Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(ag.status, 930, y);
      ctx.textAlign = 'left';
    });

    // 5. Interactive Conduit CTA Button
    ctx.fillStyle = '#c8a97e';
    ctx.beginPath();
    ctx.roundRect(80, 1430, 920, 140, 70);
    ctx.fill();

    ctx.fillStyle = '#07090d';
    ctx.font = '700 42px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TAP TO ENTER ASHAIVA CONDUIT  →', 540, 1515);
    ctx.textAlign = 'left';

    // 6. Security & Infrastructure Metadata Footer
    ctx.fillStyle = '#525a6c';
    ctx.font = '500 28px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SOC-2 TYPE II CERTIFIED // AES-256 ENCRYPTED', 540, 1680);
    ctx.fillText('DIRECT FOUNDER ARCHITECTURE · ASHAIVA', 540, 1730);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  if (!isVisible) return null;

  return (
    <group
      name="TitaniumSmartDevice"
      position={[3.6, 7.05, -8.2]}
      rotation={[-0.22, 0.18, -0.06]}
      onClick={(e) => {
        e.stopPropagation();
        onPhoneClick?.();
      }}
    >
      {/* 1. Titanium Chassis with Subtle Rounded Frame */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.076, 0.162, 0.0084]} />
        <meshStandardMaterial
          color="#22242a"
          metalness={0.94}
          roughness={0.24}
        />
      </mesh>

      {/* 2. Precision Chamfered Metallic Edge Bezel */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.0772, 0.1632, 0.007]} />
        <meshStandardMaterial
          color="#383b44"
          metalness={0.96}
          roughness={0.16}
        />
      </mesh>

      {/* 3. Rear Camera Island (Sapphire Lenses & Bronze Rings) */}
      <group position={[-0.02, 0.052, -0.0055]}>
        <mesh castShadow>
          <boxGeometry args={[0.03, 0.038, 0.0028]} />
          <meshStandardMaterial color="#1a1c22" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Three Optical Lenses */}
        {[
          [-0.007, 0.009],
          [0.007, 0.009],
          [-0.007, -0.009],
        ].map(([lx, ly], idx) => (
          <group key={`lens-${idx}`} position={[lx, ly, -0.0016]}>
            <mesh>
              <cylinderGeometry args={[0.0055, 0.0055, 0.001, 16]} />
              <meshStandardMaterial color="#c8a97e" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.0006, 0]}>
              <cylinderGeometry args={[0.0042, 0.0042, 0.001, 16]} />
              <meshPhysicalMaterial
                color="#060910"
                roughness={0.05}
                metalness={0.1}
                transmission={0.4}
                ior={1.77}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* 4. Front Edge Black Ceramic Shield Bezel */}
      <mesh position={[0, 0, 0.0043]}>
        <planeGeometry args={[0.075, 0.16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* 5. High-Resolution OLED Screen Surface */}
      <mesh ref={screenMeshRef} position={[0, 0, 0.0046]}>
        <planeGeometry args={[0.072, 0.156]} />
        <meshStandardMaterial
          map={phoneScreenTexture || undefined}
          roughness={0.08}
          metalness={0.02}
          emissive="#ffffff"
          emissiveMap={phoneScreenTexture || undefined}
          emissiveIntensity={0.65}
        />
      </mesh>

      {/* 6. Tactical Action Button & Volume Buttons on Chassis */}
      <mesh position={[-0.0388, 0.02, 0]}>
        <boxGeometry args={[0.0012, 0.016, 0.002]} />
        <meshStandardMaterial color="#1a1c22" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[-0.0388, -0.01, 0]}>
        <boxGeometry args={[0.0012, 0.024, 0.002]} />
        <meshStandardMaterial color="#1a1c22" metalness={0.95} roughness={0.2} />
      </mesh>
    </group>
  );
}
