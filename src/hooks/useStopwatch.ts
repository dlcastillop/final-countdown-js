import {
  BaseCounter,
  BaseCounterStatus,
  Zero,
  StopwatchOptions,
} from "../interfaces";
import { useInternalStopwatch, useInternalTimer } from "../helpers";

interface Stopwatch extends BaseCounter, BaseCounterStatus {
  remainingTime: Zero;
}

export const useStopwatch = (options?: StopwatchOptions): Stopwatch => {
  const stopwatch = useInternalStopwatch({ ...options });
  const startTime = options?.endTime ?? "0:0:0:0";
  const timer = useInternalTimer(startTime, { ...options });

  return {
    ...stopwatch,
    remainingTime: {
      withLeadingZero: timer.current.withLeadingZero,
      withoutLeadingZero: timer.current.withoutLeadingZero,
    },
    pause: () => {
      stopwatch.pause();
      timer.pause();
    },
    play: () => {
      stopwatch.play();
      timer.play();
    },
    reset: () => {
      stopwatch.reset();
      timer.reset();
    },
    togglePause: () => {
      stopwatch.togglePause();
      timer.togglePause();
    },
  };
};
