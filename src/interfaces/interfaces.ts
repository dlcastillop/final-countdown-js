type IZero = {
  withLeadingZero: string;
  withoutLeadingZero: string;
};

export interface IBaseCounter {
  current: IZero;
  isPaused: boolean;
  isOver?: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}

export interface IStopwatch extends IBaseCounter {
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds?: number;
  remainingTime?: IZero;
}
