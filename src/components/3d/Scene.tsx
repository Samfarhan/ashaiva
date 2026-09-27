'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneEnvironment } from './Environment';
import { CameraRig } from './CameraRig';
import { AutomationCore } from './AutomationCore';
import { WorkflowNodes } from './WorkflowNodes';
import { ConnectionLines } from './ConnectionLines';
import { DataStreams } from './DataStreams';
import { BrowserFrame } from './BrowserFrame';
import { FloatingPanels } from './FloatingPanels';
import { ParticleField } from './ParticleField';

interface SceneProps {
  scrollProgress: number;
}

export function Scene({ scrollProgress }: SceneProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 1.0, 13.5], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <SceneEnvironment />
          <CameraRig scrollProgress={scrollProgress} />
          <AutomationCore scrollProgress={scrollProgress} />
          <WorkflowNodes scrollProgress={scrollProgress} />
          <ConnectionLines scrollProgress={scrollProgress} />
          <DataStreams scrollProgress={scrollProgress} />
          <BrowserFrame scrollProgress={scrollProgress} />
          <FloatingPanels scrollProgress={scrollProgress} />
          <ParticleField scrollProgress={scrollProgress} count={750} />
        </Suspense>
      </Canvas>
    </div>
  );
}
