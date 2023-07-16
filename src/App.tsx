import { useStopwatch } from "./hooks";

const App = () => {
  const a = useStopwatch(0, 1, 2);

  return <>{a}</>;
};

export default App;
