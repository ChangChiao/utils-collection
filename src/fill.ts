export const fill = (arr: any[], str: string, start: number, end: number) => {
  if (start === undefined || end === undefined) {
    return arr.map((item, i) => str);
  }
  return arr.map((item, i) => {
    if (i >= start && i <= end) {
      return str;
    }
    return item;
  });
};

// function fill(array, value, start = 0, end = array.length) {
//     if (start < 0) {
//       start = array.length + start;
//     }

//       if (end < 0) {
//           end = array.length + end
//       }

//       if (end > array.length) {
//           end = array.length
//       }

//     for (let i = start; i < end; i++) {
//       array[i] = value;
//     }

//     return array;
//   }
