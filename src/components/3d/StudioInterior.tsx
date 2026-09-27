'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface StudioInteriorProps {
  scrollProgress: number;
}

export function StudioInterior({ scrollProgress }: StudioInteriorProps) {
  // Texture for workstation displays showing subtle editorial UI
  const screenTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Dark slate IDE / UI editor interface
    ctx.fillStyle = '#0e1014';
    ctx.fillRect(0, 0, 512, 320);

    // Header bar
    ctx.fillStyle = '#171a21';
    ctx.fillRect(0, 0, 512, 28);

    // Warm gold and stone code/design lines
    ctx.fillStyle = '#c8a97e';
    ctx.fillRect(20, 48, 140, 8);

    ctx.fillStyle = '#6e7683';
    ctx.fillRect(20, 68, 220, 6);
    ctx.fillRect(20, 82, 180, 6);
    ctx.fillRect(20, 96, 280, 6);

    ctx.fillStyle = '#8c9274';
    ctx.fillRect(20, 120, 160, 6);
    ctx.fillRect(20, 134, 210, 6);

    // Minimal system graph
    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(320, 220);
    ctx.lineTo(360, 180);
    ctx.lineTo(400, 200);
    ctx.lineTo(450, 140);
    ctx.lineTo(490, 160);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group name="StudioInterior">
      {/* ================================================================= */}
      {/* 1. ARCHITECTURAL FLOORS & CEILINGS                                */}
      {/* ================================================================= */}
      {/* Polished Architectural Concrete Floor with Specular Sheen */}
      <mesh position={[0, 0.22, -11]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[25, 23]} />
        <meshStandardMaterial
          color="#131418"
          roughness={0.28}
          metalness={0.2}
        />
      </mesh>

      {/* Warm Oak Acoustic Slat Ceiling */}
      <group position={[0, 7.1, -11]}>
        {/* Base dark ceiling plenum */}
        <mesh position={[0, 0.2, 0]}>
          <planeGeometry args={[25, 23]} />
          <meshStandardMaterial color="#0b0c0f" roughness={0.9} />
        </mesh>
        {/* Architectural Wood Slats */}
        {Array.from({ length: 24 }).map((_, i) => (
          <mesh key={`slat-${i}`} position={[0, 0, -11 + i * 0.95]}>
            <boxGeometry args={[24, 0.12, 0.08]} />
            <meshStandardMaterial
              color="#3a2e24"
              roughness={0.65}
              metalness={0.05}
            />
          </mesh>
        ))}
      </group>

      {/* Recessed Linear Architectural Downlights (Warm 3000K) */}
      {[-4, 0, 4].map((x, i) => (
        <mesh key={`light-strip-${i}`} position={[x, 7.02, -10]}>
          <boxGeometry args={[0.15, 0.04, 16]} />
          <meshBasicMaterial color="#ffe7c2" />
        </mesh>
      ))}

      {/* ================================================================= */}
      {/* 2. FOREGROUND OCCLUSION: ENTRANCE GLASS PARTITIONS & FIN          */}
      {/* ================================================================= */}
      {/* Left Glass Dividing Wall with Brushed Bronze Channels */}
      <group position={[-2.2, 3.6, -3.2]}>
        <mesh>
          <boxGeometry args={[0.08, 6.8, 3.8]} />
          <meshPhysicalMaterial
            color="#d8ebf5"
            transparent
            opacity={0.25}
            roughness={0.05}
            transmission={0.88}
            ior={1.48}
            depthWrite={false}
          />
        </mesh>
        {/* Bronze Base Channel */}
        <mesh position={[0, -3.35, 0]}>
          <boxGeometry args={[0.12, 0.1, 3.8]} />
          <meshStandardMaterial color="#c8a97e" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Slender Suspended Architectural Pendant Cable passing foreground */}
      <mesh position={[1.4, 4.8, -2.4]}>
        <cylinderGeometry args={[0.015, 0.015, 4.6, 6]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} />
      </mesh>
      <mesh position={[1.4, 2.4, -2.4]}>
        <cylinderGeometry args={[0.16, 0.16, 0.35, 16]} />
        <meshStandardMaterial color="#c8a97e" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* ================================================================= */}
      {/* 3. DESIGN WORKSTATIONS & COMPUTERS (FOREGROUND / MIDGROUND)       */}
      {/* ================================================================= */}
      {/* Workstation 1 (Left Bay) */}
      <group position={[-1.2, 0, -4.8]}>
        {/* Solid Oak Tabletop */}
        <mesh position={[0, 1.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 0.09, 1.4]} />
          <meshStandardMaterial color="#503e30" roughness={0.55} />
        </mesh>
        {/* Matte Black Steel Legs */}
        <mesh position={[-1.3, 0.72, -0.6]} castShadow>
          <boxGeometry args={[0.06, 1.45, 0.06]} />
          <meshStandardMaterial color="#121316" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.3, 0.72, -0.6]} castShadow>
          <boxGeometry args={[0.06, 1.45, 0.06]} />
          <meshStandardMaterial color="#121316" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[-1.3, 0.72, 0.6]} castShadow>
          <boxGeometry args={[0.06, 1.45, 0.06]} />
          <meshStandardMaterial color="#121316" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.3, 0.72, 0.6]} castShadow>
          <boxGeometry args={[0.06, 1.45, 0.06]} />
          <meshStandardMaterial color="#121316" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Minimal Ultra-Thin Studio Monitor on Stand */}
        <group position={[0, 1.5, -0.3]}>
          {/* Aluminum Stand */}
          <mesh position={[0, 0.35, 0]} castShadow>
            <cylinderGeometry args={[0.03, 0.03, 0.7, 8]} />
            <meshStandardMaterial color="#7a828e" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.04, 16]} />
            <meshStandardMaterial color="#7a828e" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Bezel */}
          <mesh position={[0, 0.72, 0]} castShadow>
            <boxGeometry args={[1.5, 0.88, 0.04]} />
            <meshStandardMaterial color="#0e0f12" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Screen with Editorial UI */}
          <mesh position={[0, 0.72, 0.022]}>
            <planeGeometry args={[1.44, 0.82]} />
            <meshStandardMaterial
              map={screenTexture || undefined}
              roughness={0.2}
              emissive="#c8a97e"
              emissiveIntensity={0.12}
            />
          </mesh>
        </group>

        {/* Minimalist Task Chair (Foreground Occlusion) */}
        <group position={[0, 0, 0.9]} rotation={[0, 0.18, 0]}>
          <mesh position={[0, 0.92, 0]} castShadow>
            <boxGeometry args={[0.8, 0.1, 0.8]} />
            <meshStandardMaterial color="#1a1c22" roughness={0.8} />
          </mesh>
          <mesh position={[0, 1.4, 0.36]} castShadow>
            <boxGeometry args={[0.75, 0.85, 0.08]} />
            <meshStandardMaterial color="#14161a" roughness={0.85} />
          </mesh>
          <mesh position={[0, 0.46, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.9, 8]} />
            <meshStandardMaterial color="#121316" metalness={0.8} roughness={0.3} />
          </mesh>
        </group>
      </group>

      {/* ================================================================= */}
      {/* 4. EXECUTIVE CONFERENCE ROOM & GLASS PARTITION (LEFT)              */}
      {/* ================================================================= */}
      <group position={[-6.8, 0, -8.5]}>
        {/* Conference Room Glass Boundary */}
        <mesh position={[3.2, 3.5, 0]}>
          <boxGeometry args={[0.08, 6.8, 7.5]} />
          <meshPhysicalMaterial
            color="#d0e2ec"
            transparent
            opacity={0.2}
            roughness={0.06}
            transmission={0.9}
            ior={1.48}
            depthWrite={false}
          />
        </mesh>
        {/* Dark Bronze Glass Frame Mullion */}
        <mesh position={[3.2, 3.5, 0]}>
          <boxGeometry args={[0.1, 6.8, 0.1]} />
          <meshStandardMaterial color="#c8a97e" metalness={0.8} roughness={0.3} />
        </mesh>

        {/* Large Architectural Walnut Conference Table */}
        <mesh position={[0, 1.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.2, 0.1, 2.0]} />
          <meshStandardMaterial color="#32241b" roughness={0.4} />
        </mesh>
        {/* Sculptural Fluted Concrete Table Base */}
        <mesh position={[-1.2, 0.72, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.4, 1.44, 24]} />
          <meshStandardMaterial color="#1c1e24" roughness={0.7} />
        </mesh>
        <mesh position={[1.2, 0.72, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.4, 1.44, 24]} />
          <meshStandardMaterial color="#1c1e24" roughness={0.7} />
        </mesh>

        {/* Linear Brass Suspension Chandelier over Table */}
        <mesh position={[0, 4.2, 0]}>
          <boxGeometry args={[3.2, 0.08, 0.14]} />
          <meshStandardMaterial color="#c8a97e" metalness={0.85} roughness={0.25} />
        </mesh>
        <mesh position={[0, 4.14, 0]}>
          <boxGeometry args={[3.1, 0.02, 0.1]} />
          <meshBasicMaterial color="#ffeac7" />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 5. ARCHITECTURAL POTTED OLIVE TREE & BOOKCASE (DEPTH LAYER)       */}
      {/* ================================================================= */}
      {/* Sculpted Fluted Concrete Planter with Indoor Olive Tree */}
      <group position={[2.6, 0.22, -3.8]}>
        <mesh position={[0, 0.65, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.45, 0.35, 1.3, 24]} />
          <meshStandardMaterial color="#1f2229" roughness={0.75} />
        </mesh>
        {/* Slender trunk */}
        <mesh position={[0, 1.8, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.06, 1.4, 8]} />
          <meshStandardMaterial color="#362f27" roughness={0.9} />
        </mesh>
        {/* Olive foliage cluster */}
        <mesh position={[0, 2.8, 0]} castShadow>
          <sphereGeometry args={[0.7, 12, 10]} />
          <meshStandardMaterial color="#303b2c" roughness={0.8} />
        </mesh>
      </group>

      {/* Minimalist Steel & Wood Shelving Unit on Right Wall */}
      <group position={[9.2, 0, -9.5]}>
        <mesh position={[0, 3.5, 0]} castShadow>
          <boxGeometry args={[0.6, 6.8, 6.0]} />
          <meshStandardMaterial color="#121317" metalness={0.7} roughness={0.4} />
        </mesh>
        {/* Warm wood shelves with architectural scale models & journals */}
        {[1.2, 2.4, 3.6, 4.8].map((y, idx) => (
          <mesh key={`shelf-${idx}`} position={[-0.1, y, 0]}>
            <boxGeometry args={[0.65, 0.05, 5.8]} />
            <meshStandardMaterial color="#4a3b2e" roughness={0.6} />
          </mesh>
        ))}
      </group>

      {/* ================================================================= */}
      {/* 6. CORNER WINDOW WORKSTATION (WHERE THE HUMAN & PHONE SIT)        */}
      {/* ================================================================= */}
      {/* Cantilevered Desk positioned at x: 2.8, z: -6.4 */}
      <group position={[3.2, 0, -6.6]}>
        {/* Natural Ash Desk Top */}
        <mesh position={[0, 1.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.6, 0.08, 1.4]} />
          <meshStandardMaterial color="#6a5542" roughness={0.5} />
        </mesh>
        <mesh position={[-1.1, 0.72, 0]} castShadow>
          <boxGeometry args={[0.06, 1.45, 1.2]} />
          <meshStandardMaterial color="#101114" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.1, 0.72, 0]} castShadow>
          <boxGeometry args={[0.06, 1.45, 1.2]} />
          <meshStandardMaterial color="#101114" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Soft Brass Desk Lamp */}
        <mesh position={[0.9, 1.7, -0.4]}>
          <cylinderGeometry args={[0.08, 0.12, 0.25, 16]} />
          <meshStandardMaterial color="#c8a97e" metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh position={[0.9, 1.55, -0.4]}>
          <pointLight color="#ffe8cc" intensity={0.9} distance={3} />
        </mesh>
      </group>

      {/* ================================================================= */}
      {/* 7. STUDIO GALLERY (WORK PORTFOLIO INSTALLATIONS)                   */}
      {/* ================================================================= */}
      <group position={[0, 0, -14.5]}>
        {/* Dark Gallery Partition Backdrop */}
        <mesh position={[0, 3.6, -1.5]} receiveShadow>
          <boxGeometry args={[18, 6.8, 0.4]} />
          <meshStandardMaterial color="#0e0f13" roughness={0.85} />
        </mesh>

        {/* 3 Architectural Installation Panels (Conduit 01, 02, Studio 03) */}
        {[-4.8, 0, 4.8].map((x, i) => (
          <group key={`gallery-panel-${i}`} position={[x, 3.5, -1.2]}>
            {/* Matte Black Frame */}
            <mesh castShadow>
              <boxGeometry args={[3.6, 2.5, 0.1]} />
              <meshStandardMaterial color="#16181e" metalness={0.6} roughness={0.4} />
            </mesh>
            {/* Warm Architectural Accent Plate */}
            <mesh position={[0, 0, 0.06]}>
              <planeGeometry args={[3.4, 2.3]} />
              <meshStandardMaterial
                color="#1d2028"
                roughness={0.5}
                emissive="#c8a97e"
                emissiveIntensity={0.05}
              />
            </mesh>
            {/* Gallery Overhead Spot */}
            <mesh position={[0, 1.7, 0.6]}>
              <cylinderGeometry args={[0.06, 0.06, 0.18, 12]} />
              <meshStandardMaterial color="#c8a97e" metalness={0.8} />
            </mesh>
          </group>
        ))}
      </group>

      {/* ================================================================= */}
      {/* 8. GRAND PANORAMIC NIGHT WINDOW OVERLOOKING CITY (SCENE 16)       */}
      {/* ================================================================= */}
      <group position={[0, 3.6, -21.5]}>
        {/* Full-width Glass Window Wall */}
        <mesh>
          <planeGeometry args={[24, 7.2]} />
          <meshPhysicalMaterial
            color="#bad2e0"
            transparent
            opacity={0.15}
            roughness={0.03}
            transmission={0.92}
            ior={1.48}
            depthWrite={false}
          />
        </mesh>
        {/* Architectural Window Mullions */}
        {[-8, -4, 0, 4, 8].map((x, i) => (
          <mesh key={`rear-mullion-${i}`} position={[x, 0, 0.02]}>
            <boxGeometry args={[0.08, 7.2, 0.14]} />
            <meshStandardMaterial color="#0c0d10" metalness={0.9} roughness={0.2} />
          </mesh>
        ))}
        {/* City skyline beyond the window at night */}
        <mesh position={[0, 2, -15]}>
          <boxGeometry args={[45, 20, 2]} />
          <meshStandardMaterial
            color="#08090d"
            roughness={0.9}
            map={screenTexture || undefined}
          />
        </mesh>
      </group>
    </group>
  );
}
