import { useTimer } from "./hooks";

const App = () => {
  const counter = useTimer(0, 0, 20);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>Elapsed time: {counter.elapsedTime}</p>
      <p>Hours: {counter.hours}</p>
      <p>Minutes: {counter.minutes}</p>
      <p>Seconds: {counter.seconds}</p>
      <p>Elapsed seconds: {counter.elapsedSeconds}</p>
      <p>Remaining seconds: {counter.remainingSeconds}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <p>The counter is over? {counter.isOver ? "True" : "False"}</p>
      <button onClick={counter.pause}>Pause</button>
      <button onClick={counter.play}>Play</button>
      <button onClick={counter.reset}>Reset</button>
    </div>
  );
};

export default App;
