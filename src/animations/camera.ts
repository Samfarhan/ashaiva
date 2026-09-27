import * as THREE from 'three';

export interface CameraKeyframe {
  progress: number;
  pos: THREE.Vector3;
  target: THREE.Vector3;
  fov: number;
  label: string;
}

// 12 Precise Cinematic Storyboard Keyframes for Daytime Architectural Journey
export const DAYTIME_STORYBOARD: CameraKeyframe[] = [
  // 0.00: 01 — WIDE ESTABLISHING SHOT (Daytime city & dominant ASHAIVA Tower)
  {
    progress: 0.0,
    pos: new THREE.Vector3(0, 18.5, 48.0),
    target: new THREE.Vector3(0, 12.0, 0),
    fov: 44,
    label: 'City Skyline Establishing Shot',
  },
  // 0.12: 02 — APPROACH TOWER (Camera glides closer, scale of ASHAIVA building dominates)
  {
    progress: 0.12,
    pos: new THREE.Vector3(0, 14.2, 28.0),
    target: new THREE.Vector3(0, 10.5, 0),
    fov: 42,
    label: 'Approaching ASHAIVA Corporate Tower',
  },
  // 0.22: 03 — SPECIFIC FLOOR & SIGNAGE (Camera focuses on the 3rd floor studio suite)
  {
    progress: 0.22,
    pos: new THREE.Vector3(0.5, 8.8, 12.5),
    target: new THREE.Vector3(0.5, 8.4, 0),
    fov: 40,
    label: 'Architectural Signage & 3rd Floor Suite',
  },
  // 0.32: 04 — GLASS APPROACH & PASS-THROUGH (Camera passes through the glass facade)
  {
    progress: 0.32,
    pos: new THREE.Vector3(0.5, 8.2, 0.4),
    target: new THREE.Vector3(0.5, 8.0, -8.0),
    fov: 38,
    label: 'Physical Glass Pass-Through',
  },
  // 0.42: 05 — OFFICE INTERIOR & OCCLUSION (Gliding past chair, desk, plants, open studio)
  {
    progress: 0.42,
    pos: new THREE.Vector3(1.2, 7.8, -3.8),
    target: new THREE.Vector3(3.5, 7.3, -8.5),
    fov: 36,
    label: 'Studio Workspace & Foreground Occlusion',
  },
  // 0.52: 06 — HUMAN WORKER (Approaching person at corner window desk)
  {
    progress: 0.52,
    pos: new THREE.Vector3(2.8, 7.4, -6.6),
    target: new THREE.Vector3(3.6, 7.05, -8.2),
    fov: 32,
    label: 'Human Seated at Desk with Phone',
  },
  // 0.60: 07 — PHONE APPROACH (Camera zooms in close on the phone in hand)
  {
    progress: 0.6,
    pos: new THREE.Vector3(3.55, 7.18, -7.88),
    target: new THREE.Vector3(3.6, 7.05, -8.2),
    fov: 24,
    label: 'Approaching Smartphone in Hand',
  },
  // 0.68: 08 — ENTER PHONE SCREEN (Screen fills entire viewport — ASHAIVA Experience)
  {
    progress: 0.68,
    pos: new THREE.Vector3(3.59, 7.11, -8.06),
    target: new THREE.Vector3(3.6, 7.05, -8.2),
    fov: 18,
    label: 'Inside Phone: ASHAIVA Mobile Experience',
  },
  // 0.78: 09 — EXIT PHONE & STUDIO SPATIAL SERVICES (Pulls back, moves to meeting room)
  {
    progress: 0.78,
    pos: new THREE.Vector3(-1.8, 8.2, -7.5),
    target: new THREE.Vector3(-5.2, 7.6, -11.0),
    fov: 38,
    label: 'Conference Room & AI Automation Services',
  },
  // 0.88: 10 — WORK GALLERY & FOUNDERS (Farhan Khan & Mohit Agarwal leadership study)
  {
    progress: 0.88,
    pos: new THREE.Vector3(0, 8.0, -12.5),
    target: new THREE.Vector3(0, 7.8, -17.0),
    fov: 36,
    label: 'Gallery Installations & Founders Study',
  },
  // 0.94: 11 — MOVE TOWARD REAR PANORAMIC WINDOW
  {
    progress: 0.94,
    pos: new THREE.Vector3(0, 8.4, -18.0),
    target: new THREE.Vector3(0, 8.8, -35.0),
    fov: 42,
    label: 'Approaching Rear Panoramic Window',
  },
  // 1.00: 12 — FINAL EXIT TO CITY & CALL TO ACTION (Camera outside overlooking daylight city)
  {
    progress: 1.0,
    pos: new THREE.Vector3(0, 12.0, -32.0),
    target: new THREE.Vector3(0, 10.0, 0),
    fov: 46,
    label: 'Exterior Daylight Cityscape & Final CTA',
  },
];

export function interpolateCamera(progress: number) {
  const p = Math.min(Math.max(progress, 0), 1);

  let start = DAYTIME_STORYBOARD[0];
  let end = DAYTIME_STORYBOARD[1];

  for (let i = 0; i < DAYTIME_STORYBOARD.length - 1; i++) {
    if (p >= DAYTIME_STORYBOARD[i].progress && p <= DAYTIME_STORYBOARD[i + 1].progress) {
      start = DAYTIME_STORYBOARD[i];
      end = DAYTIME_STORYBOARD[i + 1];
      break;
    }
  }

  const span = end.progress - start.progress;
  const rawT = span > 0 ? (p - start.progress) / span : 0;
  // Smooth cubic ease-in-out
  const t = rawT < 0.5 ? 4 * rawT * rawT * rawT : 1 - Math.pow(-2 * rawT + 2, 3) / 2;

  const pos = new THREE.Vector3().lerpVectors(start.pos, end.pos, t);
  const target = new THREE.Vector3().lerpVectors(start.target, end.target, t);
  const fov = THREE.MathUtils.lerp(start.fov, end.fov, t);

  return { pos, target, fov };
}

