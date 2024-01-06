export const handleTimerErrors = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number
) => {
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
};
