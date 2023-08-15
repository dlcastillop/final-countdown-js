import { useState, useEffect } from "react";
import { addLeadingZero } from "../helpers";
import { IStopwatch } from "../interfaces";

export const useStopwatch = (
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): IStopwatch => {
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

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [paused, setPaused] = useState(startPaused ?? false);
  const divider = separator ?? ":";
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => {
        let h = prev.hours;
        let m = prev.minutes;
        let s = prev.seconds;

        if (s + 1 >= 60) {
          s = 0;
          if (m + 1 >= 60) {
            m = 0;
            h++;
          } else {
            m++;
          }
        } else {
          s++;
        }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    if (
      time.seconds === seconds &&
      time.minutes == minutes &&
      time.hours === hours
    ) {
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
    elapsedSeconds: time.hours * 3600 + time.minutes * 60 + time.seconds,
    remainingSeconds:
      hours * 3600 +
      minutes * 60 +
      seconds -
      (time.hours * 3600 + time.minutes * 60 + time.seconds),
    remainingTime: {
      withLeadingZero: `${addLeadingZero(
        hours - time.hours
      )}${divider}${addLeadingZero(
        minutes - time.minutes
      )}${divider}${addLeadingZero(seconds - time.seconds)}`,
      withoutLeadingZero: `${hours - time.hours}${divider}${
        minutes - time.minutes
      }${divider}${seconds - time.seconds}`,
    },
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setTime({ hours: 0, minutes: 0, seconds: 0 });
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
