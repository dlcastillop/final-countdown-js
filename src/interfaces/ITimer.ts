export interface ITimer {
  current: string;
  isPaused: boolean;
  isOver: boolean;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
  elapsedTime: string;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
