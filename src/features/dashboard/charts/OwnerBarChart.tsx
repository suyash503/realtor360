import { DEALS_BY_OWNER, DEVELOPMENTS } from '../../../data/dashboard';
import { ChartLegend } from './ChartLegend';

// Card space (535 x 196). x = 49 is zero, 22.4px per record.
const ORIGIN_X = 49;
const UNIT = 22.4;
const TICKS = [0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20];
const ROW_Y = [51, 88];
const BAR_HEIGHT = 28;
const RADIUS = 5;
/** Tick label centres; the design spaces them by hand rather than under each gridline. */
const TICK_LABEL_X = [49, 102, 156, 208, 263.75, 322.75, 381.5, 440, 498.5];

export function OwnerBarChart() {
  const summary = DEALS_BY_OWNER.map((o) => `${o.owner}: ${o.counts.map((c, i) => `${DEVELOPMENTS[i].name} ${c}`).join(', ')}`).join('; ');

  return (
    <svg className="chart" viewBox="0 0 535 196" role="img" aria-label={`Deals by sales person and development. ${summary}`}>
      {TICKS.map((t, i) => {
        const x = ORIGIN_X - 1 + t * UNIT;
        return (
          <g key={t}>
            <rect x={x} y={48} width={1} height={74} fill="var(--grid-line)" />
            <text x={TICK_LABEL_X[i]} y={138.73} textAnchor="middle" fontSize={12} fontWeight={500} fill="var(--muted)">
              {t}
            </text>
          </g>
        );
      })}

      {DEALS_BY_OWNER.map((o, row) => {
        // Widest (cumulative) segment first; shorter ones overlap it with their rounded ends.
        let total = o.counts.reduce((a, b) => a + b, 0);
        const segments = [...o.counts].reverse().map((count, k) => {
          const devIndex = o.counts.length - 1 - k;
          const w = total * UNIT;
          total -= count;
          return { devIndex, w };
        });
        return (
          <g key={o.owner}>
            {segments.map(({ devIndex, w }) => (
              <rect
                key={devIndex}
                x={ORIGIN_X}
                y={ROW_Y[row]}
                width={w}
                height={BAR_HEIGHT}
                rx={RADIUS}
                fill={DEVELOPMENTS[devIndex].color}
              >
                <title>{`${o.owner} · ${DEVELOPMENTS[devIndex].name}: ${o.counts[devIndex]}`}</title>
              </rect>
            ))}
          </g>
        );
      })}

      <text transform="translate(32 85.5) rotate(-90)" textAnchor="middle" fontSize={14} fontWeight={500} fill="var(--muted)">
        Deal Owner
      </text>
      <text x={268.25} y={157.7} textAnchor="middle" fontSize={14} fontWeight={500} fill="var(--muted)">
        Record Count
      </text>
      <ChartLegend x={22} y={172} />
    </svg>
  );
}
