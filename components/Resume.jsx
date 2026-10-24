'use client';
import { useEffect, useState } from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { RESUME_URL, asset } from '@/data/portfolio';
import { SectionHeading, Reveal } from './ui';

const PAGES = [1, 2];

/* Computers: the PDF viewer loads on request and stays inert until clicked, because an embedded
   PDF captures the mouse wheel and stops smooth scrolling.
   Phones and tablets cannot show a PDF inside a page, so they get page images instead
   (public/assets/resume-page-1.jpg, resume-page-2.jpg). Tapping one opens the real PDF. */
export default function Resume() {
  const [touch, setTouch] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTouch(!window.matchMedia('(hover: hover)').matches);
  }, []);

  return (
    <section id="resume" className="section">
      <SectionHeading eyebrow="Resume" title="My resume." />
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
          {touch ? (
            <div style={{ display: 'grid', gap: 12, padding: 12 }}>
              {PAGES.map((n) => (
                <a key={n} href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label={`Open resume PDF, page ${n}`}>
                  <img
                    src={asset(`/assets/resume-page-${n}.jpg`)}
                    alt={`Resume, page ${n} of ${PAGES.length}`}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 10, background: '#fff' }}
                  />
                </a>
              ))}
              <p className="muted" style={{ fontSize: 13, textAlign: 'center' }}>Tap a page to open the full PDF.</p>
            </div>
          ) : !loaded ? (
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
              onClick={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <iframe
                src={`${RESUME_URL}#view=FitH`}
                title="Adarsh Pradhan R — Resume"
                style={{ pointerEvents: active ? 'auto' : 'none' }}
              />
              {!active && (
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
