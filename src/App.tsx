import { useStopwatch } from "./hooks";

const App = () => {
  const counter = useStopwatch(0, 0, 2);

  return (
    <>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <button onClick={() => counter.pause()}>Pause</button>
      <button onClick={() => counter.play()}>Play</button>
      <button onClick={() => counter.reset()}>Reset</button>
    </>
  );
};

export default App;
