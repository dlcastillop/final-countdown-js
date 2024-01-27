import { useTimer } from "./hooks";

const App = () => {
  const counter = useTimer(0, 0, 0, 2);

  return (
    <div>
      <p>Counter value: {counter.current.withLeadingZero}</p>
      <p>Counter value: {counter.current.withoutLeadingZero}</p>
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
