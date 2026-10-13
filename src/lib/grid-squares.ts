// Deterministic "highlighted squares" for the decorative grid backgrounds. They used to be picked
// with Math.random() in an effect after hydration (an extra render + repaint per card, and the
// squares popped in). A seeded generator gives the same look, rendered on the server.
export function seededSquares(
  seed: number,
  count: number,
  xMin: number,
  xSpan: number,
  yMin: number,
  ySpan: number,
): [number, number][] {
  let s = (seed + 1) * 2654435761;
  const next = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
  return Array.from({ length: count }, () => [
    Math.floor(next() * xSpan) + xMin,
    Math.floor(next() * ySpan) + yMin,
  ]);
}
