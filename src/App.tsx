import { useCountUp } from "./hooks";

const App = () => {
  const counter = useCountUp(8, 12);

  return (
    <div>
      <p>Counter value: {counter.current.withLeadingZero}</p>
    </div>
  );
};

export default App;
