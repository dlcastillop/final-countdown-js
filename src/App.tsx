import { useCountDown } from "./hooks";

const App = () => {
  const a = useCountDown(0, 5);

  return <>{a}</>;
};

export default App;
