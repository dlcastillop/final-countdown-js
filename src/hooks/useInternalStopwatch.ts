import { useState, useEffect } from "react";
import { addLeadingZero } from "../helpers";
import { IInternalHooks } from "../interfaces";

const useInternalStopwatch = (
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean,
  separator?: string
): IInternalHooks => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
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
      setTime({ hours: 0, minutes: 0, seconds: 0 });
    },
  };
};

export default useInternalStopwatch;
