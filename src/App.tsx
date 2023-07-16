import { useCountUp } from "./hooks";

const App = () => {
  const a = useCountUp(0, 5);

  return <>{a}</>;
};

export default App;
