'use client';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PERSON } from '@/data/portfolio';
import Magnetic from './Magnetic';
import { Reveal } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal><p className="eyebrow">Contact</p></Reveal>
      <Reveal delay={0.1}><h2 className="huge">Let’s talk.</h2></Reveal>
      <Reveal delay={0.15}>
        <p className="body-lg" style={{ maxWidth: 520, margin: '0 auto 36px' }}>
          I’m looking for frontend and full-stack roles. The quickest way to reach me is email.
        </p>
      </Reveal>
      <Reveal delay={0.2} className="cta center">
        <Magnetic>
          <a className="btn" href={`mailto:${PERSON.email}`}><Mail size={16} /> {PERSON.email}</a>
        </Magnetic>
        <Magnetic>
          <a className="btn ghost" href={PERSON.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
        </Magnetic>
        <Magnetic>
          <a className="btn ghost" href={PERSON.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
        </Magnetic>
      </Reveal>
    </section>
  );
}
