import { BaseCounter, BaseCounterStatus, Zero } from "../interfaces";
import {
  useInternalStopwatch,
  useInternalTimer,
  handleTimerErrors,
} from "../helpers";

interface Stopwatch extends BaseCounter, BaseCounterStatus {
  remainingTime: Zero;
}

export const useStopwatch = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): Stopwatch => {
  handleTimerErrors(days, hours, minutes, seconds);

  const stopwatch = useInternalStopwatch(
    days,
    hours,
    minutes,
    seconds,
    startPaused,
    separator
  );
  const timer = useInternalTimer(
    days,
    hours,
    minutes,
    seconds,
    startPaused,
    separator
  );

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
