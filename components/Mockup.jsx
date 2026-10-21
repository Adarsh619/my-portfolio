/* UI preview drawn in code. Shown until real screenshots are added to public/projects/. */
const BARS = [42, 66, 54, 82, 60, 90, 72];

export default function Mockup({ slug, name }) {
  return (
    <div className={`mockup mk-${slug}`} role="img" aria-label={`${name} app preview`}>
      <div className="mk-bar">
        <i /><i /><i />
        <span>{slug}.app</span>
      </div>
      <div className="mk-body">
        {slug === 'groundwork' && (
          <>
            <div className="mk-side"><b /><b /><b /></div>
            <div className="mk-main">
              <div className="mk-bubble ai" />
              <div className="mk-bubble me" />
              <div className="mk-bubble ai short" />
              <div className="mk-cite">report.pdf · page 4</div>
            </div>
          </>
        )}
        {slug === 'financeflow' && (
          <>
            <div className="mk-side"><b /><b /><b /></div>
            <div className="mk-main">
              <div className="mk-stats"><span /><span /><span /></div>
              <div className="mk-chart">
                {BARS.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
              </div>
            </div>
          </>
        )}
        {slug === 'aizen-map' && (
          <>
            <div className="mk-side mk-rows"><span /><span /><span /></div>
            <div className="mk-main">
              <div className="mk-map">
                <i style={{ left: '22%', top: '30%' }} />
                <i style={{ left: '58%', top: '55%' }} />
                <i style={{ left: '74%', top: '22%' }} />
                <i style={{ left: '40%', top: '70%' }} />
              </div>
            </div>
          </>
        )}
        {slug === 'promptlab' && (
          <>
            <div className="mk-side"><b /><b /><b /></div>
            <div className="mk-main">
              <div className="mk-panes">
                <div className="mk-pane"><b /><b /><b /><b /></div>
                <div className="mk-pane"><b /><b /><b /></div>
              </div>
            </div>
          </>
        )}
        {slug === 'portfolio' && (
          <>
            <div className="mk-side"><b /><b /><b /></div>
            <div className="mk-main">
              <div className="mk-ring" style={{ width: 70, height: 70, alignSelf: 'center' }} />
              <div className="mk-rows"><span /><span /></div>
            </div>
          </>
        )}
        {slug === 'calorie-tracker' && (
          <>
            <div className="mk-side"><div className="mk-ring" /></div>
            <div className="mk-main mk-rows"><span /><span /><span /><span /></div>
          </>
        )}
      </div>
    </div>
  );
}
