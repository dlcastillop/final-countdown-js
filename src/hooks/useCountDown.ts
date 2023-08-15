import { useState, useEffect } from "react";
import { ICount } from "../interfaces";
import { addLeadingZero } from "../helpers";

export const useCountDown = (
  min: number,
  max: number,
  startPaused?: boolean
): ICount => {
  if (min >= max) {
    throw new Error("The min parameter has to be less than the max parameter.");
  }

  const [count, setCount] = useState(max);
  const [paused, setPaused] = useState(startPaused ?? false);
  const [isOver, setIsOver] = useState(false);

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
      setIsOver(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, min, paused]);

  return {
    current: {
      withLeadingZero: addLeadingZero(count),
      withoutLeadingZero: count.toString(),
    },
    isPaused: paused,
    isOver,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setCount(max);
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
