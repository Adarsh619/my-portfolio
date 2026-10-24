'use client';
import { useEffect, useRef } from 'react';

/* Small burst of lines where you click. Only draws while sparks are alive.
   Inspired by React Bits "ClickSpark". */
export default function ClickSpark() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let sparks = [];
    let raf = 0;

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const tick = (now) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#6c8cff';
      ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.lineCap = 'round';
      sparks = sparks.filter((s) => now - s.t < 450);
      for (const s of sparks) {
        const p = (now - s.t) / 450;
        const d = (1 - Math.pow(1 - p, 3)) * 28;
        const len = (1 - p) * 9;
        ctx.globalAlpha = 1 - p;
        ctx.beginPath();
        ctx.moveTo(s.x + Math.cos(s.a) * d, s.y + Math.sin(s.a) * d);
        ctx.lineTo(s.x + Math.cos(s.a) * (d + len), s.y + Math.sin(s.a) * (d + len));
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = sparks.length ? requestAnimationFrame(tick) : 0;
    };

    const onClick = (e) => {
      const t = performance.now();
      for (let i = 0; i < 8; i++) sparks.push({ x: e.clientX, y: e.clientY, a: (i * Math.PI) / 4, t });
      if (!raf) raf = requestAnimationFrame(tick);
    };

    size();
    window.addEventListener('click', onClick);
    window.addEventListener('resize', size);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', size);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 300 }} />;
}
