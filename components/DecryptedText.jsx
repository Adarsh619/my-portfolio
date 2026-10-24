'use client';
import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/* Letters scramble, then settle left to right. Plays on scroll-in and on hover.
   Inspired by React Bits "DecryptedText". */
export default function DecryptedText({ text, speed = 32 }) {
  const ref = useRef(null);
  const timer = useRef(0);
  const played = useRef(false);
  const [out, setOut] = useState(text);

  const run = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearInterval(timer.current);
    let step = 0;
    timer.current = setInterval(() => {
      step += 1;
      setOut(text.split('').map((c, k) => (c === ' ' || k < step / 2 ? c : CHARS[Math.floor(Math.random() * CHARS.length)])).join(''));
      if (step >= text.length * 2) { clearInterval(timer.current); setOut(text); }
    }, speed);
  };

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !played.current) { played.current = true; run(); }
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => { io.disconnect(); clearInterval(timer.current); };
  }, [text]);

  return (
    <span ref={ref} aria-label={text} onMouseEnter={run}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}
