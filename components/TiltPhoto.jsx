'use client';
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';

/* Photo tilts toward the pointer with a moving highlight. Inspired by React Bits "ProfileCard". */
export default function TiltPhoto({ children }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const [hover, setHover] = useState(false);
  const rotateY = useSpring(useTransform(px, [0, 1], [-14, 14]), { stiffness: 160, damping: 18 });
  const rotateX = useSpring(useTransform(py, [0, 1], [14, -14]), { stiffness: 160, damping: 18 });
  const gx = useTransform(px, (v) => v * 100);
  const gy = useTransform(py, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%)`;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { px.set(0.5); py.set(0.5); setHover(false); };

  return (
    <div
      style={{ position: 'absolute', inset: 0, perspective: 900 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
    >
      <motion.div style={{ position: 'absolute', inset: 0, rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {children}
        <motion.span
          aria-hidden="true"
          style={{ position: 'absolute', inset: '8%', borderRadius: '50%', pointerEvents: 'none', background: glare, opacity: hover ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      </motion.div>
    </div>
  );
}
