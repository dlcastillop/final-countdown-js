type Zero = {
  withLeadingZero: string;
  withoutLeadingZero: string;
};

interface BaseCounterStatus {
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  remainingSeconds: number;
}

export interface BaseCounter {
  current: Zero;
  isPaused: boolean;
  isOver: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}

export interface InternalCounter extends BaseCounter, BaseCounterStatus {}

export interface Stopwatch extends BaseCounter, BaseCounterStatus {
  remainingTime: Zero;
}

export interface Timer extends BaseCounter, BaseCounterStatus {
  elapsedTime: Zero;
}

export interface UnlimitedStopwatch {
  current: Zero;
  isPaused: boolean;
  currentDays: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  elapsedSeconds: number;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
