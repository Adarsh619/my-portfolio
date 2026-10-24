'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DecryptedText from './DecryptedText';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Section title that rises word-by-word when it enters the viewport. */
export function SectionHeading({ eyebrow, title }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current.querySelectorAll('.inner'), {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.05,
        ease: 'expo.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' }
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      <p className="eyebrow"><DecryptedText text={eyebrow} /></p>
      <h2 className="title">
        {title.split(' ').map((word, i) => (
          <span className="word" key={i}>
            <span className="inner">{word}</span>
          </span>
        ))}
      </h2>
    </div>
  );
}

/** Fades and rises the children when they scroll into view. */
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Card with a cursor-following light spot. */
export function Spotlight({ children, className = '' }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div className={`card spotlight ${className}`} onMouseMove={onMove}>
      {children}
    </div>
  );
}
