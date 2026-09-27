'use client';

import React from 'react';
import * as THREE from 'three';

interface ArchitecturalHumanProps {
  scrollProgress: number;
}

export function ArchitecturalHuman({ scrollProgress }: ArchitecturalHumanProps) {
  return (
    <group name="ArchitecturalHuman" position={[3.2, 0, -6.5]} rotation={[0, -0.4, 0]}>
      {/* ================================================================= */}
      {/* 1. SEATED FIGURE IN REALISTIC ARCHITECTURAL POSTURE               */}
      {/* ================================================================= */}
      {/* Torso in tailored charcoal knitwear / blazer */}
      <group position={[0, 1.4, 0]}>
        <mesh position={[0, 0.45, 0]} castShadow>
          <boxGeometry args={[0.52, 0.72, 0.28]} />
          <meshStandardMaterial
            color="#1c1d22"
            roughness={0.85}
            metalness={0.05}
          />
        </mesh>

        {/* Shoulders & Collar */}
        <mesh position={[0, 0.82, 0]} castShadow>
          <boxGeometry args={[0.56, 0.16, 0.3]} />
          <meshStandardMaterial color="#18191e" roughness={0.9} />
        </mesh>

        {/* Head in contemplative downward gaze toward phone */}
        <group position={[0, 1.05, 0.08]} rotation={[0.25, 0, 0]}>
          {/* Head silhouette */}
          <mesh castShadow>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial
              color="#d9bba0"
              roughness={0.65}
              metalness={0.0}
            />
          </mesh>
          {/* Natural styled dark hair */}
          <mesh position={[0, 0.06, -0.04]} castShadow>
            <sphereGeometry args={[0.155, 14, 14]} />
            <meshStandardMaterial color="#1a1512" roughness={0.9} />
          </mesh>
        </group>

        {/* Right Arm extending forward to hold smartphone */}
        <group position={[0.28, 0.65, 0]} rotation={[0.45, -0.2, 0]}>
          <mesh position={[0, -0.24, 0.12]} castShadow>
            <cylinderGeometry args={[0.065, 0.06, 0.46, 10]} />
            <meshStandardMaterial color="#1c1d22" roughness={0.85} />
          </mesh>
          {/* Forearm angled forward onto desk */}
          <group position={[0, -0.46, 0.22]} rotation={[0.65, 0, 0]}>
            <mesh position={[0, -0.16, 0.1]} castShadow>
              <cylinderGeometry args={[0.055, 0.05, 0.36, 10]} />
              <meshStandardMaterial color="#1c1d22" roughness={0.85} />
            </mesh>
            {/* Hand holding phone */}
            <mesh position={[-0.05, -0.32, 0.16]}>
              <boxGeometry args={[0.08, 0.07, 0.11]} />
              <meshStandardMaterial color="#d9bba0" roughness={0.65} />
            </mesh>
          </group>
        </group>

        {/* Left Hand resting casually on desk edge */}
        <group position={[-0.28, 0.65, 0]} rotation={[0.3, 0.1, 0]}>
          <mesh position={[0, -0.24, 0.1]} castShadow>
            <cylinderGeometry args={[0.065, 0.06, 0.46, 10]} />
            <meshStandardMaterial color="#1c1d22" roughness={0.85} />
          </mesh>
          <mesh position={[0, -0.5, 0.22]} castShadow>
            <boxGeometry args={[0.07, 0.06, 0.1]} />
            <meshStandardMaterial color="#d9bba0" roughness={0.65} />
          </mesh>
        </group>
      </group>

      {/* Seated Legs in tailored dark wool trousers */}
      <group position={[0, 0.75, 0]}>
        {/* Upper thighs resting horizontally forward */}
        <mesh position={[-0.14, 0.25, 0.25]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.08, 0.52, 10]} />
          <meshStandardMaterial color="#16171b" roughness={0.85} />
        </mesh>
        <mesh position={[0.14, 0.25, 0.25]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.09, 0.08, 0.52, 10]} />
          <meshStandardMaterial color="#16171b" roughness={0.85} />
        </mesh>
        {/* Lower legs dropping down to floor */}
        <mesh position={[-0.14, -0.15, 0.48]} castShadow>
          <cylinderGeometry args={[0.075, 0.065, 0.54, 10]} />
          <meshStandardMaterial color="#16171b" roughness={0.85} />
        </mesh>
        <mesh position={[0.14, -0.15, 0.48]} castShadow>
          <cylinderGeometry args={[0.075, 0.065, 0.54, 10]} />
          <meshStandardMaterial color="#16171b" roughness={0.85} />
        </mesh>
      </group>
    </group>
  );
}
