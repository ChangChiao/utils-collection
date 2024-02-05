export const clamp = (min: number, max: number, middle: number) => {
  return Math.min(max, Math.max(min, middle));
};
