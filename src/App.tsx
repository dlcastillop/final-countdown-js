import { useCountDown } from "./hooks";

const App = () => {
  const a = useCountDown(0, 5);

  return (
    <>
      {a.current}
      <button onClick={() => a.pause()}>Pause</button>
      <button onClick={() => a.play()}>Play</button>
      <button onClick={() => a.reset()}>Reset</button>
    </>
  );
};

export default App;
