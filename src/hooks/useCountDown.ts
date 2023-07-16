import { useState, useEffect } from "react";

export const useCountDown = (
  min: number,
  max: number,
  startPaused?: boolean
): {
  current: number;
  isPaused: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
} => {
  if (min >= max) {
    throw new Error("The min parameter has to be less than the max parameter.");
  }

  const [count, setCount] = useState(max);
  const [paused, setPaused] = useState(startPaused ?? false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        return prev - 1;
      });
    }, 1000);

    if (count <= min) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, min, paused]);

  return {
    current: count,
    isPaused: paused,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => setCount(max),
  };
};
