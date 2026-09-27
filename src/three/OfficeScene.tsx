'use client';

import React, { useState, useMemo } from 'react';
import * as THREE from 'three';

interface OfficeSceneProps {
  scrollProgress: number;
  onSelectHotspot?: (type: string, title: string, description: string) => void;
}

export function OfficeScene({ scrollProgress, onSelectHotspot }: OfficeSceneProps) {
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);

  const monitorTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, 512, 320);

    ctx.fillStyle = '#1e2229';
    ctx.fillRect(0, 0, 110, 320);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(110, 0, 402, 36);
    ctx.strokeStyle = '#e2e5e8';
    ctx.lineWidth = 1;
    ctx.strokeRect(110, 0, 402, 36);

    ctx.fillStyle = '#c4a47c';
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('ASHAIVA STUDIO', 18, 24);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(130, 55, 165, 105);
    ctx.strokeRect(130, 55, 165, 105);

    ctx.fillRect(315, 55, 175, 105);
    ctx.strokeRect(315, 55, 175, 105);

    ctx.strokeStyle = '#2b6cb0';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(145, 130);
    ctx.lineTo(185, 95);
    ctx.lineTo(225, 115);
    ctx.lineTo(270, 75);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(130, 180, 360, 120);
    ctx.strokeRect(130, 180, 360, 120);

    ctx.fillStyle = '#718096';
    ctx.font = '500 10px monospace';
    ctx.fillText('STATUS: SYNCHRONIZED  •  LATENCY: <12MS  •  PIPELINE: ACTIVE', 145, 205);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  const whiteboardTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#fafaf8';
    ctx.fillRect(0, 0, 512, 320);

    ctx.fillStyle = '#2d3748';
    ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('HOW ASHAIVA OPERATES', 30, 42);

    ctx.strokeStyle = '#c4a47c';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 70, 120, 70);
    ctx.fillStyle = '#4a5568';
    ctx.font = '600 12px monospace';
    ctx.fillText('01 DISMANTLE', 45, 100);
    ctx.fillText('MANUAL DRAG', 48, 118);

    ctx.beginPath();
    ctx.moveTo(155, 105);
    ctx.lineTo(185, 105);
    ctx.stroke();

    ctx.strokeRect(190, 70, 130, 70);
    ctx.fillText('02 CONNECT', 215, 100);
    ctx.fillText('CRM + APIS', 218, 118);

    ctx.beginPath();
    ctx.moveTo(325, 105);
    ctx.lineTo(355, 105);
    ctx.stroke();

    ctx.strokeRect(360, 70, 120, 70);
    ctx.fillText('03 SCALE', 390, 100);
    ctx.fillText('AUTONOMOUS', 375, 118);

    ctx.fillStyle = '#718096';
    ctx.font = '400 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('• Zero manual copy-paste bottlenecks between SaaS tools', 30, 180);
    ctx.fillText('• 18-second median speed-to-lead qualification dispatch', 30, 205);
    ctx.fillText('• 100% data fidelity across sales, billing, and fulfillment', 30, 230);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group name="OfficeScene" position={[0, 0, 0]}>
      <mesh position={[0, 6.22, -12]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[26, 26]} />
        <meshStandardMaterial
          color="#d2b89d"
          roughness={0.45}
          metalness={0.08}
        />
      </mesh>

      <mesh position={[0, 10.18, -12]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[26, 26]} />
        <meshStandardMaterial
          color="#faf8f5"
          roughness={0.8}
        />
      </mesh>

      {[-4, 0, 4].map((x, i) => (
        <mesh key={`ceiling-light-${i}`} position={[x, 10.15, -12]}>
          <boxGeometry args={[0.12, 0.04, 18]} />
          <meshBasicMaterial color="#fff6e8" />
        </mesh>
      ))}

      <group position={[0.8, 6.22, -1.8]} rotation={[0, 0.35, 0]}>
        <mesh position={[0, 0.95, 0]} castShadow>
          <boxGeometry args={[0.75, 0.1, 0.75]} />
          <meshStandardMaterial color="#2d3139" roughness={0.8} />
        </mesh>
        <mesh position={[0, 1.45, 0.35]} castShadow>
          <boxGeometry args={[0.7, 0.85, 0.08]} />
          <meshStandardMaterial color="#22252a" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.48, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.95, 8]} />
          <meshStandardMaterial color="#949ca8" metalness={0.85} roughness={0.2} />
        </mesh>
      </group>

      <group position={[0.2, 6.22, -3.8]}>
        <mesh
          position={[0, 1.46, 0]}
          castShadow
          receiveShadow
          onClick={(e) => {
            e.stopPropagation();
            onSelectHotspot?.(
              'desk',
              'Collaborative Workstation',
              'Engineered for focused systems development, where multi-step AI agents and API pipelines are authored and deployed.'
            );
          }}
          onPointerOver={() => setHoveredObject('desk')}
          onPointerOut={() => setHoveredObject(null)}
        >
          <boxGeometry args={[2.8, 0.08, 1.4]} />
          <meshStandardMaterial
            color={hoveredObject === 'desk' ? '#8e6d4e' : '#7a5a3c'}
            roughness={0.5}
          />
        </mesh>
        <mesh position={[-1.3, 0.73, 0]} castShadow>
          <boxGeometry args={[0.06, 1.46, 1.3]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.3, 0.73, 0]} castShadow>
          <boxGeometry args={[0.06, 1.46, 1.3]} />
          <meshStandardMaterial color="#1a1c22" metalness={0.8} roughness={0.3} />
        </mesh>

        <group
          position={[0, 1.5, -0.3]}
          onClick={(e) => {
            e.stopPropagation();
            onSelectHotspot?.(
              'monitor',
              'Real-Time Systems Telemetry',
              'Live monitoring of event-driven workflows, response latency, and multi-app data synchronization.'
            );
          }}
          onPointerOver={() => setHoveredObject('monitor')}
          onPointerOut={() => setHoveredObject(null)}
        >
          <mesh position={[0, 0.35, 0]} castShadow>
            <cylinderGeometry args={[0.025, 0.025, 0.7, 8]} />
            <meshStandardMaterial color="#a0a8b4" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.72, 0]} castShadow>
            <boxGeometry args={[1.5, 0.88, 0.035]} />
            <meshStandardMaterial
              color={hoveredObject === 'monitor' ? '#252932' : '#14161a'}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0, 0.72, 0.02]}>
            <planeGeometry args={[1.44, 0.82]} />
            <meshStandardMaterial
              map={monitorTexture || undefined}
              roughness={0.2}
            />
          </mesh>
        </group>
      </group>

      <group position={[2.4, 6.22, -2.6]}>
        <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.38, 0.3, 1.1, 16]} />
          <meshStandardMaterial color="#f0ede6" roughness={0.7} />
        </mesh>
        <mesh position={[0, 1.6, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.05, 1.3, 8]} />
          <meshStandardMaterial color="#42342b" roughness={0.9} />
        </mesh>
        <mesh position={[0, 2.3, 0]} castShadow>
          <sphereGeometry args={[0.65, 10, 10]} />
          <meshStandardMaterial color="#355830" roughness={0.75} />
        </mesh>
      </group>

      <group position={[-5.8, 6.22, -9.5]}>
        <mesh position={[3.2, 2.0, 0]}>
          <boxGeometry args={[0.08, 4.0, 7.5]} />
          <meshPhysicalMaterial
            color="#d4e8f7"
            transparent
            opacity={0.18}
            roughness={0.06}
            transmission={0.92}
            ior={1.48}
            depthWrite={false}
          />
        </mesh>
        <mesh position={[3.2, 0.04, 0]}>
          <boxGeometry args={[0.1, 0.08, 7.5]} />
          <meshStandardMaterial color="#c4a47c" metalness={0.8} roughness={0.25} />
        </mesh>

        <mesh
          position={[0, 1.45, 0]}
          castShadow
          receiveShadow
          onClick={(e) => {
            e.stopPropagation();
            onSelectHotspot?.(
              'meeting',
              'Systems Architecture Room',
              'Where client business operations are mapped from manual friction into synchronized automation architectures.'
            );
          }}
          onPointerOver={() => setHoveredObject('meeting')}
          onPointerOut={() => setHoveredObject(null)}
        >
          <boxGeometry args={[4.2, 0.09, 1.9]} />
          <meshStandardMaterial
            color={hoveredObject === 'meeting' ? '#4d3728' : '#3d2b1f'}
            roughness={0.4}
          />
        </mesh>

        <group
          position={[-2.8, 2.4, 0]}
          rotation={[0, Math.PI / 2, 0]}
          onClick={(e) => {
            e.stopPropagation();
            onSelectHotspot?.(
              'whiteboard',
              'Operational Blueprint (How It Works)',
              'Phase 1: Dismantle manual drag. Phase 2: Connect CRM & APIs. Phase 3: Deploy autonomous execution.'
            );
          }}
          onPointerOver={() => setHoveredObject('whiteboard')}
          onPointerOut={() => setHoveredObject(null)}
        >
          <mesh castShadow>
            <boxGeometry args={[3.2, 1.9, 0.04]} />
            <meshStandardMaterial
              color={hoveredObject === 'whiteboard' ? '#3d4450' : '#22252a'}
              metalness={0.8}
            />
          </mesh>
          <mesh position={[0, 0, 0.022]}>
            <planeGeometry args={[3.12, 1.82]} />
            <meshStandardMaterial
              map={whiteboardTexture || undefined}
              roughness={0.3}
            />
          </mesh>
        </group>
      </group>

      <group position={[3.6, 6.22, -8.2]}>
        <mesh position={[0, 1.45, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.6, 0.08, 1.3]} />
          <meshStandardMaterial color="#8a6745" roughness={0.5} />
        </mesh>
        <mesh position={[-1.1, 0.72, 0]} castShadow>
          <boxGeometry args={[0.06, 1.45, 1.1]} />
          <meshStandardMaterial color="#1f2228" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.1, 0.72, 0]} castShadow>
          <boxGeometry args={[0.06, 1.45, 1.1]} />
          <meshStandardMaterial color="#1f2228" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      <group position={[0, 8.2, -21.5]}>
        <mesh>
          <planeGeometry args={[25, 4.0]} />
          <meshPhysicalMaterial
            color="#bad6eb"
            transparent
            opacity={0.12}
            roughness={0.03}
            transmission={0.94}
            ior={1.48}
            depthWrite={false}
          />
        </mesh>
        {[-8, -4, 0, 4, 8].map((x, idx) => (
          <mesh key={`rear-mullion-${idx}`} position={[x, 0, 0.02]}>
            <boxGeometry args={[0.08, 4.0, 0.12]} />
            <meshStandardMaterial color="#1a1c20" metalness={0.85} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
