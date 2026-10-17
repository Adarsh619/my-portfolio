'use client';
import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, Download, Command } from 'lucide-react';
import { NAV, PERSON, RESUME_URL } from '@/data/portfolio';
import ThemeToggle from './ThemeToggle';
import { useGo } from './useGo';

/* Fixed side panels on wide screens: section navigation on the left, quick actions on the right. */
export default function SideRail() {
  const go = useGo();
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <aside className="rail rail-left" aria-label="Sections">
        <div className="rail-panel">
          {NAV.map((n) => (
            <button key={n.id} className={`rail-link ${active === n.id ? 'on' : ''}`} onClick={() => go(n.id)}>
              <span className="rail-dot" />
              <span className="rail-label">{n.label}</span>
            </button>
          ))}
        </div>
      </aside>

      <aside className="rail rail-right" aria-label="Quick actions">
        <div className="rail-panel">
          <ThemeToggle />
          <a className="rail-icon" href={RESUME_URL} download aria-label="Download CV" title="Download CV">
            <Download size={16} />
          </a>
          <a className="rail-icon" href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a className="rail-icon" href={PERSON.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <Github size={16} />
          </a>
          <a className="rail-icon" href={`mailto:${PERSON.email}`} aria-label="Email" title="Email">
            <Mail size={16} />
          </a>
          <button className="rail-icon" onClick={() => window.dispatchEvent(new Event('open-palette'))} aria-label="Quick find" title="Quick find (Ctrl/⌘ + K)">
            <Command size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
