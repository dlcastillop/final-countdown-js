interface IZero {
  withLeadingZero: string;
  withoutLeadingZero: string;
}

export interface IBaseCounter {
  current: IZero;
  isPaused: boolean;
  isOver: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}

export interface IBaseStopwatch extends IBaseCounter {
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
}

export interface IStopwatch extends IBaseCounter {
  remainingTime: IZero;
}

type OmittedIBaseStopwatch = Omit<
  IBaseStopwatch,
  "isOver" | "remainingSeconds"
>;

export interface IUnlimitedStopwatch extends OmittedIBaseStopwatch {
  currentSeconds: number;
}
