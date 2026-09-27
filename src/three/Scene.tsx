'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Lighting } from './Lighting';
import { Environment } from './Environment';
import { CameraRig } from './CameraRig';
import { CityScene } from './CityScene';
import { BuildingScene } from './BuildingScene';
import { OfficeScene } from './OfficeScene';
import { PhoneScene } from './PhoneScene';

interface SceneProps {
  scrollProgress: number;
  onSelectHotspot?: (type: string, title: string, description: string) => void;
  onPhoneClick?: () => void;
}

export function Scene({ scrollProgress, onSelectHotspot, onPhoneClick }: SceneProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 18.5, 48.0], fov: 44 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        onCreated={({ scene, gl }) => {
          scene.fog = new THREE.FogExp2('#b8d6ee', 0.0075);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.12;
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Lighting />
          <Environment />
          <CameraRig scrollProgress={scrollProgress} />
          <CityScene scrollProgress={scrollProgress} />
          <BuildingScene scrollProgress={scrollProgress} />
          <OfficeScene
            scrollProgress={scrollProgress}
            onSelectHotspot={onSelectHotspot}
          />
          <PhoneScene
            scrollProgress={scrollProgress}
            onPhoneClick={onPhoneClick}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
