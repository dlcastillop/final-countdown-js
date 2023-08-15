import { useUnlimitedStopwatch } from "./hooks";

const App = () => {
  const counter = useUnlimitedStopwatch(false, ":::");

  return (
    <div>
      <p>Counter value: {counter.current.withoutLeadingZero}</p>
    </div>
  );
};

export default App;
