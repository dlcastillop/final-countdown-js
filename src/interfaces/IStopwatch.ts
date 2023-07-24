export interface IStopwatch {
  current: string;
  isPaused: boolean;
  isOver: boolean;
  hours: number;
  minutes: number;
  seconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
  remainingTime: string;
  pause: () => void;
  play: () => void;
  reset: () => void;
}
