import { LEAD_SOURCES } from '../../../data/dashboard';
import { donutSegment } from './geometry';

// Coordinates are in card space (535 x 334), matching the Figma frame.
const CX = 268;
const CY = 182;
const R_OUTER = 115;
const R_INNER = 46;
const START_DEG = -14.6;

/** Callout per slice: label centre/baseline plus a curved arrow (shaft + head). */
const CALLOUTS: Record<string, { x: number; y: number; shaft: string; head: string }> = {
  'Inbound Call': { x: 428, y: 111.8, shaft: 'M341.9 106.8Q365.8 89.8 390.9 100.4', head: 'M385.8 91 390.9 100.4 381.1 107.9' },
  Website: { x: 97.25, y: 142.8, shaft: 'M185.8 114Q154 98.2 122.3 125.7', head: 'M124.2 111.5 122.3 125.7 135.8 129.7' },
  Facebook: { x: 85.5, y: 249.8, shaft: 'M179.5 235.5Q150 265.2 120.5 262.2', head: 'M130 251.2 120.5 262.2 130.8 272' },
  Reference: { x: 446, y: 251.3, shaft: 'M328.2 273.2Q369 290.8 409.8 269.2', head: 'M396.2 266.6 409.8 269.2 403.2 280.5' },
};

const SLICES = LEAD_SOURCES.map((s, i) => {
  const before = LEAD_SOURCES.slice(0, i).reduce((sum, x) => sum + x.share, 0);
  const from = START_DEG + (before / 100) * 360;
  const to = from + (s.share / 100) * 360;
  return { ...s, path: donutSegment(CX, CY, R_OUTER, R_INNER, from, to) };
});

export function LeadSourceChart() {
  const summary = LEAD_SOURCES.map((s) => `${s.source}: ${s.deals} deals (${s.share}%)`).join(', ');

  return (
    <svg className="chart" viewBox="0 0 535 334" role="img" aria-label={`Deals by lead source. ${summary}`}>
      {SLICES.map((s) => (
        <path key={s.source} d={s.path} fill={s.color}>
          <title>{`${s.source}: ${s.deals} (${s.share}%)`}</title>
        </path>
      ))}
      <g fill="none" stroke="var(--muted)" strokeWidth={2}>
        {LEAD_SOURCES.map((s) => (
          <g key={s.source}>
            <path d={CALLOUTS[s.source].shaft} />
            <path d={CALLOUTS[s.source].head} strokeLinejoin="miter" />
          </g>
        ))}
      </g>
      <g fontSize={10} fill="var(--muted)" textAnchor="middle">
        {LEAD_SOURCES.map((s) => {
          const c = CALLOUTS[s.source];
          return (
            <text key={s.source} x={c.x} y={c.y}>
              <tspan x={c.x}>{s.source}</tspan>
              <tspan x={c.x} dy={12}>{`${s.deals} (${s.share}%)`}</tspan>
            </text>
          );
        })}
      </g>
    </svg>
  );
}
