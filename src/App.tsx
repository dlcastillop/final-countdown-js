import { useTimer } from "./hooks";

const App = () => {
  const a = useTimer(2, 30, 55);

  return <>{a}</>;
};

export default App;
