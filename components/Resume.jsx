'use client';
import { useState } from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { RESUME_URL } from '@/data/portfolio';
import { SectionHeading, Reveal } from './ui';

/* The PDF viewer is only loaded when asked for. An embedded PDF captures the mouse wheel,
   which stops smooth scrolling and makes the page stutter, so it stays inert until clicked. */
export default function Resume() {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(false);

  const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

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
          {!loaded ? (
            <div style={{ display: 'grid', placeItems: 'center', gap: 14, padding: '72px 24px', textAlign: 'center' }}>
              <FileText size={40} color="var(--accent)" />
              <h3 style={{ fontSize: 24 }}>Adarsh Pradhan R — Resume</h3>
              <p className="muted" style={{ maxWidth: 420 }}>
                Preview it here without leaving the page, or use the buttons above to open or download it.
              </p>
              <button className="btn" onClick={() => setLoaded(true)}>Show resume preview</button>
            </div>
          ) : (
            <div
              style={{ position: 'relative' }}
              onClick={() => { if (canHover()) setActive(true); }}
              onMouseLeave={() => setActive(false)}
            >
              <iframe
                src={`${RESUME_URL}#view=FitH`}
                title="Adarsh Pradhan R — Resume"
                style={{ pointerEvents: active ? 'auto' : 'none' }}
              />
              {!active && canHover() && (
                <span
                  style={{
                    position: 'absolute', right: 16, bottom: 16, padding: '8px 14px', borderRadius: 99,
                    background: 'var(--accent)', color: 'var(--on)', fontSize: 13, fontWeight: 500, pointerEvents: 'none'
                  }}
                >
                  Click to scroll or zoom the PDF
                </span>
              )}
            </div>
          )}
          <p className="fallback">
            Preview not showing? <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Open the PDF directly</a>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
