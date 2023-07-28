import { useTimer } from "./hooks";

const App = () => {
  const counter = useTimer(0, 1, 5);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <button onClick={counter.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default App;
