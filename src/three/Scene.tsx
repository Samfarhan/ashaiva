'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Environment } from './Environment';
import { Lighting } from './Lighting';
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
    <div className="fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-[#dce5ed]">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 18.0, 48], fov: 44, near: 0.1, far: 240 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Atmospheric Daytime Sky & Fog */}
          <Environment />

          {/* Natural Warm Architectural Sunlight & Ambient Lighting */}
          <Lighting scrollProgress={scrollProgress} />

          {/* Continuous Catmull-Rom Spline Camera Rig */}
          <CameraRig scrollProgress={scrollProgress} />

          {/* Photorealistic Daytime City Environment */}
          <CityScene scrollProgress={scrollProgress} />

          {/* Dominant Ashaiva Corporate Tower */}
          <BuildingScene scrollProgress={scrollProgress} />

          {/* 3rd-Floor Studio Floor with Fine Art Posters, Live Data Boards & Models */}
          <OfficeScene
            scrollProgress={scrollProgress}
            onSelectHotspot={onSelectHotspot}
          />

          {/* Interactive Titanium Smartphone */}
          <PhoneScene
            scrollProgress={scrollProgress}
            onPhoneClick={onPhoneClick}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
