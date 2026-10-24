'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SectionHeading, Reveal, Spotlight } from './ui';
import ScrollReveal from './ScrollReveal';
import { PERSON, STATS } from '@/data/portfolio';

export default function About() {
  const ref = useRef(null);

  useGSAP(
    () => {
      ref.current.querySelectorAll('[data-count]').forEach((el) => {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: Number(el.dataset.count),
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v); }
        });
      });
    },
    { scope: ref }
  );

  return (
    <section id="about" className="section" ref={ref}>
      <div className="about-grid">
        <div>
          <SectionHeading eyebrow="About" title="About me." />
          <ScrollReveal text={PERSON.bio} />
        </div>
        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Spotlight className="stat">
                <b data-count={s.value}>0</b>
                <span>{s.label}</span>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
