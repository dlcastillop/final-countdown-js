import { useState, useEffect } from "react";
import { BaseCounter } from "../interfaces";
import { addLeadingZero } from ".";

export const useCounter = (
  min: number,
  max: number,
  isCountingUp: boolean,
  startPaused?: boolean
): BaseCounter => {
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
        return isCountingUp ? prev + 1 : prev - 1;
      });
    }, 1000);

    if ((count <= min && !isCountingUp) || (count >= max && isCountingUp)) {
      setIsOver(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, min, max, paused, isCountingUp]);

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
