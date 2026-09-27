'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

export function Environment() {
  const skyTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#5a9ad2');
    grad.addColorStop(0.45, '#8ebdE5');
    grad.addColorStop(0.75, '#c2e0f4');
    grad.addColorStop(1.0, '#e2edf6');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.beginPath();
    ctx.ellipse(320, 360, 220, 28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(750, 380, 280, 32, 0, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group name="Environment">
      <mesh position={[0, 20, 0]}>
        <sphereGeometry args={[220, 32, 24]} />
        <meshBasicMaterial
          map={skyTexture || undefined}
          color="#7aaed8"
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
