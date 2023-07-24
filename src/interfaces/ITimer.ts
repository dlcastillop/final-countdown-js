export interface ITimer {
  current: string;
  isPaused: boolean;
  isOver: boolean;
  hours: number;
  minutes: number;
  seconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
  elapsedTime: string;
  pause: () => void;
  play: () => void;
  reset: () => void;
}
