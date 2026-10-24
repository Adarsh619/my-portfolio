'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '@/data/portfolio';
import { SectionHeading } from './ui';

const categories = Object.keys(SKILLS);
const container = { show: { transition: { staggerChildren: 0.045 } } };
const item = {
  hidden: { opacity: 0, y: 18, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function Skills() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section">
      <SectionHeading eyebrow="Toolbox" title="What I work with." />
      <div className="tabs" role="tablist">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={c === active} className={`tab ${c === active ? 'on' : ''}`} onClick={() => setActive(c)}>
            {c === active && <motion.span layoutId="tab-bg" className="tab-bg" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
            <span className="tab-label">{c}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} className="skill-grid" variants={container} initial="hidden" animate="show" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          {SKILLS[active].map((s) => <motion.span key={s} variants={item} className="skill">{s}</motion.span>)}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
