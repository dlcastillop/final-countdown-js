import { useState, useEffect } from "react";
import { timeFormatter } from "../helpers";

export const useTimer = (
  hours: number,
  minutes: number,
  seconds: number,
  startPaused?: boolean
): {
  current: string;
  isPaused: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
} => {
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
    current: timeFormatter(time.hours, time.minutes, time.seconds),
    isPaused: paused,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => setTime({ hours, minutes, seconds }),
  };
};
