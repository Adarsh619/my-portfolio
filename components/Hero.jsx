'use client';
import { Fragment, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import ParticleField from './ParticleField';
import Magnetic from './Magnetic';
import RotatingText from './RotatingText';
import TiltPhoto from './TiltPhoto';
import HeroBackdrop from './HeroBackdrop';
import { useGo } from './useGo';
import { PERSON, HERO_WORDS, HERO_ROTATE, HERO_CHIPS, HERO_QUICK, asset } from '@/data/portfolio';

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
          <span className="status h-anim"><i className="dot" /> <span className="shiny">{PERSON.availability}</span></span>
          <h1 className="hero-title" aria-label="Hi, I’m Adarsh. I build RAG apps, React UIs, full-stack apps, websites and dashboards.">
            {HERO_WORDS.map(([word, cls], i) => (
              <Fragment key={i}>
                <span className="word">
                  <span className={`inner ${cls || ''}`}>{word}</span>
                </span>
                {(word === 'Adarsh.' || word === 'build') && <br />}
              </Fragment>
            ))}
            <span className="word">
              <span className="inner"><RotatingText words={HERO_ROTATE} /></span>
            </span>
          </h1>
          <p className="hero-lead h-anim">
            {PERSON.headline}
          </p>
          <div className="cta h-anim">
            <Magnetic><a className="btn" href="#work" onClick={(e) => { e.preventDefault(); go('work'); }}>View my work <ArrowRight size={16} /></a></Magnetic>
            <Magnetic><a className="btn ghost" href="#resume" onClick={(e) => { e.preventDefault(); go('resume'); }}>View resume</a></Magnetic>
            <Magnetic><a className="btn ghost" href="#contact" onClick={(e) => { e.preventDefault(); go('contact'); }}>Get in touch</a></Magnetic>
          </div>
        </div>

        <div className="photo-wrap">
          <HeroBackdrop />
          <TiltPhoto>
            <div className="photo">
              <img className="photo-img" src={asset('/assets/photo.jpg')} alt="Adarsh Pradhan R" />
            </div>
          </TiltPhoto>
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
