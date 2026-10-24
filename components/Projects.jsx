'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useLenis } from 'lenis/react';
import { PROJECTS, asset } from '@/data/portfolio';
import { SectionHeading } from './ui';
import Shot from './Shot';
import Mockup from './Mockup';
import ProjectDrawer from './ProjectDrawer';

/* Card with 3D tilt that follows the pointer. */
function ProjectCard({ p, index, onOpen }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      className="pcard"
      role="button"
      tabIndex={0}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(index)}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(index); }}
    >
      <div className="pcard-media">
        <Shot
          src={asset(p.images[0])}
          alt={`${p.name} cover`}
          fallback={<Mockup slug={p.slug} name={p.name} />}
        />
      </div>
      <div className="pcard-body">
        <div className="pcard-top">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>{p.year}</span>
        </div>
        <h3>{p.name}</h3>
        <p>{p.tagline}</p>
        <div className="chips">
          {p.tags.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const lenis = useLenis();
  const total = PROJECTS.length;

  // Lock page scroll while the panel is open; keyboard controls.
  useEffect(() => {
    if (active === null) return;
    lenis?.stop();
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % total);
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + total) % total);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      lenis?.start();
    };
  }, [active, lenis, total]);

  return (
    <section id="work" className="section">
      <SectionHeading eyebrow="Selected work" title="Things I’ve built." />
      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <ProjectDrawer
            key="drawer"
            project={PROJECTS[active]}
            index={active}
            total={total}
            onClose={() => setActive(null)}
            onPrev={() => setActive((i) => (i - 1 + total) % total)}
            onNext={() => setActive((i) => (i + 1) % total)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
