import { useStopwatch } from "./hooks";

const App = () => {
  const a = useStopwatch(2, 30, 55);

  return <>{a}</>;
};

export default App;
