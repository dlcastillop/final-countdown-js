import { BaseCounter, BaseCounterStatus, Zero } from "../interfaces";
import {
  useInternalStopwatch,
  useInternalTimer,
  handleTimerErrors,
} from "../helpers";

interface Timer extends BaseCounter, BaseCounterStatus {
  elapsedTime: Zero;
}

export const useTimer = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string,
  onFinish?: () => void
): Timer => {
  handleTimerErrors(days, hours, minutes, seconds);

  const timer = useInternalTimer(
    days,
    hours,
    minutes,
    seconds,
    startPaused,
    separator,
    onFinish
  );
  const stopwatch = useInternalStopwatch(
    days,
    hours,
    minutes,
    seconds,
    startPaused,
    separator
  );

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
