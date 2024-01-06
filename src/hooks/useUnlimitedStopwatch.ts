import { useState, useEffect } from "react";
import { addLeadingZero } from "../helpers";
import { Zero } from "../interfaces";

interface UnlimitedStopwatch {
  current: Zero;
  isPaused: boolean;
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}

export const useUnlimitedStopwatch = (
  startPaused?: boolean,
  separator?: string
): UnlimitedStopwatch => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [paused, setPaused] = useState(startPaused ?? false);
  const divider = separator ?? ":";

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

    return () => clearInterval(interval);
  }, [time, paused]);

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
    currentDays: time.days,
    currentHours: time.hours,
    currentMinutes: time.minutes,
    currentSeconds: time.seconds,
    elapsedSeconds:
      time.days * 86400 + time.hours * 3600 + time.minutes * 60 + time.seconds,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
