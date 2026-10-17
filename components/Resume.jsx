'use client';
import { Download, ExternalLink } from 'lucide-react';
import { RESUME_URL } from '@/data/portfolio';
import { SectionHeading, Reveal } from './ui';

export default function Resume() {
  return (
    <section id="resume" className="section">
      <SectionHeading eyebrow="Resume" title="Full CV, one click away." />
      <Reveal className="resume-actions">
        <a className="btn" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          Open in new tab <ExternalLink size={16} />
        </a>
        <a className="btn ghost" href={RESUME_URL} download>
          Download PDF <Download size={16} />
        </a>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="card resume-frame">
          <iframe src={`${RESUME_URL}#view=FitH`} title="Adarsh Pradhan R — Resume" loading="lazy" />
          <p className="fallback">
            Preview not showing? <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Open the PDF directly</a>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
