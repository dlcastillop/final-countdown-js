import { useState, useEffect } from "react";
import { ICount } from "../interfaces";

export const useCountUp = (
  min: number,
  max: number,
  startPaused?: boolean
): ICount => {
  if (min >= max) {
    throw new Error("The min parameter has to be less than the max parameter.");
  }

  const [count, setCount] = useState(min);
  const [paused, setPaused] = useState(startPaused ?? false);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);

    if (count >= max) {
      setIsOver(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, max, paused]);

  return {
    current: count,
    isPaused: paused,
    isOver,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setCount(min);
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
