import IZero from "./IZero";

export interface ITimer {
  current: IZero;
  isPaused: boolean;
  isOver: boolean;
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
  elapsedTime: IZero;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
