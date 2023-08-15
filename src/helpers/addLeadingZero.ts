export const addLeadingZero = (digit: number): string => {
  let timeStr = "";

  digit % 10 === digit ? (timeStr += `0${digit}`) : (timeStr += `${digit}`);

  return timeStr;
};
