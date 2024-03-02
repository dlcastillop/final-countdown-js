import { useStopwatch } from "./hooks";

const App = () => {
  const {
    current,
    remainingTime,
    currentDays,
    currentHours,
    currentMinutes,
    currentSeconds,
    elapsedSeconds,
    remainingSeconds,
    isPaused,
    isOver,
    pause,
    play,
    reset,
    togglePause,
  } = useStopwatch({
    endTime: "00:00:10:03",
  });

  return (
    <div>
      <p>Stopwatch value: {current.withLeadingZero}</p>
      <p>Stopwatch value: {current.withoutLeadingZero}</p>
      <p>Remaining time: {remainingTime.withLeadingZero}</p>
      <p>Remaining time: {remainingTime.withoutLeadingZero}</p>
      <p>Days: {currentDays}</p>
      <p>Hours: {currentHours}</p>
      <p>Minutes: {currentMinutes}</p>
      <p>Seconds: {currentSeconds}</p>
      <p>Elapsed seconds: {elapsedSeconds}</p>
      <p>Remaining seconds: {remainingSeconds}</p>
      <p>Is the counter paused? {isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {isOver ? "Yes" : "No"}</p>
      <button onClick={pause}>Pause</button>
      <button onClick={play}>Play</button>
      <button onClick={reset}>Reset</button>
      <button onClick={togglePause}>Toggle Pause</button>
    </div>
  );
};

export default App;
