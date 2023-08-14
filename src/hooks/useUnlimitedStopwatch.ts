import { useState, useEffect } from "react";
import { timeFormatter } from "../helpers";
import { IUnlimitedStopwatch } from "../interfaces";

export const useUnlimitedStopwatch = (
  startPaused?: boolean
): IUnlimitedStopwatch => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [paused, setPaused] = useState(startPaused ?? false);

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

    return () => clearInterval(interval);
  }, [time, paused]);

  return {
    current: timeFormatter(time.hours, time.minutes, time.seconds),
    isPaused: paused,
    currentHours: time.hours,
    currentMinutes: time.minutes,
    currentSeconds: time.seconds,
    elapsedSeconds: time.hours * 3600 + time.minutes * 60 + time.seconds,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setTime({ hours: 0, minutes: 0, seconds: 0 });
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
