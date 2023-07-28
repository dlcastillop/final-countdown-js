import { useStopwatch } from "./hooks";

const App = () => {
  const counter = useStopwatch(0, 1, 5);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>{counter.currentHours}</p>
    </div>
  );
};

export default App;
