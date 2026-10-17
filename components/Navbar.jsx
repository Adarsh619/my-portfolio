'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Command, Download } from 'lucide-react';
import { NAV, RESUME_URL } from '@/data/portfolio';
import { useGo } from './useGo';

export default function Navbar() {
  const go = useGo();
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="logo" onClick={(e) => { e.preventDefault(); go('top'); }}>
        AP<b>.</b>
      </a>

      <nav className="pill" aria-label="Primary">
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={active === n.id ? 'on' : ''}
            onClick={(e) => { e.preventDefault(); go(n.id); }}
          >
            {active === n.id && (
              <motion.span
                layoutId="nav-pill"
                className="pill-bg"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="pill-label">{n.label}</span>
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="btn ghost sm" href={RESUME_URL} download>
          <Download size={15} /> CV
        </a>
        <button
          className="btn ghost sm"
          aria-label="Open quick find"
          onClick={() => window.dispatchEvent(new Event('open-palette'))}
        >
          <Command size={14} /> <kbd>K</kbd>
        </button>
      </div>
    </header>
  );
}
