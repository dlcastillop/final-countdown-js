import { useState, useEffect } from "react";
import { addLeadingZero } from "../helpers";
import { IStopwatch } from "../interfaces";
import { useInternalTimer } from "../helpers";

export const useStopwatch = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): IStopwatch => {
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

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [paused, setPaused] = useState(startPaused ?? false);
  const divider = separator ?? ":";
  const [isOver, setIsOver] = useState(false);
  const timer = useInternalTimer(
    days,
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
        let d = prev.days;
        let h = prev.hours;
        let m = prev.minutes;
        let s = prev.seconds;

        if (s + 1 >= 60) {
          s = 0;
          if (m + 1 >= 60) {
            m = 0;
            if (h + 1 >= 24) {
              h = 0;
              d++;
            } else {
              h++;
            }
          } else {
            m++;
          }
        } else {
          s++;
        }

        return { days: d, hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    if (
      time.seconds === seconds &&
      time.minutes === minutes &&
      time.hours === hours &&
      time.days === days
    ) {
      setIsOver(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds, time, paused]);

  return {
    current: {
      withLeadingZero: `${addLeadingZero(time.days)}${divider}${addLeadingZero(
        time.hours
      )}${divider}${addLeadingZero(time.minutes)}${divider}${addLeadingZero(
        time.seconds
      )}`,
      withoutLeadingZero: `${time.days}${divider}${time.hours}${divider}${time.minutes}${divider}${time.seconds}`,
    },
    isPaused: paused,
    isOver,
    currentDays: time.days,
    currentHours: time.hours,
    currentMinutes: time.minutes,
    currentSeconds: time.seconds,
    elapsedSeconds:
      time.days * 86400 + time.hours * 3600 + time.minutes * 60 + time.seconds,
    remainingSeconds:
      days * 86400 +
      hours * 3600 +
      minutes * 60 +
      seconds -
      (time.days * 86400 +
        time.hours * 3600 +
        time.minutes * 60 +
        time.seconds),
    remainingTime: {
      withLeadingZero: timer.current.withLeadingZero,
      withoutLeadingZero: timer.current.withoutLeadingZero,
    },
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      timer.reset();
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
