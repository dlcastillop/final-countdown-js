import useCountUp from "./hooks/useCountUp";

const App = () => {
  const a = useCountUp(1, 5);

  return <>{a}</>;
};

export default App;
