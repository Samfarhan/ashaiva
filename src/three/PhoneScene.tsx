'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

interface PhoneSceneProps {
  scrollProgress: number;
  onPhoneClick?: () => void;
}

export function PhoneScene({ scrollProgress, onPhoneClick }: PhoneSceneProps) {
  const phoneTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 750;
    canvas.height = 1600;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(0, 0, 750, 1600);

    ctx.fillStyle = '#1c1b18';
    ctx.beginPath();
    ctx.roundRect(275, 32, 200, 48, 24);
    ctx.fill();

    ctx.fillStyle = '#141416';
    ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '6px';
    ctx.fillText('ASHAIVA', 60, 160);

    ctx.fillStyle = '#c4a47c';
    ctx.font = '600 16px monospace';
    ctx.textAlign = 'right';
    ctx.fillText('MENU // 06', 690, 160);
    ctx.textAlign = 'left';

    ctx.strokeStyle = '#e2ded5';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(60, 200);
    ctx.lineTo(690, 200);
    ctx.stroke();

    ctx.fillStyle = '#1c1b18';
    ctx.font = '600 52px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('INTELLIGENT', 60, 310);
    ctx.fillText('SYSTEMS FOR', 60, 375);
    ctx.fillStyle = '#c4a47c';
    ctx.fillText('MODERN SCALE.', 60, 440);

    ctx.fillStyle = '#141416';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('01  AI AUTOMATION', 60, 580);
    ctx.fillText('02  DIGITAL SYSTEMS', 60, 660);
    ctx.fillText('03  CUSTOM EXPERIENCES', 60, 740);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(60, 850, 630, 360, 24);
    ctx.fill();
    ctx.strokeStyle = '#e2ded5';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#c4a47c';
    ctx.font = '600 16px monospace';
    ctx.letterSpacing = '3px';
    ctx.fillText('STUDIO LEADERSHIP', 100, 915);

    ctx.fillStyle = '#1c1b18';
    ctx.font = '700 32px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('FARHAN KHAN', 100, 985);
    ctx.fillStyle = '#718096';
    ctx.font = '500 20px monospace';
    ctx.fillText('Co-Founder · Lead', 100, 1025);

    ctx.fillStyle = '#1c1b18';
    ctx.font = '700 32px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('MOHIT AGARWAL', 100, 1115);
    ctx.fillStyle = '#718096';
    ctx.font = '500 20px monospace';
    ctx.fillText('Co-Founder · Lead', 100, 1155);

    ctx.fillStyle = '#1c1b18';
    ctx.beginPath();
    ctx.roundRect(60, 1340, 630, 100, 50);
    ctx.fill();

    ctx.fillStyle = '#f8f6f0';
    ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '3px';
    ctx.textAlign = 'center';
    ctx.fillText('EXPLORE CAPABILITIES', 375, 1400);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group name="PhoneScene" position={[3.6, 6.22, -8.2]}>
      <group position={[0, 0, 0]} rotation={[0, -0.32, 0]}>
        <group position={[0, 1.45, 0]}>
          <mesh position={[0, 0.45, 0]} castShadow>
            <boxGeometry args={[0.54, 0.75, 0.3]} />
            <meshStandardMaterial color="#e0ded6" roughness={0.85} />
          </mesh>

          <mesh position={[0, 0.84, 0]} castShadow>
            <boxGeometry args={[0.58, 0.16, 0.32]} />
            <meshStandardMaterial color="#d4d0c6" roughness={0.9} />
          </mesh>

          <group position={[0, 1.08, 0.08]} rotation={[0.3, 0, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.155, 16, 16]} />
              <meshStandardMaterial color="#d8ba9e" roughness={0.65} />
            </mesh>
            <mesh position={[0, 0.06, -0.04]} castShadow>
              <sphereGeometry args={[0.16, 14, 14]} />
              <meshStandardMaterial color="#221e1a" roughness={0.9} />
            </mesh>
          </group>

          <group position={[0.29, 0.65, 0]} rotation={[0.48, -0.22, 0]}>
            <mesh position={[0, -0.25, 0.12]} castShadow>
              <cylinderGeometry args={[0.068, 0.062, 0.48, 10]} />
              <meshStandardMaterial color="#e0ded6" roughness={0.85} />
            </mesh>
            <group position={[0, -0.48, 0.24]} rotation={[0.62, 0, 0]}>
              <mesh position={[0, -0.16, 0.1]} castShadow>
                <cylinderGeometry args={[0.058, 0.052, 0.38, 10]} />
                <meshStandardMaterial color="#e0ded6" roughness={0.85} />
              </mesh>

              <group position={[-0.04, -0.34, 0.18]}>
                <mesh castShadow>
                  <boxGeometry args={[0.09, 0.08, 0.12]} />
                  <meshStandardMaterial color="#d8ba9e" roughness={0.65} />
                </mesh>
                <mesh position={[0.05, 0, 0.04]} castShadow>
                  <boxGeometry args={[0.04, 0.06, 0.14]} />
                  <meshStandardMaterial color="#d8ba9e" roughness={0.65} />
                </mesh>
                <mesh position={[-0.04, 0.03, 0.02]} castShadow>
                  <boxGeometry args={[0.03, 0.05, 0.08]} />
                  <meshStandardMaterial color="#d8ba9e" roughness={0.65} />
                </mesh>

                <group
                  position={[-0.01, 0.02, 0.06]}
                  rotation={[-0.38, -0.18, 0.05]}
                  onClick={(e) => {
                    e.stopPropagation();
                    onPhoneClick?.();
                  }}
                >
                  <mesh castShadow receiveShadow>
                    <boxGeometry args={[0.38, 0.78, 0.025]} />
                    <meshStandardMaterial
                      color="#24262c"
                      metalness={0.92}
                      roughness={0.25}
                    />
                  </mesh>

                  <mesh position={[0, 0, 0.014]}>
                    <planeGeometry args={[0.36, 0.75]} />
                    <meshStandardMaterial
                      map={phoneTexture || undefined}
                      roughness={0.15}
                    />
                  </mesh>

                  <mesh position={[0, 0, 0.015]}>
                    <planeGeometry args={[0.365, 0.755]} />
                    <meshPhysicalMaterial
                      color="#d4e8f7"
                      transparent
                      opacity={0.16}
                      roughness={0.02}
                      transmission={0.95}
                      ior={1.5}
                      depthWrite={false}
                    />
                  </mesh>
                </group>
              </group>
            </group>
          </group>

          <group position={[-0.29, 0.65, 0]} rotation={[0.32, 0.12, 0]}>
            <mesh position={[0, -0.25, 0.1]} castShadow>
              <cylinderGeometry args={[0.068, 0.062, 0.48, 10]} />
              <meshStandardMaterial color="#e0ded6" roughness={0.85} />
            </mesh>
            <mesh position={[0, -0.52, 0.24]} castShadow>
              <boxGeometry args={[0.08, 0.06, 0.11]} />
              <meshStandardMaterial color="#d8ba9e" roughness={0.65} />
            </mesh>
          </group>
        </group>

        <group position={[0, 0.8, 0]}>
          <mesh position={[-0.15, 0.25, 0.28]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.09, 0.08, 0.55, 10]} />
            <meshStandardMaterial color="#252830" roughness={0.85} />
          </mesh>
          <mesh position={[0.15, 0.25, 0.28]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.09, 0.08, 0.55, 10]} />
            <meshStandardMaterial color="#252830" roughness={0.85} />
          </mesh>
          <mesh position={[-0.15, -0.16, 0.54]} castShadow>
            <cylinderGeometry args={[0.08, 0.07, 0.56, 10]} />
            <meshStandardMaterial color="#252830" roughness={0.85} />
          </mesh>
          <mesh position={[0.15, -0.16, 0.54]} castShadow>
            <cylinderGeometry args={[0.08, 0.07, 0.56, 10]} />
            <meshStandardMaterial color="#252830" roughness={0.85} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
