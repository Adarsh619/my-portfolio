import { PERSON } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {PERSON.name}</span>
      <span>Next.js · React · GSAP · Lenis · Motion · Three.js · Ctrl/⌘ + K to jump anywhere</span>
    </footer>
  );
}
