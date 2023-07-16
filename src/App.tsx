import { useCountDown } from "./hooks";

const App = () => {
  const a = useCountDown(1, 5);

  return <>{a}</>;
};

export default App;
