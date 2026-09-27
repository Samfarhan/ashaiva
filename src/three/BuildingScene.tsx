'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface BuildingSceneProps {
  scrollProgress: number;
}

export function BuildingScene({ scrollProgress }: BuildingSceneProps) {
  const glassOpacity = useMemo(() => {
    if (scrollProgress < 0.24) return 0.55;
    if (scrollProgress > 0.38) return 0.05;
    const t = (scrollProgress - 0.24) / 0.14;
    return 0.55 - t * 0.5;
  }, [scrollProgress]);

  const signageTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#1c1b18';
    ctx.fillRect(0, 0, 1024, 128);

    ctx.strokeStyle = '#c4a47c';
    ctx.lineWidth = 3;
    ctx.strokeRect(4, 4, 1016, 120);

    ctx.fillStyle = '#e2c59b';
    ctx.font = '600 52px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '18px';
    ctx.fillText('A S H A I V A', 512, 64);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group name="AshaivaTower" position={[0, 0, 0]}>
      <mesh position={[0, 24, -8]} castShadow receiveShadow>
        <boxGeometry args={[32, 48, 24]} />
        <meshStandardMaterial
          color="#dedad0"
          roughness={0.65}
          metalness={0.1}
        />
      </mesh>

      <mesh position={[0, 50, -8]} castShadow>
        <boxGeometry args={[26, 6, 20]} />
        <meshStandardMaterial color="#c6c2b6" roughness={0.7} />
      </mesh>

      {[-14, -10.5, -7, -3.5, 3.5, 7, 10.5, 14].map((x, idx) => (
        <mesh key={`fin-${idx}`} position={[x, 24, 4.2]} castShadow>
          <boxGeometry args={[0.55, 48, 0.8]} />
          <meshStandardMaterial
            color="#e6e2d8"
            roughness={0.6}
            metalness={0.08}
          />
        </mesh>
      ))}

      {[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44].map((y, idx) => (
        <mesh key={`spandrel-${idx}`} position={[0, y, 4.15]} castShadow>
          <boxGeometry args={[32, 0.35, 0.5]} />
          <meshStandardMaterial
            color="#2a2c32"
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>
      ))}

      {[12, 16, 20, 24, 28, 32, 36, 40].map((y, idx) => (
        <mesh key={`window-band-${idx}`} position={[0, y + 1.8, 4.05]}>
          <planeGeometry args={[31, 3.2]} />
          <meshStandardMaterial
            color="#7ea6c8"
            roughness={0.15}
            metalness={0.35}
          />
        </mesh>
      ))}

      <group position={[0, 4.2, 7.5]}>
        <mesh castShadow>
          <boxGeometry args={[14, 0.35, 7.0]} />
          <meshStandardMaterial color="#22242a" metalness={0.85} roughness={0.25} />
        </mesh>
        {[-4, 0, 4].map((x, idx) => (
          <mesh key={`canopy-spot-${idx}`} position={[x, -0.18, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 16]} />
            <meshBasicMaterial color="#fff4e0" />
          </mesh>
        ))}
      </group>

      <mesh position={[0, 0.2, 4.5]} receiveShadow>
        <boxGeometry args={[18, 0.4, 4.0]} />
        <meshStandardMaterial color="#c8c4ba" roughness={0.7} />
      </mesh>

      <group position={[0, 4.8, 4.3]}>
        <mesh castShadow>
          <boxGeometry args={[8.5, 0.9, 0.2]} />
          <meshStandardMaterial color="#1a1916" metalness={0.7} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[8.2, 0.8]} />
          <meshStandardMaterial
            map={signageTexture || undefined}
            roughness={0.35}
            metalness={0.5}
            transparent
          />
        </mesh>
      </group>

      <mesh position={[0, 6.0, 5.0]} castShadow receiveShadow>
        <boxGeometry args={[26, 0.4, 3.2]} />
        <meshStandardMaterial color="#dedad0" roughness={0.65} />
      </mesh>

      <mesh position={[0, 6.7, 6.55]}>
        <boxGeometry args={[26, 1.0, 0.04]} />
        <meshPhysicalMaterial
          color="#d2e8f5"
          transparent
          opacity={0.35}
          roughness={0.05}
          transmission={0.9}
          ior={1.5}
          depthWrite={false}
        />
      </mesh>

      <group position={[0, 8.2, 3.9]}>
        <mesh>
          <planeGeometry args={[25, 4.0]} />
          <meshPhysicalMaterial
            color="#bad6eb"
            transparent
            opacity={glassOpacity}
            roughness={0.06}
            metalness={0.15}
            transmission={0.88}
            ior={1.48}
            reflectivity={0.8}
            depthWrite={false}
          />
        </mesh>

        {[-10, -5, 0, 5, 10].map((x, idx) => (
          <mesh key={`glass-mullion-${idx}`} position={[x, 0, 0.02]}>
            <boxGeometry args={[0.08, 4.0, 0.12]} />
            <meshStandardMaterial color="#1a1c20" metalness={0.85} roughness={0.2} />
          </mesh>
        ))}

        <mesh position={[0, 0, 0.02]}>
          <boxGeometry args={[25, 0.06, 0.1]} />
          <meshStandardMaterial color="#1a1c20" metalness={0.85} roughness={0.2} />
        </mesh>

        <mesh position={[-6.8, 1.4, 0.04]}>
          <planeGeometry args={[2.8, 0.35]} />
          <meshStandardMaterial
            map={signageTexture || undefined}
            roughness={0.3}
            metalness={0.5}
            transparent
          />
        </mesh>
      </group>
    </group>
  );
}
