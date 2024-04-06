export interface BaseCounterOptions {
  startPaused?: boolean;
  onFinish?: () => void;
  onPause?: () => void;
}

export interface TimerOptions extends BaseCounterOptions {
  separator?: string;
  onPause?: () => void;
}

export interface StopwatchOptions extends TimerOptions {
  endTime?: string;
}

export type Zero = {
  withLeadingZero: string;
  withoutLeadingZero: string;
};

export interface BaseCounterStatus {
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
