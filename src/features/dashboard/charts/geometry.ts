/** Point on a circle, angle in degrees clockwise from 12 o'clock. */
export function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

/** SVG path for a donut segment between two angles (degrees, clockwise from 12 o'clock). */
export function donutSegment(cx: number, cy: number, rOuter: number, rInner: number, from: number, to: number) {
  const large = to - from > 180 ? 1 : 0;
  const o1 = polar(cx, cy, rOuter, from);
  const o2 = polar(cx, cy, rOuter, to);
  const i1 = polar(cx, cy, rInner, to);
  const i2 = polar(cx, cy, rInner, from);
  const f = (n: number) => n.toFixed(3);
  return [
    `M${f(o1.x)} ${f(o1.y)}`,
    `A${rOuter} ${rOuter} 0 ${large} 1 ${f(o2.x)} ${f(o2.y)}`,
    `L${f(i1.x)} ${f(i1.y)}`,
    `A${rInner} ${rInner} 0 ${large} 0 ${f(i2.x)} ${f(i2.y)}`,
    'Z',
  ].join(' ');
}

/** Rect with only the top corners rounded (vertical bar). */
export function topRoundedRect(x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h);
  return `M${x} ${y + h}V${y + rr}A${rr} ${rr} 0 0 1 ${x + rr} ${y}H${x + w - rr}A${rr} ${rr} 0 0 1 ${x + w} ${y + rr}V${y + h}Z`;
}
