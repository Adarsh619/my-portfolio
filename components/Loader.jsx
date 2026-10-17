'use client';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Loader() {
  const [show, setShow] = useState(true);
  const root = useRef(null);

  useGSAP(
    () => {
      const counter = { v: 0 };
      const label = root.current.querySelector('span');
      gsap
        .timeline({ onComplete: () => setShow(false) })
        .to(counter, {
          v: 100,
          duration: 1.1,
          ease: 'power2.inOut',
          onUpdate: () => { label.textContent = Math.round(counter.v); }
        })
        .to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' });
    },
    { scope: root }
  );

  if (!show) return null;
  return (
    <div ref={root} className="loader" aria-hidden="true">
      <span>0</span>
    </div>
  );
}
