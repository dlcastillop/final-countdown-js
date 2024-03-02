import { useTimer } from "./hooks";

const App = () => {
  const {
    current,
    elapsedTime,
    currentDays,
    currentHours,
    currentMinutes,
    currentSeconds,
    elapsedSeconds,
    remainingSeconds,
    isPaused,
    isOver,
    pause,
    play,
    reset,
    togglePause,
  } = useTimer("00:00:00:03", {
    onFinish: () => console.log("asd"),
  });

  return (
    <div>
      <p>Timer value: {current.withLeadingZero}</p>
      <p>Timer value: {current.withoutLeadingZero}</p>
      <p>Elapsed time: {elapsedTime.withLeadingZero}</p>
      <p>Elapsed time: {elapsedTime.withoutLeadingZero}</p>
      <p>Days: {currentDays}</p>
      <p>Hours: {currentHours}</p>
      <p>Minutes: {currentMinutes}</p>
      <p>Seconds: {currentSeconds}</p>
      <p>Elapsed seconds: {elapsedSeconds}</p>
      <p>Remaining seconds: {remainingSeconds}</p>
      <p>Is the counter paused? {isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {isOver ? "Yes" : "No"}</p>
      <button onClick={pause}>Pause</button>
      <button onClick={play}>Play</button>
      <button onClick={reset}>Reset</button>
      <button onClick={togglePause}>Toggle Pause</button>
    </div>
  );
};

export default App;
