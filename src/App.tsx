import { useCountDown } from "./hooks";

const App = () => {
  const counter = useCountDown(0, 10);

  return (
    <div>
      <p>Counter value: {counter.current.withoutLeadingZero}</p>
    </div>
  );
};

export default App;
