'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

/* Switches dark/light mode. Uses a circular reveal from the click point when the browser supports it. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
  }, []);

  const apply = (next) => {
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (err) { /* storage unavailable */ }
    setTheme(next);
    window.dispatchEvent(new Event('themechange'));
  };

  const toggle = (e) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduce) {
      apply(next);
      return;
    }
    const root = document.documentElement;
    root.style.setProperty('--vt-x', `${e.clientX}px`);
    root.style.setProperty('--vt-y', `${e.clientY}px`);
    document.startViewTransition(() => apply(next));
  };

  const Icon = theme === 'dark' ? Sun : Moon;
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title="Toggle light / dark mode"
    >
      <Icon size={16} />
    </button>
  );
}
