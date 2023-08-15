import { useTimer } from "./hooks";

const App = () => {
  const counter = useTimer(1, 2, 3, false, ".");

  return (
    <div>
      <p>Counter value: {counter.current.withLeadingZero}</p>
      <p>{counter.elapsedTime.withLeadingZero}</p>
    </div>
  );
};

export default App;
