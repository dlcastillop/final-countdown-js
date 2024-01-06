import { BaseCounter } from "../interfaces";
import { useCounter } from "../helpers";

export const useCountDown = (
  min: number,
  max: number,
  startPaused?: boolean
): BaseCounter => useCounter(min, max, false, startPaused);
