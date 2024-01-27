import { BaseCounter } from "../interfaces";
import { useCounter } from "../helpers";

export const useCountUp = (
  min: number,
  max: number,
  startPaused?: boolean,
  onFinish?: () => void
): BaseCounter => useCounter(min, max, true, startPaused, onFinish);
