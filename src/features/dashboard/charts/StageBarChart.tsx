import { DEALS_BY_STAGE, DEVELOPMENTS } from '../../../data/dashboard';
import { ChartLegend } from './ChartLegend';
import { topRoundedRect } from './geometry';

// Card space (535 x 334). Plot: y = 206 is zero, 14.8px per record.
const PLOT_LEFT = 68;
const PLOT_WIDTH = 392;
const BASELINE = 206;
const UNIT = 14.8;
const TICKS = [0, 2.5, 5, 7.5, 10];
const BAR_X0 = 89;
const BAR_PITCH = 62;
const BAR_WIDTH = 32;
/** End point of each rotated tick label, relative to its bar centre (hand-placed in the design). */
const LABEL_DX = [3, 1.5, 1.5, 10, 5, 6];

export function StageBarChart() {
  const summary = DEALS_BY_STAGE.map((s) => `${s.stage}: ${s.counts.map((c, i) => `${DEVELOPMENTS[i].name} ${c}`).join(', ')}`).join('; ');

  return (
    <svg className="chart" viewBox="0 0 535 334" role="img" aria-label={`Deals by stage and development. ${summary}`}>
      {TICKS.map((t) => {
        const y = BASELINE - t * UNIT;
        return (
          <g key={t}>
            <rect x={PLOT_LEFT} y={y} width={PLOT_WIDTH} height={1} fill="var(--grid-line)" />
            <text x={48} y={y + 3.73} fontSize={12} fontWeight={500} fill="var(--muted)">
              {t}
            </text>
          </g>
        );
      })}

      {DEALS_BY_STAGE.map((s, i) => {
        const x = BAR_X0 + i * BAR_PITCH;
        // Paint the tallest (cumulative) segment first so each lower segment's rounded top overlaps it.
        let total = s.counts.reduce((a, b) => a + b, 0);
        const segments = [...s.counts].reverse().map((count, k) => {
          const devIndex = s.counts.length - 1 - k;
          const h = total * UNIT;
          total -= count;
          return { devIndex, h };
        });
        return (
          <g key={s.stage}>
            {segments.map(({ devIndex, h }) => (
              <path key={devIndex} d={topRoundedRect(x, BASELINE - h, BAR_WIDTH, h, 4)} fill={DEVELOPMENTS[devIndex].color}>
                <title>{`${s.stage} · ${DEVELOPMENTS[devIndex].name}: ${s.counts[devIndex]}`}</title>
              </path>
            ))}
            <text
              transform={`translate(${x + BAR_WIDTH / 2 + LABEL_DX[i]} ${BASELINE + 8.3}) rotate(-40)`}
              textAnchor="end"
              fontSize={10}
              fill="var(--muted)"
            >
              {s.stage}
            </text>
          </g>
        );
      })}

      <text transform="translate(32 130.75) rotate(-90)" textAnchor="middle" fontSize={14} fontWeight={500} fill="var(--muted)">
        Record Count
      </text>
      <text x={268} y={287.7} textAnchor="middle" fontSize={14} fontWeight={500} fill="var(--muted)">
        Stage
      </text>
      <ChartLegend x={20} y={304} />
    </svg>
  );
}
