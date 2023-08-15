import { useTimer } from "./hooks";

const App = () => {
  const counter = useTimer(2, 5, 6, false, ".");

  return (
    <div>
      <p>Counter value: {counter.current.withLeadingZero}</p>
      <p>Counter value: {counter.current.withoutLeadingZero}</p>
      <p>Hours: {counter.currentHours}</p>
      <p>Minutes: {counter.currentMinutes}</p>
      <p>Seconds: {counter.currentSeconds}</p>
      <p>Elapsed seconds: {counter.elapsedSeconds}</p>
      <p>Remaining seconds: {counter.remainingSeconds}</p>
      <p>Remaining seconds: {counter.elapsedTime.withLeadingZero}</p>
      <p>Remaining seconds: {counter.elapsedTime.withoutLeadingZero}</p>
      <p>Is the counter paused? {counter.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {counter.isOver ? "Yes" : "No"}</p>
      <button onClick={counter.pause}>Pause</button>
      <button onClick={counter.play}>Play</button>
      <button onClick={counter.reset}>Reset</button>
      <button onClick={counter.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default App;
