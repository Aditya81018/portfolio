export function randomColor(lit = 0.8, chr = 0.3) {
  const hue = Math.random() * 360;
  return `oklch(${lit} ${chr} ${hue})`;
}
