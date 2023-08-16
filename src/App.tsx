import { useInternalTimer } from "./helpers";

const App = () => {
  const counter = useInternalTimer(1, 0, 0, 0, false, ".");

  return (
    <div>
      <p>Counter value: {counter.current.withLeadingZero}</p>
      <p>Counter value: {counter.current.withoutLeadingZero}</p>
    </div>
  );
};

export default App;
