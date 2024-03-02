import {
  BaseCounter,
  BaseCounterStatus,
  Zero,
  TimerOptions,
} from "../interfaces";
import { useInternalStopwatch, useInternalTimer } from "../helpers";

interface Timer extends BaseCounter, BaseCounterStatus {
  elapsedTime: Zero;
}

export const useTimer = (startTime: string, options?: TimerOptions): Timer => {
  const timer = useInternalTimer(startTime, { ...options });
  const stopwatch = useInternalStopwatch({ ...options, endTime: startTime });

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
