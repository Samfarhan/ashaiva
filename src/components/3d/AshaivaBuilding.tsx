'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface AshaivaBuildingProps {
  scrollProgress: number;
}

export function AshaivaBuilding({ scrollProgress }: AshaivaBuildingProps) {
  // As camera approaches and passes through glass (around scroll 0.25 - 0.35),
  // glass transparency gracefully adjusts so the interior is revealed with pure optical clarity.
  const glassOpacity = useMemo(() => {
    if (scrollProgress < 0.22) return 0.45;
    if (scrollProgress > 0.36) return 0.08;
    // Smooth fade
    const t = (scrollProgress - 0.22) / 0.14;
    return 0.45 - t * 0.37;
  }, [scrollProgress]);

  // Texture for architectural ASHAIVA bronze signage
  const signageTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Dark architectural bronze plate background
    ctx.fillStyle = '#171513';
    ctx.fillRect(0, 0, 1024, 128);

    // Warm brushed gold letterforms
    ctx.fillStyle = '#C8A97E';
    ctx.font = '500 48px "Cinzel", "Playfair Display", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '14px';
    ctx.fillText('A S H A I V A', 512, 64);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group name="AshaivaBuilding" position={[0, 0, 0]}>
      {/* ================================================================= */}
      {/* 1. ARCHITECTURAL CONCRETE ROOF CANOPY & SLAB                       */}
      {/* ================================================================= */}
      {/* Cantilevered Overhanging Flat Roof */}
      <mesh position={[0, 7.8, -4]} castShadow receiveShadow>
        <boxGeometry args={[26, 0.9, 22]} />
        <meshStandardMaterial
          color="#1a1c22"
          roughness={0.7}
          metalness={0.15}
        />
      </mesh>

      {/* Recessed Warm Downlight Strip on Canopy Soffit */}
      <mesh position={[0, 7.33, 0.5]}>
        <boxGeometry args={[18, 0.05, 0.3]} />
        <meshBasicMaterial color="#ffe3ba" />
      </mesh>

      {/* Architectural Concrete Floor Slab */}
      <mesh position={[0, 0.05, -5]} receiveShadow>
        <boxGeometry args={[26, 0.4, 24]} />
        <meshStandardMaterial
          color="#15171d"
          roughness={0.4}
          metalness={0.2}
        />
      </mesh>

      {/* ================================================================= */}
      {/* 2. ARCHITECTURAL SIGNAGE LINTEL (SUBTLE & REALISTIC)              */}
      {/* ================================================================= */}
      <group position={[0, 6.7, 0.95]}>
        {/* Dark Bronze Fascia Beam */}
        <mesh castShadow>
          <boxGeometry args={[16, 1.2, 0.4]} />
          <meshStandardMaterial
            color="#141311"
            roughness={0.5}
            metalness={0.6}
          />
        </mesh>
        {/* Subtle Signage Plate */}
        <mesh position={[0, 0, 0.22]}>
          <planeGeometry args={[10, 1.0]} />
          <meshStandardMaterial
            map={signageTexture || undefined}
            roughness={0.4}
            metalness={0.5}
            transparent
          />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 3. STRUCTURAL STEEL COLUMNS (MINIMAL MATTE BLACK)                 */}
      {/* ================================================================= */}
      {[-10, -5, 5, 10].map((x, i) => (
        <mesh key={`col-front-${i}`} position={[x, 3.6, 0.8]} castShadow>
          <boxGeometry args={[0.35, 7.2, 0.35]} />
          <meshStandardMaterial
            color="#0d0e11"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      ))}

      {/* Back Interior Columns */}
      {[-10, 10].map((x, i) => (
        <mesh key={`col-back-${i}`} position={[x, 3.6, -12]} castShadow>
          <boxGeometry args={[0.4, 7.2, 0.4]} />
          <meshStandardMaterial
            color="#0d0e11"
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* ================================================================= */}
      {/* 4. FLOOR-TO-CEILING GLASS FACADE & MULLIONS                       */}
      {/* ================================================================= */}
      {/* Glass Pane System */}
      <mesh position={[0, 3.5, 0.7]}>
        <planeGeometry args={[22, 6.2]} />
        <meshPhysicalMaterial
          color="#d2e3eb"
          transparent
          opacity={glassOpacity}
          roughness={0.06}
          metalness={0.1}
          transmission={0.85}
          ior={1.48}
          reflectivity={0.7}
          depthWrite={false}
        />
      </mesh>

      {/* Architectural Window Mullions (Vertical Spacers) */}
      {[-7.5, -3.75, 0, 3.75, 7.5].map((x, idx) => (
        <mesh key={`mullion-v-${idx}`} position={[x, 3.5, 0.72]}>
          <boxGeometry args={[0.08, 6.2, 0.12]} />
          <meshStandardMaterial
            color="#111216"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Horizontal Transom Mullions */}
      <mesh position={[0, 2.2, 0.72]}>
        <boxGeometry args={[22, 0.08, 0.12]} />
        <meshStandardMaterial
          color="#111216"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0, 5.0, 0.72]}>
        <boxGeometry args={[22, 0.08, 0.12]} />
        <meshStandardMaterial
          color="#111216"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Glass Entrance Pivot Doors */}
      <group position={[0, 1.8, 0.71]}>
        {/* Door Frame */}
        <mesh>
          <boxGeometry args={[2.8, 3.5, 0.06]} />
          <meshPhysicalMaterial
            color="#cce0eb"
            transparent
            opacity={glassOpacity * 1.1}
            roughness={0.04}
            metalness={0.1}
            transmission={0.9}
            ior={1.5}
            depthWrite={false}
          />
        </mesh>
        {/* Refined Brushed Bronze Vertical Door Handles */}
        <mesh position={[-0.2, 0, 0.08]}>
          <cylinderGeometry args={[0.02, 0.02, 1.4, 12]} />
          <meshStandardMaterial color="#c8a97e" metalness={0.85} roughness={0.25} />
        </mesh>
        <mesh position={[0.2, 0, 0.08]}>
          <cylinderGeometry args={[0.02, 0.02, 1.4, 12]} />
          <meshStandardMaterial color="#c8a97e" metalness={0.85} roughness={0.25} />
        </mesh>
      </group>
    </group>
  );
}
