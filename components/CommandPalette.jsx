'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from 'lenis/react';
import { NAV, PROJECTS, PERSON, RESUME_URL } from '@/data/portfolio';
import { useGo } from './useGo';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const lenis = useLenis();
  const go = useGo();
  const inputRef = useRef(null);

  const items = [
    ...NAV.map((n) => ({ label: n.label, kind: 'Section', run: () => go(n.id) })),
    ...PROJECTS.map((p) => ({ label: `Project: ${p.name}`, kind: 'Project', run: () => go('work') })),
    { label: 'Download resume (PDF)', kind: 'Action', run: () => window.open(RESUME_URL, '_blank') },
    { label: 'Copy email', kind: 'Action', run: () => navigator.clipboard?.writeText(PERSON.email) },
    { label: 'Send email', kind: 'Action', run: () => { window.location.href = `mailto:${PERSON.email}`; } },
    { label: 'LinkedIn', kind: 'Link', run: () => window.open(PERSON.linkedin, '_blank') },
    { label: 'GitHub', kind: 'Link', run: () => window.open(PERSON.github, '_blank') }
  ];
  const filtered = items.filter((it) => it.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-palette', onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ(''); setSel(0); lenis?.stop();
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      lenis?.start();
    }
  }, [open, lenis]);

  const choose = (it) => {
    if (!it) return;
    setOpen(false);
    setTimeout(it.run, 150);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); choose(filtered[sel]); }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="palette-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="palette"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => { setQ(e.target.value); setSel(0); }}
              onKeyDown={onKeyDown}
              placeholder="Jump to… sections, projects, links"
            />
            <ul>
              {filtered.map((it, i) => (
                <li key={it.label}>
                  <button className={i === sel ? 'on' : ''} onMouseEnter={() => setSel(i)} onClick={() => choose(it)}>
                    {it.label}<small>{it.kind}</small>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
