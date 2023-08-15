import { useState, useEffect } from "react";
import { addLeadingZero } from ".";
import { IInternalHooks } from "../interfaces";

export const useInternalTimer = (
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): IInternalHooks => {
  const [time, setTime] = useState({ hours, minutes, seconds });
  const paused = startPaused ?? false;
  const divider = separator ?? ":";

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
    reset: () => {
      setTime({ hours, minutes, seconds });
    },
  };
};
