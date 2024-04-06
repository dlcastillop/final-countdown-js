import { useState, useEffect, useRef } from "react";
import { BaseCounter, BaseCounterOptions } from "../interfaces";
import { addLeadingZero } from ".";

export const useCounter = (
  min: number,
  max: number,
  isCountingUp: boolean,
  options: BaseCounterOptions
): BaseCounter => {
  if (min >= max) {
    throw new Error("The min parameter has to be less than the max parameter.");
  }

  const { startPaused, onFinish, onPause } = options;
  const [count, setCount] = useState(isCountingUp ? min : max);
  const [paused, setPaused] = useState(startPaused ?? false);
  const [isOver, setIsOver] = useState(false);
  const wasPausedRef = useRef(startPaused ?? false);

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

  useEffect(() => {
    isOver && onFinish && onFinish();
  }, [isOver]);

  useEffect(() => {
    if (!wasPausedRef.current && paused) {
      onPause && onPause();
    }
    wasPausedRef.current = paused;
  }, [paused, onPause]);

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
      setCount(isCountingUp ? min : max);
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
