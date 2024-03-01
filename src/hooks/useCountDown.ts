import { BaseCounter, BaseOptions } from "../interfaces";
import { useCounter } from "../helpers";

export const useCountDown = (
  min: number,
  max: number,
  options?: BaseOptions
): BaseCounter =>
  useCounter(min, max, false, {
    startPaused: options?.startPaused,
    onFinish: options?.onFinish,
  });
