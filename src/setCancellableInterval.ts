export const setCancellableInterval = (callBack: () => void, ms: number) => {
  let interval = setInterval(callBack, ms);
  return () => {
    clearInterval(interval);
  };
};
