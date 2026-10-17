'use client';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import ParticleField from './ParticleField';
import Magnetic from './Magnetic';
import { useGo } from './useGo';
import { PERSON, HERO_WORDS, HERO_CHIPS, HERO_QUICK } from '@/data/portfolio';

const ThreeOrb = dynamic(() => import('./ThreeOrb'), { ssr: false });

export default function Hero() {
  const root = useRef(null);
  const go = useGo();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({ delay: 1.5, defaults: { ease: 'expo.out' } });
      tl.from('.hero .inner', { yPercent: 110, duration: 1.2, stagger: 0.07 })
        .from('.hero .h-anim', { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, '-=0.8')
        .from('.hero .photo-wrap', { scale: 0.85, opacity: 0, duration: 1.4 }, '-=1.1')
        .from('.hero .chip-wrap', { opacity: 0, y: 20, stagger: 0.12, duration: 0.7 }, '-=0.8');

      gsap.to('.hero .photo-wrap', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      });
    },
    { scope: root }
  );

  return (
    <section id="top" className="hero" ref={root}>
      <ParticleField />
      <div className="hero-grid">
        <div>
          <span className="status h-anim"><i className="dot" /> {PERSON.availability}</span>
          <h1 className="hero-title" aria-label="Hi, I’m Adarsh. I build AI-powered web apps.">
            {HERO_WORDS.map(([word, cls], i) => (
              <span className="word" key={i}>
                <span className={`inner ${cls || ''}`}>{word}</span>
              </span>
            ))}
          </h1>
          <p className="hero-lead h-anim">
            {PERSON.role}. I ship local RAG, vector search and polished interfaces, backed by real support and recruiting experience.
          </p>
          <div className="cta h-anim">
            <Magnetic><a className="btn" href="#work" onClick={(e) => { e.preventDefault(); go('work'); }}>View my work <ArrowRight size={16} /></a></Magnetic>
            <Magnetic><a className="btn ghost" href="#resume" onClick={(e) => { e.preventDefault(); go('resume'); }}>View resume</a></Magnetic>
            <Magnetic><a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); go('contact'); }}>Get in touch</a></Magnetic>
          </div>
        </div>

        <div className="photo-wrap">
          <ThreeOrb />
          <div className="photo">
            <span>{PERSON.initials}</span>
            <small>Add photo: public/assets/photo.jpg</small>
          </div>
          {HERO_CHIPS.map((c, i) => (
            <div key={c.label} className={`chip-wrap ${c.pos}`}>
              <span className="chip" style={{ animationDelay: `${i * 0.7}s` }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="quick h-anim">
        {HERO_QUICK.map((q) => (
          <button key={q.target} onClick={() => go(q.target)}>
            <small>{q.label}</small>{q.title} →
          </button>
        ))}
      </div>
    </section>
  );
}
