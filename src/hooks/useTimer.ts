import { useState, useEffect } from "react";
import { addLeadingZero } from "../helpers";
import { ITimer } from "../interfaces";
import useInternalStopwatch from "./useInternalStopwatch";

export const useTimer = (
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): ITimer => {
  if (hours < 0) {
    throw new Error("The hours parameter has to be more or equal than 0.");
  } else if (minutes < 0 || minutes >= 60) {
    throw new Error(
      "The minutes parameter has to be more or equal than 0 or less than 60."
    );
  } else if (seconds < 0 || seconds >= 60) {
    throw new Error(
      "The seconds parameter has to be more or equal than 0 or less than 60."
    );
  }

  const [time, setTime] = useState({ hours, minutes, seconds });
  const [paused, setPaused] = useState(startPaused ?? false);
  const divider = separator ?? ":";
  const [isOver, setIsOver] = useState(false);
  const stopwatch = useInternalStopwatch(
    hours,
    minutes,
    seconds,
    paused,
    divider
  );

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => {
        let h = prev.hours;
        let m = prev.minutes;
        let s = prev.seconds;

        if (s - 1 < 0) {
          s = 59;
          if (m - 1 < 0) {
            m = 59;
            if (h - 1 >= 0) {
              h--;
            }
          } else {
            m--;
          }
        } else {
          s--;
        }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    if (time.seconds === 0 && time.minutes == 0 && time.hours === 0) {
      setIsOver(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [hours, minutes, seconds, time, paused]);

  return {
    current: {
      withLeadingZero: `${addLeadingZero(time.hours)}${divider}${addLeadingZero(
        time.minutes
      )}${divider}${addLeadingZero(time.seconds)}`,
      withoutLeadingZero: `${time.hours}${divider}${time.minutes}${divider}${time.seconds}`,
    },
    isPaused: paused,
    isOver,
    currentHours: time.hours,
    currentMinutes: time.minutes,
    currentSeconds: time.seconds,
    elapsedSeconds:
      hours * 3600 +
      minutes * 60 +
      seconds -
      (time.hours * 3600 + time.minutes * 60 + time.seconds),
    remainingSeconds: time.hours * 3600 + time.minutes * 60 + time.seconds,
    elapsedTime: {
      withLeadingZero: stopwatch.current.withLeadingZero,
      withoutLeadingZero: stopwatch.current.withoutLeadingZero,
    },
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setTime({ hours, minutes, seconds });
      stopwatch.reset();
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
