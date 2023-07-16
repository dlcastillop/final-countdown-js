import { useState, useEffect } from "react";

export const useStopwatch = (
  hours: number,
  minutes: number,
  seconds: number
): string => {
  if (hours < 0) {
    throw new Error("The hours parameter has to be more or equal than 0.");
  } else if (minutes < 0 || minutes >= 60) {
    throw new Error(
      "The minutes parameter has to be more or equal than 0 or less than 60."
    );
  } else if (seconds < 1 || seconds >= 60) {
    throw new Error(
      "The seconds parameter has to be more or equal than 1 or less than 60."
    );
  }

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  let timeStr = "";

  useEffect(() => {
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
  }, [hours, minutes, seconds, time]);

  time.hours % 10 === time.hours
    ? (timeStr += `0${time.hours}:`)
    : (timeStr += `${time.hours}:`);

  time.minutes % 10 === time.minutes
    ? (timeStr += `0${time.minutes}:`)
    : (timeStr += `${time.minutes}:`);

  time.seconds % 10 === time.seconds
    ? (timeStr += `0${time.seconds}`)
    : (timeStr += time.seconds);

  return timeStr;
};
