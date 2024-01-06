import { BaseCounter } from "../interfaces";
import { useCounter } from "../helpers";

export const useCountUp = (
  min: number,
  max: number,
  startPaused?: boolean
): BaseCounter => useCounter(min, max, true, startPaused);
