export const findIndex = (
  arr: any[],
  predicate: (param: any) => boolean,
  start: number
) => {
  for (let i = start; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
};
