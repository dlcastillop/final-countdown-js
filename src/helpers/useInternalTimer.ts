import { useState, useEffect } from "react";
import { addLeadingZero } from ".";
import { IInternalHooks } from "../interfaces";

export const useInternalTimer = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): IInternalHooks => {
  const [time, setTime] = useState({ days, hours, minutes, seconds });
  const paused = startPaused ?? false;
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
    reset: () => {
      setTime({ days, hours, minutes, seconds });
    },
  };
};
