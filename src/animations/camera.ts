import * as THREE from 'three';

// Continuous Catmull-Rom spline control points for infinite camera smoothness
const CAMERA_POINTS = [
  new THREE.Vector3(0, 18.0, 48.0),     // 0.00: City establishing shot
  new THREE.Vector3(0, 13.5, 30.0),     // 0.12: Approaching Ashaiva Tower
  new THREE.Vector3(0.5, 8.6, 14.0),    // 0.22: 3rd-floor terrace & signage
  new THREE.Vector3(0.8, 8.0, 1.2),     // 0.32: Passing through panoramic glass
  new THREE.Vector3(1.5, 7.6, -3.5),    // 0.44: Studio floor, posters & data boards
  new THREE.Vector3(2.8, 7.35, -6.5),   // 0.56: Workstation approach
  new THREE.Vector3(3.55, 7.16, -7.92), // 0.65: Phone in hand close-up
  new THREE.Vector3(3.58, 7.10, -8.08), // 0.74: Mobile conduit screen
  new THREE.Vector3(-1.2, 8.0, -7.5),   // 0.84: Conference & studio gallery
  new THREE.Vector3(0, 8.0, -13.0),     // 0.92: Founders gallery study
  new THREE.Vector3(0, 9.5, -24.0),     // 1.00: Panoramic rear window & city
];

const TARGET_POINTS = [
  new THREE.Vector3(0, 12.0, 0),        // 0.00
  new THREE.Vector3(0, 10.0, 0),        // 0.12
  new THREE.Vector3(0.5, 8.2, 0),       // 0.22
  new THREE.Vector3(0.8, 7.8, -8.0),    // 0.32
  new THREE.Vector3(3.2, 7.3, -8.0),    // 0.44
  new THREE.Vector3(3.6, 7.05, -8.2),   // 0.56
  new THREE.Vector3(3.6, 7.05, -8.2),   // 0.65
  new THREE.Vector3(3.6, 7.05, -8.2),   // 0.74
  new THREE.Vector3(-4.5, 7.5, -11.0),  // 0.84
  new THREE.Vector3(0, 7.8, -18.0),     // 0.92
  new THREE.Vector3(0, 9.5, -50.0),     // 1.00
];

const FOV_KEYFRAMES = [
  { t: 0.00, fov: 44 },
  { t: 0.12, fov: 42 },
  { t: 0.22, fov: 40 },
  { t: 0.32, fov: 38 },
  { t: 0.44, fov: 36 },
  { t: 0.56, fov: 32 },
  { t: 0.65, fov: 24 },
  { t: 0.74, fov: 19 },
  { t: 0.84, fov: 38 },
  { t: 0.92, fov: 38 },
  { t: 1.00, fov: 44 },
];

// Continuous centripetal Catmull-Rom spline curves for zero-jerk, buttery-smooth flight
const posCurve = new THREE.CatmullRomCurve3(CAMERA_POINTS, false, 'centripetal', 0.5);
const targetCurve = new THREE.CatmullRomCurve3(TARGET_POINTS, false, 'centripetal', 0.5);

export function interpolateCamera(progress: number) {
  const p = Math.min(Math.max(progress, 0), 1);

  // Sample continuous spline curves
  const pos = posCurve.getPoint(p);
  const target = targetCurve.getPoint(p);

  // Smooth Hermite interpolation for FOV
  let fov = 40;
  for (let i = 0; i < FOV_KEYFRAMES.length - 1; i++) {
    const k1 = FOV_KEYFRAMES[i];
    const k2 = FOV_KEYFRAMES[i + 1];
    if (p >= k1.t && p <= k2.t) {
      const span = k2.t - k1.t;
      const raw = span > 0 ? (p - k1.t) / span : 0;
      const smoothT = raw * raw * (3 - 2 * raw);
      fov = THREE.MathUtils.lerp(k1.fov, k2.fov, smoothT);
      break;
    }
  }

  return { pos, target, fov };
}
