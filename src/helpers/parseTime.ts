export const parseTime = (time: string) => {
  const hookTime = time.split(":");

  if (hookTime.length !== 4) {
    throw new Error(
      "Invalid time parameter format. The time parameters has to be in the dd:hh:mm:ss format."
    );
  }

  const [days, hours, minutes, seconds] = hookTime.map((value) => {
    const temp = Number(value);

    if (isNaN(temp)) {
      throw new Error(
        "Invalid number in time parameter. Each element in the time parameter has to be a valid number."
      );
    }
    return temp;
  });

  if (days < 0) {
    throw new Error(
      "Invalid range in time parameter. The days element has to be more or equal than 0."
    );
  } else if (hours < 0 || hours >= 24) {
    throw new Error(
      "Invalid range in time parameter. The hours element has to be more or equal than 0 or less than 24."
    );
  } else if (minutes < 0 || minutes >= 60) {
    throw new Error(
      "Invalid range in time parameter. The minutes element has to be more or equal than 0 or less than 60."
    );
  } else if (seconds < 0 || seconds >= 60) {
    throw new Error(
      "Invalid range in time parameter. The seconds element has to be more or equal than 0 or less than 60."
    );
  }

  return { days, hours, minutes, seconds };
};
