import { BaseCounter, BaseCounterOptions } from "../interfaces";
import { useCounter } from "../helpers";

export const useCountDown = (
  min: number,
  max: number,
  options?: BaseCounterOptions
): BaseCounter =>
  useCounter(min, max, false, {
    startPaused: options?.startPaused,
    onFinish: options?.onFinish,
    onPause: options?.onPause,
  });
