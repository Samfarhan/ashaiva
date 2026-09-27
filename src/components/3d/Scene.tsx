'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { CinematicCameraRig } from './CinematicCameraRig';
import { ArchitecturalLighting } from './ArchitecturalLighting';
import { ArchitecturalCity } from './ArchitecturalCity';
import { AshaivaBuilding } from './AshaivaBuilding';
import { StudioInterior } from './StudioInterior';
import { ArchitecturalHuman } from './ArchitecturalHuman';
import { SmartphonePortal } from './SmartphonePortal';

interface SceneProps {
  scrollProgress: number;
}

export function Scene({ scrollProgress }: SceneProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 9.2, 26.5], fov: 46 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        onCreated={({ scene, gl }) => {
          scene.fog = new THREE.FogExp2('#0a0c10', 0.012);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.08;
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ArchitecturalLighting />
          <CinematicCameraRig scrollProgress={scrollProgress} />
          <ArchitecturalCity scrollProgress={scrollProgress} />
          <AshaivaBuilding scrollProgress={scrollProgress} />
          <StudioInterior scrollProgress={scrollProgress} />
          <ArchitecturalHuman scrollProgress={scrollProgress} />
          <SmartphonePortal scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
