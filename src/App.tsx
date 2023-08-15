import { useStopwatch } from "./hooks";

const App = () => {
  const counter = useStopwatch(1, 10, 9, false, ".");

  return (
    <div>
      <p>Counter value: {counter.current.withLeadingZero}</p>
      <p>Remaining time: {counter.remainingTime.withLeadingZero}</p>
      <p>Remaining time: {counter.remainingTime.withoutLeadingZero}</p>
    </div>
  );
};

export default App;
