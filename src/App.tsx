import { useCountUp } from "./hooks";

const App = () => {
  const a = useCountUp(250, 150);

  return <>{a}</>;
};

export default App;
