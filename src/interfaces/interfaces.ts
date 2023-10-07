type IZero = {
  withLeadingZero: string;
  withoutLeadingZero: string;
};

interface IBaseCounterStatus {
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds?: number;
}

export interface IBaseCounter {
  current: IZero;
  isPaused: boolean;
  isOver?: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}

export interface IStopwatch extends IBaseCounter, IBaseCounterStatus {
  remainingTime?: IZero;
}

export interface ITimer extends IBaseCounter, IBaseCounterStatus {
  elapsedTime?: IZero;
}
