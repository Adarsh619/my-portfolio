'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Words light up one by one as you scroll. Inspired by React Bits "ScrollReveal". */
export default function ScrollReveal({ text }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current.querySelectorAll('.sr-w'),
        { opacity: 0.18 },
        {
          opacity: 1, stagger: 0.12, ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', end: 'bottom 55%', scrub: true }
        }
      );
    },
    { scope: ref }
  );

  return (
    <p ref={ref} className="body-lg">
      {text.split(' ').map((w, i) => <span className="sr-w" key={i}>{w}{' '}</span>)}
    </p>
  );
}
