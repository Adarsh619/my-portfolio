'use client';
import { useState } from 'react';
import { TECH, TECH_GROUPS, TECH_ALSO, asset } from '@/data/portfolio';
import { SectionHeading, Reveal } from './ui';

/* Tech stack as one compact logo grid. The filter highlights a group without hiding anything,
   so every logo stays visible at a glance. Logos show in brand colour; black/white brands use the text colour. */
export default function Skills() {
  const [group, setGroup] = useState('All');
  const filtered = group !== 'All';

  return (
    <section id="skills" className="section">
      <div className="stack-head">
        <SectionHeading eyebrow="Toolbox" title="What I work with." />
        <div className="stack-filters" role="group" aria-label="Highlight a group">
          {['All', ...TECH_GROUPS].map((g) => (
            <button key={g} aria-pressed={g === group} onClick={() => setGroup(g)}>{g}</button>
          ))}
        </div>
      </div>

      <Reveal>
        <ul className={`stack-grid${filtered ? ' filtered' : ''}`}>
          {TECH.map((t) => (
            <li key={t.name} className={`stack-tile${t.group === group ? ' on' : ''}`}>
              <i
                className="stack-ico"
                aria-hidden="true"
                style={{ '--src': `url(${asset(`/icons/${t.icon}.svg`)})`, ...(t.brand ? { '--brand': t.brand } : {}) }}
              />
              <span>{t.name}</span>
            </li>
          ))}
        </ul>
        <p className="stack-also"><b>Also</b>{TECH_ALSO.join(' · ')}</p>
      </Reveal>
    </section>
  );
}
