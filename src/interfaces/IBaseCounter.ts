export interface IBaseCounter {
  current: {
    withLeadingZero: string;
    withoutLeadingZero: string;
  };
  isPaused: boolean;
  isOver: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
