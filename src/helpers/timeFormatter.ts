export const timeFormatter = (
  hours: number,
  minutes: number,
  seconds: number
): string => {
  let timeStr = "";

  hours % 10 === hours ? (timeStr += `0${hours}:`) : (timeStr += `${hours}:`);

  minutes % 10 === minutes
    ? (timeStr += `0${minutes}:`)
    : (timeStr += `${minutes}:`);

  seconds % 10 === seconds ? (timeStr += `0${seconds}`) : (timeStr += seconds);

  return timeStr;
};
