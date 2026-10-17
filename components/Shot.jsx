'use client';
import { useState } from 'react';

/* Shows a real screenshot; if the file is missing, shows the given fallback. */
export default function Shot({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback ?? null;
  return <img className="shot" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
