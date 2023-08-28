import IZero from "./IZero";

export interface IInternalStopwatch {
  current: IZero;
  isPaused: boolean;
  isOver: boolean;
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
