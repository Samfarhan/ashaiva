'use client';

import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      const isClickable = target?.closest('a, button, input, select, textarea, [data-clickable="true"]');
      setHovered(!!isClickable);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Outer Subtle Architectural Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-gold/30 transition-transform duration-150 ease-out will-change-transform ${
          hovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-gold/10 border-gold shadow-[0_0_20px_rgba(200,169,126,0.25)] scale-110'
            : 'w-6 h-6 -ml-3 -mt-3'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Central Precision Warm Gold Dot */}
      <div
        className="fixed top-0 left-0 w-1 h-1 -ml-[2px] -mt-[2px] rounded-full bg-gold will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
}
