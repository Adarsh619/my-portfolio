'use client';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'motion/react';
import { MARQUEE_ITEMS } from '@/data/portfolio';

/* Scroll-velocity reactive marquee (Motion). */
export default function Marquee() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skew = useSpring(useTransform(velocity, [-2500, 2500], [-8, 8]), { stiffness: 250, damping: 35 });
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div style={{ skewX: skew }}>
        <div className="track">
          {row.map((item, i) => <span key={i}>{item}<i>✦</i></span>)}
        </div>
      </motion.div>
    </div>
  );
}
