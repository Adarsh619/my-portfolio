'use client';
import { useEffect, useRef } from 'react';

/* Full-page dot grid. Dots ripple in a slow wave and light up in the theme accent near the pointer. */
export default function DotField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const gap = 32;
    let w = 0, h = 0, t = 0, raf = 0;
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const styles = getComputedStyle(document.documentElement);
      const base = styles.getPropertyValue('--muted').trim();
      const hot = styles.getPropertyValue('--accent').trim();
      ctx.clearRect(0, 0, w, h);
      t += 0.012;
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          const near = Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / 170);
          const wave = (Math.sin(x * 0.02 + t) + Math.cos(y * 0.025 - t * 1.3)) * 0.25 + 0.5;
          ctx.globalAlpha = 0.1 + wave * 0.12 + near * 0.8;
          ctx.fillStyle = near > 0.05 ? hot : base;
          ctx.beginPath();
          ctx.arc(x, y, 0.8 + near * 2.2 + wave * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => { mouse = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mouse = { x: -9999, y: -9999 }; };
    const onResize = () => { resize(); if (reduce) draw(); };

    resize();
    draw();
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="dotfield" aria-hidden="true" />;
}
