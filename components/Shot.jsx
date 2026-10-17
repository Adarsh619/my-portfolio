'use client';
import { useState } from 'react';

/* Screenshot that falls back to a labelled placeholder if the file is missing. */
export default function Shot({ src, alt, label }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="shot-fallback" role="img" aria-label={alt}>
        <span>{label}</span>
        <small>Screenshot coming soon</small>
      </div>
    );
  }
  return <img className="shot" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
