import { BaseCounter, BaseCounterStatus, Zero } from "../interfaces";
import { useInternalStopwatch, useInternalTimer } from "../helpers";

export interface Timer extends BaseCounter, BaseCounterStatus {
  elapsedTime: Zero;
}

export const useTimer = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): Timer => {
  if (days < 0) {
    throw new Error("The days parameter has to be more or equal than 0.");
  } else if (hours < 0 || hours >= 24) {
    throw new Error(
      "The hours parameter has to be more or equal than 0 and less than 24."
    );
  } else if (minutes < 0 || minutes >= 60) {
    throw new Error(
      "The minutes parameter has to be more or equal than 0 and less than 60."
    );
  } else if (seconds < 0 || seconds >= 60) {
    throw new Error(
      "The seconds parameter has to be more or equal than 0 and less than 60."
    );
  }

  const timer = useInternalTimer(
    days,
    hours,
    minutes,
    seconds,
    startPaused,
    separator
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
