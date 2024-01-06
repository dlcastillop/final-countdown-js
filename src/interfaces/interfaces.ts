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
