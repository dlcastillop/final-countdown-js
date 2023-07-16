import { useCountDown } from "./hooks";

const App = () => {
  const a = useCountDown(50, 150);

  return <>{a}</>;
};

export default App;
