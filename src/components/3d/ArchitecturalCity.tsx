'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ArchitecturalCityProps {
  scrollProgress: number;
}

export function ArchitecturalCity({ scrollProgress }: ArchitecturalCityProps) {
  const trafficRef = useRef<THREE.Group>(null);

  // Subtle traffic motion along the street
  useFrame((_, delta) => {
    if (trafficRef.current) {
      trafficRef.current.children.forEach((child) => {
        const speed = child.userData.speed || 3;
        const dir = child.userData.dir || 1;
        child.position.x += speed * dir * delta;
        if (dir > 0 && child.position.x > 45) child.position.x = -45;
        if (dir < 0 && child.position.x < -45) child.position.x = 45;
      });
    }
  });

  // Procedural Window Grid Texture for Realistic Towers
  const towerWindowTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Dark building surface
    ctx.fillStyle = '#0f1115';
    ctx.fillRect(0, 0, 512, 512);

    // Warm lit and unlit office window grid
    const rows = 32;
    const cols = 16;
    const padX = 10;
    const padY = 6;
    const w = (512 - padX * (cols + 1)) / cols;
    const h = (512 - padY * (rows + 1)) / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = padX + c * (w + padX);
        const y = padY + r * (h + padY);
        // Random warm office illumination pattern (evening occupancy)
        const isLit = Math.sin(r * 3.7 + c * 8.9) > 0.15;
        if (isLit) {
          const warmth = Math.sin(r + c) * 0.2 + 0.8;
          ctx.fillStyle = `rgba(${Math.floor(255 * warmth)}, ${Math.floor(220 * warmth)}, ${Math.floor(170 * warmth)}, 0.85)`;
          ctx.fillRect(x, y, w, h);
        } else {
          ctx.fillStyle = 'rgba(25, 30, 38, 0.6)';
          ctx.fillRect(x, y, w, h);
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 3);
    return texture;
  }, []);

  return (
    <group name="ArchitecturalCity">
      {/* ================================================================= */}
      {/* 1. ATMOSPHERIC EVENING SKY DOME                                   */}
      {/* ================================================================= */}
      <mesh position={[0, 40, -40]}>
        <sphereGeometry args={[180, 32, 24]} />
        <meshBasicMaterial
          color="#0a0c10"
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* ================================================================= */}
      {/* 2. GROUND & STREET INFRASTRUCTURE                                 */}
      {/* ================================================================= */}
      {/* Wet Reflective Asphalt Road */}
      <mesh position={[0, -0.05, 14]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[160, 24]} />
        <meshStandardMaterial
          color="#0c0e12"
          roughness={0.22}
          metalness={0.4}
        />
      </mesh>

      {/* Subtle Road Center Dividing Dash Marks */}
      {[-30, -15, 0, 15, 30].map((x, i) => (
        <mesh key={i} position={[x, 0.01, 14]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 0.25]} />
          <meshBasicMaterial color="#e5ded0" opacity={0.35} transparent />
        </mesh>
      ))}

      {/* Stone Sidewalk Curb & Plaza Area in front of building */}
      <mesh position={[0, 0.1, 4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[90, 8]} />
        <meshStandardMaterial
          color="#16181d"
          roughness={0.65}
          metalness={0.1}
        />
      </mesh>

      {/* Modern Granite Paver Walkway Leading to Entrance */}
      <mesh position={[0, 0.12, 1.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial
          color="#22252c"
          roughness={0.5}
          metalness={0.15}
        />
      </mesh>

      {/* ================================================================= */}
      {/* 3. MODERN CITY TOWERS (SURROUNDING SKYLINE)                       */}
      {/* ================================================================= */}
      {/* Left Midground Office Tower (Modernist Concrete & Glass) */}
      <group position={[-28, 22, -18]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[16, 45, 20]} />
          <meshStandardMaterial
            color="#14171d"
            roughness={0.4}
            metalness={0.2}
            map={towerWindowTexture || undefined}
          />
        </mesh>
        {/* Architectural crown with soft rooftop light */}
        <mesh position={[0, 23.5, 0]}>
          <boxGeometry args={[14, 2, 18]} />
          <meshStandardMaterial color="#0c0e12" roughness={0.7} />
        </mesh>
      </group>

      {/* Right Midground Tower (Slender Modernist Glass) */}
      <group position={[30, 26, -14]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[14, 52, 16]} />
          <meshStandardMaterial
            color="#12151b"
            roughness={0.3}
            metalness={0.35}
            map={towerWindowTexture || undefined}
          />
        </mesh>
        <mesh position={[0, 26.5, 0]}>
          <boxGeometry args={[12, 1.5, 14]} />
          <meshStandardMaterial color="#0c0e12" roughness={0.8} />
        </mesh>
      </group>

      {/* Distant Background Skyline Silhouette Towers */}
      <mesh position={[-55, 30, -55]}>
        <boxGeometry args={[22, 60, 20]} />
        <meshStandardMaterial color="#0d0f14" roughness={0.8} />
      </mesh>
      <mesh position={[0, 38, -65]}>
        <boxGeometry args={[28, 76, 25]} />
        <meshStandardMaterial color="#0b0d12" roughness={0.8} />
      </mesh>
      <mesh position={[58, 28, -50]}>
        <boxGeometry args={[20, 56, 18]} />
        <meshStandardMaterial color="#0e1016" roughness={0.8} />
      </mesh>

      {/* ================================================================= */}
      {/* 4. ARCHITECTURAL STREET ELEMENTS & VEGETATION                      */}
      {/* ================================================================= */}
      {/* Modern Street Lampposts */}
      {[-12, -4, 4, 12].map((x, idx) => (
        <group key={`lamp-${idx}`} position={[x * 2.2, 0, 9]}>
          {/* Slender black pole */}
          <mesh position={[0, 2.8, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 5.6, 12]} />
            <meshStandardMaterial color="#1a1c22" metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Minimalist horizontal arm */}
          <mesh position={[0, 5.6, 0.4]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
            <meshStandardMaterial color="#1a1c22" metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Warm Luminaire Head */}
          <mesh position={[0, 5.55, 0.8]}>
            <boxGeometry args={[0.2, 0.08, 0.35]} />
            <meshBasicMaterial color="#ffe1ad" />
          </mesh>
        </group>
      ))}

      {/* Architectural Planters with Muted Greenery */}
      {[-8, -5, 5, 8].map((x, idx) => (
        <group key={`planter-${idx}`} position={[x * 1.8, 0.2, 5.5]}>
          {/* Charcoal Concrete Planter Box */}
          <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
            <boxGeometry args={[1.6, 0.8, 1.2]} />
            <meshStandardMaterial color="#1c1f26" roughness={0.8} metalness={0.1} />
          </mesh>
          {/* Architectural Birch/Oak Tree */}
          <mesh position={[0, 1.8, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.12, 2.2, 8]} />
            <meshStandardMaterial color="#2d2823" roughness={0.9} />
          </mesh>
          {/* Sculptural Muted Foliage (Restrained dark olive/sage) */}
          <mesh position={[0, 3.2, 0]} castShadow>
            <sphereGeometry args={[0.9, 12, 10]} />
            <meshStandardMaterial color="#262d24" roughness={0.85} />
          </mesh>
        </group>
      ))}

      {/* ================================================================= */}
      {/* 5. SUBTLE PASSING VEHICLE LIGHTS (LIVING CITY MOTION)             */}
      {/* ================================================================= */}
      <group ref={trafficRef} position={[0, 0.4, 14]}>
        {/* Outbound Car: Red Taillights heading right */}
        <group position={[-20, 0, 2]} userData={{ speed: 6.5, dir: 1 }}>
          <mesh position={[-0.7, 0, 0]}>
            <boxGeometry args={[0.25, 0.12, 0.1]} />
            <meshBasicMaterial color="#ff2a2a" />
          </mesh>
          <mesh position={[0.7, 0, 0]}>
            <boxGeometry args={[0.25, 0.12, 0.1]} />
            <meshBasicMaterial color="#ff2a2a" />
          </mesh>
        </group>
        <group position={[12, 0, 2]} userData={{ speed: 5.5, dir: 1 }}>
          <mesh position={[-0.7, 0, 0]}>
            <boxGeometry args={[0.25, 0.12, 0.1]} />
            <meshBasicMaterial color="#ff2a2a" />
          </mesh>
          <mesh position={[0.7, 0, 0]}>
            <boxGeometry args={[0.25, 0.12, 0.1]} />
            <meshBasicMaterial color="#ff2a2a" />
          </mesh>
        </group>

        {/* Inbound Car: Warm White Headlights heading left */}
        <group position={[18, 0, -2]} userData={{ speed: 7.0, dir: -1 }}>
          <mesh position={[-0.7, 0, 0]}>
            <boxGeometry args={[0.3, 0.14, 0.1]} />
            <meshBasicMaterial color="#fff3d4" />
          </mesh>
          <mesh position={[0.7, 0, 0]}>
            <boxGeometry args={[0.3, 0.14, 0.1]} />
            <meshBasicMaterial color="#fff3d4" />
          </mesh>
        </group>
        <group position={[-15, 0, -2]} userData={{ speed: 6.0, dir: -1 }}>
          <mesh position={[-0.7, 0, 0]}>
            <boxGeometry args={[0.3, 0.14, 0.1]} />
            <meshBasicMaterial color="#fff3d4" />
          </mesh>
          <mesh position={[0.7, 0, 0]}>
            <boxGeometry args={[0.3, 0.14, 0.1]} />
            <meshBasicMaterial color="#fff3d4" />
          </mesh>
        </group>
      </group>
    </group>
  );
}
