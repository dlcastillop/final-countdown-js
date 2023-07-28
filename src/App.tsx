import { useCountUp } from "./hooks";

const App = () => {
  const counter = useCountUp(0, 10);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <button onClick={counter.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default App;
