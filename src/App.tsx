import { useStopwatch } from "./hooks";

const App = () => {
  const a = useStopwatch(0, 1, 30);

  return <>{a}</>;
};

export default App;
