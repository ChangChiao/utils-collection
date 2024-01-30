export const debounce = (fn: () => void, ms = 1000) => {
  let timer: null | ReturnType<typeof setTimeout> = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};
