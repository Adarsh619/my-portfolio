'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';
import { SectionHeading } from './ui';

export default function Projects() {
  const [index, setIndex] = useState(0);
  const p = PROJECTS[index];

  return (
    <section id="work" className="section">
      <SectionHeading eyebrow="Selected work" title="Projects, pick one." />
      <div className="work">
        <div className="plist">
          {PROJECTS.map((proj, i) => (
            <button key={proj.name} className={`pitem ${i === index ? 'on' : ''}`} onClick={() => setIndex(i)}>
              {i === index && (
                <motion.span layoutId="pitem-bg" className="pitem-bg" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
              )}
              <span className="pitem-num">0{i + 1}</span>
              <span className="pitem-name">{proj.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={p.name}
            className="card project-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pv">{p.name}</div>
            <div className="pb">
              <h3>{p.title}</h3>
              <div className="chips" style={{ marginTop: 10 }}>
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <ul>
                {p.bullets.map((b) => (
                  <motion.li key={b} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                    {b}
                  </motion.li>
                ))}
              </ul>
              {p.liveUrl ? (
                <a className="btn" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live site <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="small muted">Source on request</span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
