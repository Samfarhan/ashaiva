'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CitySceneProps {
  scrollProgress: number;
}

export function CityScene({ scrollProgress }: CitySceneProps) {
  const trafficGroup = useRef<THREE.Group>(null);
  const pedestriansGroup = useRef<THREE.Group>(null);
  const foliageGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (trafficGroup.current) {
      trafficGroup.current.children.forEach((car) => {
        const speed = car.userData.speed || 5;
        const dir = car.userData.dir || 1;
        car.position.x += speed * dir * delta;
        if (dir > 0 && car.position.x > 60) car.position.x = -60;
        if (dir < 0 && car.position.x < -60) car.position.x = 60;
      });
    }

    if (pedestriansGroup.current) {
      pedestriansGroup.current.children.forEach((ped) => {
        const speed = ped.userData.speed || 1.2;
        const dir = ped.userData.dir || 1;
        ped.position.x += speed * dir * delta;
        if (dir > 0 && ped.position.x > 35) ped.position.x = -35;
        if (dir < 0 && ped.position.x < -35) ped.position.x = 35;
      });
    }

    if (foliageGroup.current) {
      const time = state.clock.getElapsedTime();
      foliageGroup.current.children.forEach((tree, idx) => {
        tree.rotation.z = Math.sin(time * 1.5 + idx) * 0.035;
        tree.rotation.x = Math.cos(time * 1.2 + idx) * 0.025;
      });
    }
  });

  const dayTowerTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#cfcbbf';
    ctx.fillRect(0, 0, 512, 512);

    const rows = 24;
    const cols = 12;
    const padX = 8;
    const padY = 5;
    const w = (512 - padX * (cols + 1)) / cols;
    const h = (512 - padY * (rows + 1)) / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = padX + c * (w + padX);
        const y = padY + r * (h + padY);

        const skyTone = Math.sin(r * 2.1 + c * 5.3) * 0.15 + 0.85;
        const rVal = Math.floor(130 * skyTone);
        const gVal = Math.floor(175 * skyTone);
        const bVal = Math.floor(215 * skyTone);

        ctx.fillStyle = `rgb(${rVal}, ${gVal}, ${bVal})`;
        ctx.fillRect(x, y, w, h);

        ctx.strokeStyle = '#9ca0a6';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, w, h);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 2.5);
    return texture;
  }, []);

  return (
    <group name="CityScene">
      <mesh position={[0, -0.05, 24]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[180, 22]} />
        <meshStandardMaterial
          color="#2a2d33"
          roughness={0.4}
          metalness={0.15}
        />
      </mesh>

      {[-45, -30, -15, 0, 15, 30, 45].map((x, i) => (
        <mesh key={`dash-${i}`} position={[x, 0.01, 24]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[6, 0.3]} />
          <meshBasicMaterial color="#f0f2f5" />
        </mesh>
      ))}

      <mesh position={[0, 0.12, 10]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 10]} />
        <meshStandardMaterial
          color="#dfdbd3"
          roughness={0.7}
          metalness={0.05}
        />
      </mesh>

      <mesh position={[0, 0.1, 15]} receiveShadow>
        <boxGeometry args={[120, 0.25, 0.4]} />
        <meshStandardMaterial color="#c2beb6" roughness={0.8} />
      </mesh>

      <group position={[-34, 18, -12]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[20, 38, 22]} />
          <meshStandardMaterial
            color="#d8d4ca"
            roughness={0.45}
            metalness={0.1}
            map={dayTowerTexture || undefined}
          />
        </mesh>
        <mesh position={[0, 21, 0]} castShadow>
          <boxGeometry args={[16, 8, 18]} />
          <meshStandardMaterial color="#c8c4ba" roughness={0.5} />
        </mesh>
      </group>

      <group position={[36, 22, -10]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[18, 46, 20]} />
          <meshStandardMaterial
            color="#d5d0c6"
            roughness={0.35}
            metalness={0.2}
            map={dayTowerTexture || undefined}
          />
        </mesh>
        <mesh position={[0, 24.5, 0]} castShadow>
          <boxGeometry args={[14, 6, 16]} />
          <meshStandardMaterial color="#b8b4aa" roughness={0.6} />
        </mesh>
      </group>

      <mesh position={[-65, 26, -55]}>
        <boxGeometry args={[26, 55, 24]} />
        <meshStandardMaterial color="#94b0c6" roughness={0.6} />
      </mesh>
      <mesh position={[0, 35, -75]}>
        <boxGeometry args={[34, 75, 30]} />
        <meshStandardMaterial color="#88a8c0" roughness={0.6} />
      </mesh>
      <mesh position={[68, 28, -50]}>
        <boxGeometry args={[24, 60, 22]} />
        <meshStandardMaterial color="#96b2c8" roughness={0.6} />
      </mesh>

      <group ref={foliageGroup}>
        {[-18, -10, -2, 6, 14, 22].map((x, idx) => (
          <group key={`tree-${idx}`} position={[x * 1.8, 0.2, 12]}>
            <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
              <boxGeometry args={[1.8, 0.7, 1.8]} />
              <meshStandardMaterial color="#cfcbc3" roughness={0.8} />
            </mesh>
            <mesh position={[0, 2.2, 0]} castShadow>
              <cylinderGeometry args={[0.09, 0.14, 3.2, 8]} />
              <meshStandardMaterial color="#4a3e35" roughness={0.9} />
            </mesh>
            <mesh position={[0, 4.2, 0]} castShadow>
              <sphereGeometry args={[1.2, 14, 12]} />
              <meshStandardMaterial
                color="#3d5a36"
                roughness={0.75}
                metalness={0.05}
              />
            </mesh>
          </group>
        ))}
      </group>

      <group ref={trafficGroup} position={[0, 0.5, 24]}>
        <group position={[-25, 0, -3.2]} userData={{ speed: 8.5, dir: 1 }}>
          <mesh castShadow>
            <boxGeometry args={[4.2, 1.3, 1.9]} />
            <meshStandardMaterial color="#f0f2f5" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.55, 0]} castShadow>
            <boxGeometry args={[2.4, 0.8, 1.7]} />
            <meshStandardMaterial color="#324558" roughness={0.1} metalness={0.4} />
          </mesh>
        </group>

        <group position={[10, 0, -3.2]} userData={{ speed: 7.2, dir: 1 }}>
          <mesh castShadow>
            <boxGeometry args={[4.4, 1.4, 2.0]} />
            <meshStandardMaterial color="#2d333b" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.6, 0]} castShadow>
            <boxGeometry args={[2.5, 0.8, 1.8]} />
            <meshStandardMaterial color="#324558" roughness={0.1} />
          </mesh>
        </group>

        <group position={[28, 0, 3.2]} userData={{ speed: 9.0, dir: -1 }}>
          <mesh castShadow>
            <boxGeometry args={[4.5, 1.35, 1.95]} />
            <meshStandardMaterial color="#1f2328" metalness={0.85} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.55, 0]} castShadow>
            <boxGeometry args={[2.4, 0.8, 1.75]} />
            <meshStandardMaterial color="#324558" roughness={0.1} />
          </mesh>
        </group>

        <group position={[-12, 0, 3.2]} userData={{ speed: 7.8, dir: -1 }}>
          <mesh castShadow>
            <boxGeometry args={[4.0, 1.25, 1.85]} />
            <meshStandardMaterial color="#4a5568" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.55, 0]} castShadow>
            <boxGeometry args={[2.2, 0.75, 1.65]} />
            <meshStandardMaterial color="#324558" roughness={0.1} />
          </mesh>
        </group>
      </group>

      <group ref={pedestriansGroup} position={[0, 0.95, 8.5]}>
        {[-15, -4, 8, 20].map((x, idx) => (
          <group
            key={`ped-${idx}`}
            position={[x, 0, 0]}
            userData={{ speed: 1.1 + (idx % 2) * 0.4, dir: idx % 2 === 0 ? 1 : -1 }}
          >
            <mesh position={[0, 0.4, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.22, 1.0, 8]} />
              <meshStandardMaterial color={idx % 2 === 0 ? '#2d333b' : '#4b5563'} roughness={0.8} />
            </mesh>
            <mesh position={[0, 1.05, 0]} castShadow>
              <sphereGeometry args={[0.13, 8, 8]} />
              <meshStandardMaterial color="#d4b296" roughness={0.7} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}
