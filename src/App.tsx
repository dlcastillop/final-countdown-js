import { useStopwatch } from "./hooks";

const App = () => {
  const { current, isPaused, isOver, pause, play, reset, togglePause } =
    useStopwatch();

  return (
    <div>
      <p>Stopwatch value: {current.withLeadingZero}</p>
      <p>Stopwatch value: {current.withoutLeadingZero}</p>
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
