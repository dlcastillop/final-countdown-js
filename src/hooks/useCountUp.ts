import { BaseCounter, BaseOptions } from "../interfaces";
import { useCounter } from "../helpers";

export const useCountUp = (
  min: number,
  max: number,
  options?: BaseOptions
): BaseCounter =>
  useCounter(min, max, true, {
    startPaused: options?.startPaused,
    onFinish: options?.onFinish,
  });
