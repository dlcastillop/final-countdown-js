import IZero from "./IZero";

export interface ICount {
  current: IZero;
  isPaused: boolean;
  isOver: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}
