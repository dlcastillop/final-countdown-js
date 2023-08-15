import IZero from "./IZero";

export interface IUnlimitedStopwatch {
  current: IZero;
  isPaused: boolean;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
