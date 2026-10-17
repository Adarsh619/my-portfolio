'use client';
import { useRef } from 'react';
import gsap from 'gsap';

/** Wraps any element so it gently follows the cursor. */
export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - r.left - r.width / 2) * strength,
      y: (e.clientY - r.top - r.height / 2) * strength,
      duration: 0.4,
      ease: 'power3.out'
    });
  };

  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
  };

  return (
    <div ref={ref} className="magnetic" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}
