'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV } from '@/data/portfolio';
import { useGo } from './useGo';

export default function Dock() {
  const [show, setShow] = useState(false);
  const go = useGo();

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
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {NAV.map((n) => <button key={n.id} onClick={() => go(n.id)}>{n.label}</button>)}
            <button onClick={() => window.dispatchEvent(new Event('open-palette'))}>Find</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
