'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { NAV } from '@/data/portfolio';
import { useGo } from './useGo';

/* Buttons grow as the pointer gets close. Inspired by React Bits "Dock". */
function DockItem({ mouseX, onClick, children }) {
  const ref = useRef(null);
  const distance = useTransform(mouseX, (val) => {
    const r = ref.current?.getBoundingClientRect();
    return r ? val - r.x - r.width / 2 : 999;
  });
  const spring = { mass: 0.1, stiffness: 200, damping: 14 };
  const scale = useSpring(useTransform(distance, [-130, 0, 130], [1, 1.28, 1]), spring);
  const y = useSpring(useTransform(distance, [-130, 0, 130], [0, -6, 0]), spring);
  return (
    <motion.button ref={ref} style={{ scale, y }} onClick={onClick}>
      {children}
    </motion.button>
  );
}

export default function Dock() {
  const [show, setShow] = useState(false);
  const go = useGo();
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="dock-wrap">
      <AnimatePresence>
        {show && (
          <motion.nav
            className="dock"
            aria-label="Quick navigation"
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {NAV.map((n) => (
              <DockItem key={n.id} mouseX={mouseX} onClick={() => go(n.id)}>{n.label}</DockItem>
            ))}
            <DockItem mouseX={mouseX} onClick={() => window.dispatchEvent(new Event('open-palette'))}>Find</DockItem>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
