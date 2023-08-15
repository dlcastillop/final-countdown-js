import IZero from "./IZero";

export interface IStopwatch {
  current: IZero;
  isPaused: boolean;
  isOver: boolean;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
  remainingTime: IZero;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
