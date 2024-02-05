export const makeCounter = (count: number) => {
  let num = count ?? 0;
  return () => {
    return num++;
  };
};
