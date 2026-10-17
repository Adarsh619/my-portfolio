'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Github } from 'lucide-react';
import Shot from './Shot';
import { asset } from '@/data/portfolio';

/* Side panel with full project details and screenshot gallery. */
export default function ProjectDrawer({ project: p, index, total, onClose, onPrev, onNext }) {
  const [shot, setShot] = useState(0);

  return (
    <motion.div
      className="drawer-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={p.name}
        data-lenis-prevent
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-top">
          <span>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
          <button onClick={onClose} aria-label="Close project">
            <X size={18} />
          </button>
        </div>

        <div className="drawer-scroll">
          <div className="gallery">
            <div className="gallery-main">
              <Shot
                key={p.images[shot]}
                src={asset(p.images[shot])}
                alt={`${p.name} screenshot ${shot + 1}`}
                label={p.name}
              />
            </div>
            {p.images.length > 1 && (
              <div className="gallery-thumbs">
                {p.images.map((img, i) => (
                  <button key={img} className={i === shot ? 'on' : ''} onClick={() => setShot(i)} aria-label={`Show screenshot ${i + 1}`}>
                    <Shot src={asset(img)} alt="" label={p.name} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className="eyebrow" style={{ marginTop: 26 }}>{p.year} · {p.tags.slice(0, 3).join(' · ')}</p>
          <h3 className="drawer-title">{p.title}</h3>
          <p className="drawer-tagline">{p.tagline}</p>

          <h4>The problem</h4>
          <p>{p.problem}</p>

          <h4>What I built</h4>
          <p>{p.solution}</p>

          <h4>Highlights</h4>
          <ul>
            {p.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>

          <h4>Stack</h4>
          <div className="chips">
            {p.tags.map((t) => <span key={t}>{t}</span>)}
          </div>

          <div className="cta" style={{ marginTop: 28 }}>
            {p.liveUrl && (
              <a className="btn" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                Live site <ArrowUpRight size={16} />
              </a>
            )}
            {p.codeUrl && (
              <a className="btn ghost" href={p.codeUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> Code
              </a>
            )}
            {!p.liveUrl && !p.codeUrl && <span className="small muted">Code and live demo available on request.</span>}
          </div>
        </div>

        <div className="drawer-foot">
          <button onClick={onPrev}><ChevronLeft size={16} /> Previous</button>
          <button onClick={onNext}>Next <ChevronRight size={16} /></button>
        </div>
      </motion.aside>
    </motion.div>
  );
}
