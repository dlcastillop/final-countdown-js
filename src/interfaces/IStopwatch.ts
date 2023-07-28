export interface IStopwatch {
  current: string;
  isPaused: boolean;
  isOver: boolean;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
  remainingTime: string;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
