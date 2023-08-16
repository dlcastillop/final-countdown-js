import { useInternalStopwatch } from "./helpers";

const App = () => {
  const counter = useInternalStopwatch(1, 1, 1, 1, false, ".");

  return (
    <div>
      <p>Counter value: {counter.current.withLeadingZero}</p>
      <p>Counter value: {counter.current.withoutLeadingZero}</p>
    </div>
  );
};

export default App;
