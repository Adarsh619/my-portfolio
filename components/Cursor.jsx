'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/* Custom cursor: a dot that tracks exactly, and a ring that follows with a lag.
   Ring grows on links/buttons and shows a label over [data-cursor] elements.
   Only active on fine-pointer devices (mouse/trackpad). */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState('');

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 900, damping: 45 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
    document.documentElement.classList.add('has-cursor');

    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => {
      const target = e.target.closest?.('[data-cursor]');
      const interactive = e.target.closest?.('a, button, [role="button"]');
      setLabel(target ? target.dataset.cursor : '');
      setHover(Boolean(interactive));
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.documentElement.classList.remove('has-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} aria-hidden="true" />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY }} aria-hidden="true">
        <div className={`cursor-ring-inner ${label ? 'label' : hover ? 'hover' : ''}`}>
          <span>{label}</span>
        </div>
      </motion.div>
    </>
  );
}
