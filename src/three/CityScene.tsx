'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface CitySceneProps {
  scrollProgress: number;
}

export function CityScene({ scrollProgress }: CitySceneProps) {
  // Roadway markings texture (Crosswalks, dashed center line)
  const roadMarkingsTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Dark asphalt base
    ctx.fillStyle = '#22242a';
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle grain texture
    ctx.fillStyle = '#2a2d35';
    for (let i = 0; i < 4000; i++) {
      const rx = Math.random() * 1024;
      const ry = Math.random() * 1024;
      ctx.fillRect(rx, ry, 2, 2);
    }

    // Double solid yellow center divider
    ctx.strokeStyle = '#e6b840';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(508, 0);
    ctx.lineTo(508, 1024);
    ctx.moveTo(516, 0);
    ctx.lineTo(516, 1024);
    ctx.stroke();

    // White dashed lane markers
    ctx.strokeStyle = '#f0ede6';
    ctx.lineWidth = 5;
    ctx.setLineDash([30, 30]);
    ctx.beginPath();
    ctx.moveTo(256, 0);
    ctx.lineTo(256, 1024);
    ctx.moveTo(768, 0);
    ctx.lineTo(768, 1024);
    ctx.stroke();

    // Pedestrian crosswalk bars across roadway
    ctx.setLineDash([]);
    ctx.fillStyle = '#f2efe9';
    for (let x = 60; x < 960; x += 60) {
      ctx.fillRect(x, 460, 36, 110);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 2);
    return texture;
  }, []);

  return (
    <group name="DaytimeCityEnvironment">
      {/* =================================================================== */}
      {/* 1. STREET ASPHALT & SIDEWALKS                                       */}
      {/* =================================================================== */}
      {/* Main Multi-Lane Street */}
      <mesh position={[0, -0.05, 32]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[140, 36]} />
        <meshStandardMaterial
          map={roadMarkingsTexture || undefined}
          roughness={0.88}
          metalness={0.12}
        />
      </mesh>

      {/* Near Sidewalk (Ashaiva side) with Granite Curb */}
      <mesh position={[0, 0.08, 14]} receiveShadow>
        <boxGeometry args={[140, 0.22, 10]} />
        <meshStandardMaterial color="#cdc8bd" roughness={0.72} metalness={0.06} />
      </mesh>
      <mesh position={[0, 0.09, 19.1]} receiveShadow>
        <boxGeometry args={[140, 0.24, 0.25]} />
        <meshStandardMaterial color="#88847d" roughness={0.8} />
      </mesh>

      {/* Far Sidewalk (Opposite side) */}
      <mesh position={[0, 0.08, 50]} receiveShadow>
        <boxGeometry args={[140, 0.22, 10]} />
        <meshStandardMaterial color="#cdc8bd" roughness={0.72} metalness={0.06} />
      </mesh>
      <mesh position={[0, 0.09, 44.9]} receiveShadow>
        <boxGeometry args={[140, 0.24, 0.25]} />
        <meshStandardMaterial color="#88847d" roughness={0.8} />
      </mesh>

      {/* =================================================================== */}
      {/* 2. SURROUNDING REALISTIC MODERN ARCHITECTURE                        */}
      {/* =================================================================== */}
      {/* West Building (Left neighbor, 10-story dark glass curtain wall) */}
      <group position={[-38, 20, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[34, 40, 32]} />
          <meshStandardMaterial color="#32353d" roughness={0.5} metalness={0.3} />
        </mesh>
        <mesh position={[0, 0, 16.1]}>
          <planeGeometry args={[33, 38]} />
          <meshStandardMaterial color="#6a8ca8" roughness={0.15} metalness={0.4} />
        </mesh>
        {[-14, -7, 0, 7, 14].map((ly, idx) => (
          <mesh key={`west-louver-${idx}`} position={[0, ly, 16.2]} castShadow>
            <boxGeometry args={[33.5, 0.4, 0.3]} />
            <meshStandardMaterial color="#1a1c22" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* East Building (Right neighbor, 12-story limestone & bronze corporate) */}
      <group position={[38, 24, -2]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[32, 48, 30]} />
          <meshStandardMaterial color="#d4cebe" roughness={0.7} metalness={0.08} />
        </mesh>
        <mesh position={[0, 0, 15.1]}>
          <planeGeometry args={[30, 44]} />
          <meshStandardMaterial color="#7094b0" roughness={0.15} metalness={0.35} />
        </mesh>
        {[-12, -6, 0, 6, 12].map((px, idx) => (
          <mesh key={`east-pier-${idx}`} position={[px, 0, 15.2]} castShadow>
            <boxGeometry args={[1.2, 47, 0.4]} />
            <meshStandardMaterial color="#c6beae" roughness={0.7} />
          </mesh>
        ))}
      </group>

      {/* Distant Metropolis Towers */}
      <group position={[0, 0, -42]}>
        <mesh position={[-50, 36, 0]} castShadow>
          <boxGeometry args={[28, 72, 28]} />
          <meshStandardMaterial color="#8ca4b8" roughness={0.3} metalness={0.3} />
        </mesh>
        <mesh position={[-18, 42, -15]} castShadow>
          <boxGeometry args={[26, 84, 26]} />
          <meshStandardMaterial color="#9cb4c6" roughness={0.25} metalness={0.4} />
        </mesh>
        <mesh position={[24, 38, -12]} castShadow>
          <boxGeometry args={[30, 76, 28]} />
          <meshStandardMaterial color="#8ea6ba" roughness={0.3} metalness={0.3} />
        </mesh>
        <mesh position={[58, 34, 0]} castShadow>
          <boxGeometry args={[26, 68, 24]} />
          <meshStandardMaterial color="#94acc0" roughness={0.35} metalness={0.25} />
        </mesh>
      </group>

      {/* =================================================================== */}
      {/* 3. STREET TREES & URBAN FLORA                                       */}
      {/* =================================================================== */}
      {[-24, -16, 16, 24].map((tx, idx) => (
        <group key={`tree-${idx}`} position={[tx, 0.2, 16.5]}>
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[2.0, 0.1, 2.0]} />
            <meshStandardMaterial color="#55514b" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[1.6, 0.11, 1.6]} />
            <meshStandardMaterial color="#382f27" roughness={0.9} />
          </mesh>
          <mesh position={[0, 1.8, 0]} castShadow>
            <cylinderGeometry args={[0.14, 0.22, 3.6, 10]} />
            <meshStandardMaterial color="#423528" roughness={0.85} />
          </mesh>
          <mesh position={[0, 4.4, 0]} castShadow>
            <sphereGeometry args={[1.8, 12, 10]} />
            <meshStandardMaterial color="#34543b" roughness={0.78} />
          </mesh>
          <mesh position={[0.6, 4.9, 0.4]} castShadow>
            <sphereGeometry args={[1.3, 10, 8]} />
            <meshStandardMaterial color="#416648" roughness={0.75} />
          </mesh>
          <mesh position={[-0.5, 4.7, -0.3]} castShadow>
            <sphereGeometry args={[1.2, 10, 8]} />
            <meshStandardMaterial color="#2d4a33" roughness={0.8} />
          </mesh>
        </group>
      ))}

      {/* =================================================================== */}
      {/* 4. URBAN STREET FURNITURE (LIGHT POLES & BOLLARDS)                  */}
      {/* =================================================================== */}
      {[-28, -8, 8, 28].map((lx, idx) => (
        <group key={`light-pole-${idx}`} position={[lx, 0.2, 18.5]}>
          <mesh position={[0, 3.2, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.1, 6.4, 12]} />
            <meshStandardMaterial color="#202228" metalness={0.9} roughness={0.25} />
          </mesh>
          <mesh position={[0, 6.35, 0.6]} rotation={[0.2, 0, 0]} castShadow>
            <boxGeometry args={[0.1, 0.12, 1.4]} />
            <meshStandardMaterial color="#202228" metalness={0.9} roughness={0.25} />
          </mesh>
          <mesh position={[0, 6.2, 1.2]}>
            <boxGeometry args={[0.22, 0.1, 0.5]} />
            <meshStandardMaterial color="#14151a" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh position={[0, 6.14, 1.2]}>
            <planeGeometry args={[0.18, 0.4]} />
            <meshBasicMaterial color="#fffbe8" />
          </mesh>
        </group>
      ))}

      {/* Stainless Steel Pedestrian Bollards */}
      {[-12, -9, -6, 6, 9, 12].map((bx, idx) => (
        <mesh key={`bollard-${idx}`} position={[bx, 0.6, 18.2]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.9, 12]} />
          <meshStandardMaterial color="#8a8e98" metalness={0.92} roughness={0.15} />
        </mesh>
      ))}

      {/* =================================================================== */}
      {/* 5. MODERN VEHICLES (EXECUTIVE SEDAN & SUV)                          */}
      {/* =================================================================== */}
      {/* Executive Dark Sedan in Roadway Lane */}
      <group position={[-14, 0.6, 26]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.45, 0]} castShadow>
          <boxGeometry args={[4.6, 0.75, 1.85]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.92} roughness={0.18} />
        </mesh>
        <mesh position={[-0.2, 1.05, 0]} castShadow>
          <boxGeometry args={[2.4, 0.6, 1.65]} />
          <meshPhysicalMaterial
            color="#111317"
            roughness={0.1}
            metalness={0.4}
            transmission={0.3}
            ior={1.5}
          />
        </mesh>
        <mesh position={[2.25, 0.45, 0.6]}>
          <boxGeometry args={[0.12, 0.15, 0.4]} />
          <meshBasicMaterial color="#f0f6ff" />
        </mesh>
        <mesh position={[2.25, 0.45, -0.6]}>
          <boxGeometry args={[0.12, 0.15, 0.4]} />
          <meshBasicMaterial color="#f0f6ff" />
        </mesh>
        {[-1.4, 1.4].map((wx, i) =>
          [-0.95, 0.95].map((wz, j) => (
            <mesh
              key={`wheel-${i}-${j}`}
              position={[wx, 0.15, wz]}
              rotation={[Math.PI / 2, 0, 0]}
              castShadow
            >
              <cylinderGeometry args={[0.35, 0.35, 0.22, 16]} />
              <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
            </mesh>
          ))
        )}
      </group>

      {/* Contemporary SUV parked along curb */}
      <group position={[18, 0.75, 23]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.55, 0]} castShadow>
          <boxGeometry args={[4.8, 0.95, 1.95]} />
          <meshStandardMaterial color="#d4cebe" metalness={0.85} roughness={0.22} />
        </mesh>
        <mesh position={[-0.1, 1.25, 0]} castShadow>
          <boxGeometry args={[2.7, 0.75, 1.75]} />
          <meshPhysicalMaterial color="#14181c" roughness={0.08} metalness={0.4} />
        </mesh>
        {[-1.5, 1.5].map((wx, i) =>
          [-1.0, 1.0].map((wz, j) => (
            <mesh
              key={`suv-wheel-${i}-${j}`}
              position={[wx, 0.18, wz]}
              rotation={[Math.PI / 2, 0, 0]}
              castShadow
            >
              <cylinderGeometry args={[0.42, 0.42, 0.26, 16]} />
              <meshStandardMaterial color="#151515" metalness={0.7} roughness={0.4} />
            </mesh>
          ))
        )}
      </group>
    </group>
  );
}
