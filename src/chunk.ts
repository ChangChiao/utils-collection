export const chunk = (arr: unknown[], count: number) => {
  const newArr = [];
  while (arr.length > 0) {
    const childGroup = arr.splice(0, count);
    newArr.push(childGroup);
  }

  return newArr;
};
