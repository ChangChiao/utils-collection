export const dropWhile = (
  arr: any[],
  predicate: (item: any, index: number) => boolean
) => {
  let i = 0;
  while (predicate(arr[i], i)) {
    i++;
  }
  return arr.slice(i);
};
