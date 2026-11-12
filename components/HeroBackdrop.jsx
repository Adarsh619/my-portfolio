/* Orbit backdrop behind the hero photo: two hairline rings that turn in opposite directions,
   each carrying one small marker, plus four fixed ticks. Animated with CSS (see globals.css). */
export default function HeroBackdrop() {
  return (
    <svg className="bd bd-svg" viewBox="0 0 100 100" aria-hidden="true">
      <g className="bd-spin bd-spin-slow">
        <circle cx="50" cy="50" r="37" className="bd-ring" />
        <circle cx="50" cy="13" r="1.1" className="bd-marker" />
      </g>
      <g className="bd-spin bd-spin-rev">
        <circle cx="50" cy="50" r="44" className="bd-ring bd-ring-dash" />
        <circle cx="94" cy="50" r="1.3" className="bd-marker-hollow" />
      </g>
      {[0, 90, 180, 270].map((a) => (
        <line key={a} x1="50" y1="4.2" x2="50" y2="6.4" className="bd-tick" transform={`rotate(${a} 50 50)`} />
      ))}
    </svg>
  );
}
