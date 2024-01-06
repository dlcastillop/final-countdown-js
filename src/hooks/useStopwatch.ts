import { BaseCounter, BaseCounterStatus, Zero } from "../interfaces";
import { useInternalStopwatch, useInternalTimer } from "../helpers";

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
  if (days < 0) {
    throw new Error("The days parameter has to be more or equal than 0.");
  } else if (hours < 0 || hours >= 24) {
    throw new Error(
      "The hours parameter has to be more or equal than 0 or less than 24."
    );
  } else if (minutes < 0 || minutes >= 60) {
    throw new Error(
      "The minutes parameter has to be more or equal than 0 or less than 60."
    );
  } else if (seconds < 0 || seconds >= 60) {
    throw new Error(
      "The seconds parameter has to be more or equal than 0 or less than 60."
    );
  }

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
