export const dropRightWhile = (arr: any[], fn: () => void) => {
  let temp = [...arr];
  for (let i = arr.length - 1; i >= 0; i--) {
    const result = fn(arr[i]);
    if (!result) break;
    temp.splice(i, 1);
  }

  return temp;
};
