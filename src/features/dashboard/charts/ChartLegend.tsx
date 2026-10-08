import { DEVELOPMENTS } from '../../../data/dashboard';

/** Legend offsets between swatches, as laid out in the design. */
const SWATCH_X = [0, 111, 233];

/** Development colour legend drawn inside a chart's SVG. (x, y) is the first swatch's top-left. */
export function ChartLegend({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} className="chart-legend">
      {DEVELOPMENTS.map((dev, i) => (
        <g key={dev.name} transform={`translate(${SWATCH_X[i]} 0)`}>
          <circle cx={8} cy={8} r={8} fill={dev.color} />
          <text x={21.2} y={12.2} fontSize={12} fontWeight={500} fill="var(--muted)">
            {dev.name}
          </text>
        </g>
      ))}
    </g>
  );
}
