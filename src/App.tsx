import { useCountDown } from "./hooks";

const App = () => {
  const counter = useCountDown(0, 10);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <p>The counter is over? {counter.isOver ? "True" : "False"}</p>
      <button onClick={counter.pause}>Pause</button>
      <button onClick={counter.play}>Play</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  );
};

export default App;
