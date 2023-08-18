import { useStopwatch } from "./hooks";

const App = () => {
  const stopwatch = useStopwatch(1, 0, 10, 50);

  return (
    <div>
      <p>Stopwatch value: {stopwatch.current.withLeadingZero}</p>
      <p>Stopwatch value: {stopwatch.current.withoutLeadingZero}</p>
      <p>Remaining time: {stopwatch.remainingTime.withLeadingZero}</p>
      <p>Remaining time: {stopwatch.remainingTime.withoutLeadingZero}</p>
      <p>Days: {stopwatch.currentDays}</p>
      <p>Hours: {stopwatch.currentHours}</p>
      <p>Minutes: {stopwatch.currentMinutes}</p>
      <p>Seconds: {stopwatch.currentSeconds}</p>
      <p>Elapsed seconds: {stopwatch.elapsedSeconds}</p>
      <p>Remaining seconds: {stopwatch.remainingSeconds}</p>
      <p>Is the counter paused? {stopwatch.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {stopwatch.isOver ? "Yes" : "No"}</p>
      <button onClick={stopwatch.pause}>Pause</button>
      <button onClick={stopwatch.play}>Play</button>
      <button onClick={stopwatch.reset}>Reset</button>
      <button onClick={stopwatch.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default App;
