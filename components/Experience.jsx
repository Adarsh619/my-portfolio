'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SectionHeading, Reveal, Spotlight } from './ui';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '@/data/portfolio';

export default function Experience() {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo('.tl-fill', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: 0.6 }
      });
    },
    { scope: ref }
  );

  return (
    <section id="experience" className="section" ref={ref}>
      <SectionHeading eyebrow="Experience" title="Where I’ve worked." />
      <div className="timeline">
        <div className="tl-track"><div className="tl-fill" /></div>
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08} className="tl-item">
            <Spotlight>
              <small>{job.period} · {job.location}</small>
              <h3>{job.role}</h3>
              <p className="muted">{job.company}</p>
              <p>{job.summary}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      <div className="grid-3">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <Spotlight><small className="muted">Education · {e.period}</small><h3>{e.title}</h3><p>{e.org}</p></Spotlight>
          </Reveal>
        ))}
        {CERTIFICATIONS.map((c) => (
          <Reveal key={c.title} delay={0.16}>
            <Spotlight><small className="muted">Certification · {c.period}</small><h3>{c.title}</h3><p>{c.org}</p></Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
