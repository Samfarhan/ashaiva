'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface BuildingSceneProps {
  scrollProgress: number;
}

export function BuildingScene({ scrollProgress }: BuildingSceneProps) {
  // Smoothly dissolve 3rd-floor glass as the camera passes through into the studio (around scroll 0.26 to 0.36)
  const studioGlassOpacity = useMemo(() => {
    if (scrollProgress < 0.24) return 0.65;
    if (scrollProgress > 0.36) return 0.05;
    const t = (scrollProgress - 0.24) / 0.12;
    return THREE.MathUtils.lerp(0.65, 0.05, t);
  }, [scrollProgress]);

  // High-resolution architectural bronze entrance signage texture
  const entranceSignTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#141518';
    ctx.fillRect(0, 0, 1024, 256);

    ctx.strokeStyle = '#222329';
    ctx.lineWidth = 1;
    for (let y = 0; y < 256; y += 4) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    ctx.strokeStyle = '#c8a97e';
    ctx.lineWidth = 4;
    ctx.strokeRect(12, 12, 1000, 232);

    ctx.fillStyle = '#f4ede2';
    ctx.font = '600 68px "Cinzel", "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '14px';
    ctx.fillText('A S H A I V A', 512, 105);

    ctx.fillStyle = '#c8a97e';
    ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '8px';
    ctx.fillText('SYSTEMS & ARCHITECTURE', 512, 175);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  // 3rd Floor Studio Terrace Signage
  const studioSignTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#111317';
    ctx.fillRect(0, 0, 1024, 128);

    ctx.strokeStyle = '#9d825f';
    ctx.lineWidth = 2;
    ctx.strokeRect(6, 6, 1012, 116);

    ctx.fillStyle = '#f0ebd8';
    ctx.font = '600 36px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '10px';
    ctx.fillText('ASHAIVA STUDIO  ·  FLOOR 03', 512, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    return texture;
  }, []);

  return (
    <group name="AshaivaArchitecturalTower" position={[0, 0, 0]}>
      {/* =================================================================== */}
      {/* 1. GROUND PODIUM & RECESSED LOBBY (Y = 0 to 6)                     */}
      {/* =================================================================== */}
      <mesh position={[0, 0.25, 4.5]} receiveShadow>
        <boxGeometry args={[36, 0.5, 12]} />
        <meshStandardMaterial color="#d6d0c4" roughness={0.7} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.08, 11]} receiveShadow>
        <boxGeometry args={[42, 0.16, 4]} />
        <meshStandardMaterial color="#c8c2b5" roughness={0.75} metalness={0.05} />
      </mesh>

      {/* Travertine Solid Flanking Pier Columns */}
      <mesh position={[-15.5, 3.2, 3.0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 6.4, 4.5]} />
        <meshStandardMaterial color="#e0dacd" roughness={0.65} metalness={0.05} />
      </mesh>
      <mesh position={[15.5, 3.2, 3.0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 6.4, 4.5]} />
        <meshStandardMaterial color="#e0dacd" roughness={0.65} metalness={0.05} />
      </mesh>

      {/* Recessed Ground Floor Lobby Enclosure */}
      <mesh position={[0, 3.2, -1.0]}>
        <boxGeometry args={[27.8, 6.0, 7.5]} />
        <meshStandardMaterial color="#1a1c22" roughness={0.8} />
      </mesh>

      {/* Lobby Interior Feature Travertine Wall */}
      <mesh position={[0, 3.2, -4.5]}>
        <planeGeometry args={[26, 5.8]} />
        <meshStandardMaterial color="#ded8cc" roughness={0.6} metalness={0.05} />
      </mesh>

      {/* Lobby Reception Desk */}
      <mesh position={[0, 1.2, -2.5]} castShadow>
        <boxGeometry args={[6.5, 1.1, 1.6]} />
        <meshStandardMaterial color="#2a221b" roughness={0.4} metalness={0.15} />
      </mesh>

      {/* Lobby Double-Height Glass Facade */}
      <mesh position={[0, 3.2, 2.8]}>
        <planeGeometry args={[27.8, 6.0]} />
        <meshPhysicalMaterial
          color="#c8e0f2"
          transparent
          opacity={0.35}
          roughness={0.08}
          metalness={0.15}
          transmission={0.85}
          ior={1.5}
        />
      </mesh>

      {/* Lobby Vertical Bronze Mullions */}
      {[-10, -5, 0, 5, 10].map((x, idx) => (
        <mesh key={`lobby-mullion-${idx}`} position={[x, 3.2, 2.85]} castShadow>
          <boxGeometry args={[0.18, 6.0, 0.25]} />
          <meshStandardMaterial color="#222329" metalness={0.85} roughness={0.25} />
        </mesh>
      ))}

      {/* Architectural Cantilevered Entrance Canopy */}
      <group position={[0, 4.4, 7.2]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[14.5, 0.35, 7.5]} />
          <meshStandardMaterial color="#181a20" metalness={0.85} roughness={0.3} />
        </mesh>
        {[-4.5, -1.5, 1.5, 4.5].map((x, idx) => (
          <mesh key={`canopy-light-${idx}`} position={[x, -0.18, 0.5]}>
            <cylinderGeometry args={[0.35, 0.35, 0.04, 16]} />
            <meshBasicMaterial color="#fff4e0" />
          </mesh>
        ))}
      </group>

      {/* Main Bronze Entrance Architectural Signage */}
      <group position={[0, 5.0, 3.65]}>
        <mesh castShadow>
          <boxGeometry args={[9.5, 1.4, 0.16]} />
          <meshStandardMaterial color="#1c1d22" metalness={0.7} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0, 0.09]}>
          <planeGeometry args={[9.3, 1.3]} />
          <meshStandardMaterial
            map={entranceSignTexture || undefined}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>
      </group>

      {/* =================================================================== */}
      {/* 2. LEVEL 03: ASHAIVA STUDIO FLOOR & TERRACE (Y = 6 to 10.5)         */}
      {/* =================================================================== */}
      <mesh position={[0, 6.2, 3.5]} receiveShadow>
        <boxGeometry args={[30, 0.45, 8.5]} />
        <meshStandardMaterial color="#d4cebf" roughness={0.7} metalness={0.05} />
      </mesh>

      {/* Modern Glass Balustrade on Terrace Edge */}
      <mesh position={[0, 6.9, 7.6]}>
        <boxGeometry args={[30, 0.95, 0.05]} />
        <meshPhysicalMaterial
          color="#d0e5f2"
          transparent
          opacity={0.3}
          roughness={0.05}
          transmission={0.92}
          ior={1.5}
        />
      </mesh>
      <mesh position={[0, 7.4, 7.6]}>
        <boxGeometry args={[30.1, 0.06, 0.08]} />
        <meshStandardMaterial color="#22232a" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* 3rd-Floor Studio Terrace Architectural Sign */}
      <group position={[0, 6.75, 4.2]}>
        <mesh castShadow>
          <boxGeometry args={[7.2, 0.65, 0.1]} />
          <meshStandardMaterial color="#18191e" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[7.0, 0.58]} />
          <meshStandardMaterial
            map={studioSignTexture || undefined}
            roughness={0.3}
            metalness={0.35}
          />
        </mesh>
      </group>

      {/* 3rd-Floor Panoramic Glass Facade (Dissolves smoothly on camera approach) */}
      <group position={[0, 8.4, 0.2]}>
        <mesh>
          <planeGeometry args={[29.6, 4.0]} />
          <meshPhysicalMaterial
            color="#bad7eb"
            transparent
            opacity={studioGlassOpacity}
            roughness={0.05}
            metalness={0.15}
            transmission={0.88}
            ior={1.49}
            reflectivity={0.75}
            depthWrite={false}
          />
        </mesh>

        {[-12, -8, -4, 0, 4, 8, 12].map((x, idx) => (
          <mesh key={`studio-mullion-${idx}`} position={[x, 0, 0.04]} castShadow>
            <boxGeometry args={[0.12, 4.0, 0.16]} />
            <meshStandardMaterial color="#1e2026" metalness={0.85} roughness={0.25} />
          </mesh>
        ))}
      </group>

      {/* =================================================================== */}
      {/* 3. TOWER FLOORS 04 TO 14: ARCHITECTURAL CURTAIN WALL (Y = 10.5 to 52)*/}
      {/* =================================================================== */}
      <mesh position={[0, 31, -8]} castShadow receiveShadow>
        <boxGeometry args={[32, 41, 24]} />
        <meshStandardMaterial color="#ded7cc" roughness={0.7} metalness={0.08} />
      </mesh>

      <mesh position={[0, 45, -7]} castShadow>
        <boxGeometry args={[27, 13, 21]} />
        <meshStandardMaterial color="#cfc7ba" roughness={0.65} metalness={0.08} />
      </mesh>

      {[-14, -10.5, -7, -3.5, 0, 3.5, 7, 10.5, 14].map((x, idx) => (
        <mesh key={`fin-${idx}`} position={[x, 31, 4.2]} castShadow>
          <boxGeometry args={[0.45, 41, 0.9]} />
          <meshStandardMaterial
            color="#e3ded4"
            roughness={0.55}
            metalness={0.12}
          />
        </mesh>
      ))}

      {[10.5, 14, 17.5, 21, 24.5, 28, 31.5, 35, 38.5, 42, 45.5, 49].map((y, idx) => (
        <mesh key={`spandrel-${idx}`} position={[0, y, 4.15]} castShadow>
          <boxGeometry args={[32, 0.45, 0.55]} />
          <meshStandardMaterial color="#202228" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {[12.2, 15.7, 19.2, 22.7, 26.2, 29.7, 33.2, 36.7, 40.2, 43.7, 47.2].map((y, idx) => (
        <mesh key={`window-band-${idx}`} position={[0, y, 4.05]}>
          <planeGeometry args={[31.2, 2.9]} />
          <meshStandardMaterial
            color="#84a9c6"
            roughness={0.12}
            metalness={0.3}
          />
        </mesh>
      ))}

      {/* =================================================================== */}
      {/* 4. ROOFTOP ARCHITECTURAL MECHANICAL PENTHOUSE (Y = 52 to 58)        */}
      {/* =================================================================== */}
      <group position={[0, 54, -8]}>
        <mesh castShadow>
          <boxGeometry args={[22, 5.0, 16]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.8} roughness={0.35} />
        </mesh>

        {[-1.8, -0.9, 0, 0.9, 1.8].map((ly, idx) => (
          <mesh key={`louver-${idx}`} position={[0, ly, 8.05]} castShadow>
            <boxGeometry args={[21.5, 0.2, 0.15]} />
            <meshStandardMaterial color="#30323a" metalness={0.9} roughness={0.2} />
          </mesh>
        ))}

        <mesh position={[6, 4.5, 2]}>
          <cylinderGeometry args={[0.08, 0.18, 5, 12]} />
          <meshStandardMaterial color="#40424a" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}
