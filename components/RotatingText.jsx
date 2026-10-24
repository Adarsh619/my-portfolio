'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/* Cycles through words, one letter at a time. Inspired by React Bits "RotatingText". */
export default function RotatingText({ words, interval = 2600 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);

  const word = words[i];
  return (
    <span className="rot" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={word} style={{ display: 'inline-flex' }}>
          {word.split('').map((ch, k) => (
            <motion.span
              key={k}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              exit={{ y: '-110%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 300, delay: k * 0.025 }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
