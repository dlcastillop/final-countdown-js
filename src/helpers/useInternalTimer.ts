import { useState, useEffect } from "react";
import { addLeadingZero } from "../helpers";
import { InternalCounter } from "../interfaces";

export const useInternalTimer = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string,
  onFinish?: () => void
): InternalCounter => {
  const [time, setTime] = useState({ days, hours, minutes, seconds });
  const [paused, setPaused] = useState(startPaused ?? false);
  const divider = separator ?? ":";
  const [isOver, setIsOver] = useState(false);

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

        if (s - 1 < 0) {
          s = 59;
          if (m - 1 < 0) {
            m = 59;
            if (h - 1 < 0) {
              h = 23;
              if (d - 1 >= 0) {
                d--;
              }
            } else {
              h--;
            }
          } else {
            m--;
          }
        } else {
          s--;
        }

        return { days: d, hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    if (
      time.seconds === 0 &&
      time.minutes === 0 &&
      time.hours === 0 &&
      time.days === 0
    ) {
      setIsOver(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds, time, paused]);

  useEffect(() => {
    isOver && onFinish && onFinish();
  }, [isOver]);

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
      days * 86400 +
      hours * 3600 +
      minutes * 60 +
      seconds -
      (time.days * 86400 +
        time.hours * 3600 +
        time.minutes * 60 +
        time.seconds),
    remainingSeconds:
      time.days * 86400 + time.hours * 3600 + time.minutes * 60 + time.seconds,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setTime({ days, hours, minutes, seconds });
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
