export const throttle = (fn: (param: any[]) => void, ms = 1000) => {
  let timer: null | ReturnType<typeof setTimeout> = null;
  return (...args: any[]) => {
    if (timer) return;
    setTimeout(() => {
      fn(...args);
      timer = null;
    }, ms);
  };
};
