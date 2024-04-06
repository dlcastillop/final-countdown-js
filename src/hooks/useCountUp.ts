import { BaseCounter, BaseCounterOptions } from "../interfaces";
import { useCounter } from "../helpers";

export const useCountUp = (
  min: number,
  max: number,
  options?: BaseCounterOptions
): BaseCounter =>
  useCounter(min, max, true, {
    startPaused: options?.startPaused,
    onFinish: options?.onFinish,
    onPause: options?.onPause,
  });
