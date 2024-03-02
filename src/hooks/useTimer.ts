import {
  BaseCounter,
  BaseCounterStatus,
  Zero,
  ExtendedOptions,
} from "../interfaces";
import { useInternalStopwatch, useInternalTimer } from "../helpers";

interface Timer extends BaseCounter, BaseCounterStatus {
  elapsedTime: Zero;
}

export const useTimer = (endTime: string, options?: ExtendedOptions): Timer => {
  const timer = useInternalTimer(endTime, { ...options });
  const stopwatch = useInternalStopwatch(endTime, { ...options });

  return {
    ...timer,
    elapsedTime: {
      withLeadingZero: stopwatch.current.withLeadingZero,
      withoutLeadingZero: stopwatch.current.withoutLeadingZero,
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
