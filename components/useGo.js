'use client';
import { useLenis } from 'lenis/react';

/** Smooth-scroll to a section id, using Lenis when it is available. */
export function useGo() {
  const lenis = useLenis();
  return (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.4 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };
}
