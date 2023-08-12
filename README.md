# ⏱️ Final Countdown JS

Final Countdown JS is a react hook library to handle all kinds of timers.

## Installation

You can use npm, yarn or pnpm to install Final Countdown JS.

```
npm i final-countdown-js
```

```
yarn add final-countdown-js

```

```
pnpm i final-countdown-js
```

## Hooks

### useCountDown

The useCountDown hook provides a simple countdown timer functionality.

It takes three arguments:

- `min`: the minimum value of the countdown timer
- `max`: the maximum value of the countdown timer
- `startPaused` (optional, by default is false): a boolean value indicating whether the countdown timer should start in a paused state.

It returns an object with the following props:

- `current`: the current value of the countdown timer
- `isPaused`: a boolean value indicating whether the countdown timer is currently paused or not
- `isOver`: a boolean value indicating whether the countdown timer is currently over or not
- `pause`: the function to pause the countdown timer
- `play`: the function to play the countdown timer
- `reset`: the function to reset the countdown timer
- `togglePause`: the function to toggle the pause

Example:

```ts
import { useCountDown } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useCountDown(0, 10);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>Is the counter paused? {counter.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {counter.isOver ? "Yes" : "No"}</p>
      <button onClick={counter.pause}>Pause</button>
      <button onClick={counter.play}>Play</button>
      <button onClick={counter.reset}>Reset</button>
      <button onClick={counter.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

### useCountUp

The useCountUp hook provides a simple countup timer functionality.

It takes four arguments:

- `min`: the minimum value of the countup timer
- `max`: the maximum value of the countup timer
- `startPaused` (optional, by default is false): a boolean value indicating whether the countup timer should start in a paused state

It returns an object with the following props:

- `current`: the current value of the countup timer
- `isPaused`: a boolean value indicating whether the countup timer is currently paused or not
- `isOver`: a boolean value indicating whether the countup timer is currently over or not
- `pause`: the function to pause the countup timer
- `play`: the function to play the countup timer
- `reset`: the function to reset the countup timer
- `togglePause`: the function to toggle the pause

Example:

```ts
import { useCountUp } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useCountUp(0, 10);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>Is the counter paused? {counter.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {counter.isOver ? "Yes" : "No"}</p>
      <button onClick={counter.pause}>Pause</button>
      <button onClick={counter.play}>Play</button>
      <button onClick={counter.reset}>Reset</button>
      <button onClick={counter.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

### useStopwatch

The useStopwatch hook provides stopwatch functionality.

It takes four arguments:

- `hours`, `minutes` and `seconds`: the final time for the stopwatch
- `startPaused` (optional, by default is false): a boolean value indicating whether the stopwatch should start in a paused state

It returns an object with the following props:

- `current`: the current value of the stopwatch in the format "hh:mm:ss"
- `isPaused`: a boolean value indicating whether the stopwatch is currently paused or not
- `isOver`: a boolean value indicating whether the stopwatch is currently over or not
- `currentHours`: a number indicating the current value of the hours on the stopwatch
- `currentMinutes`: a number indicating the current value of the minutes on the stopwatch
- `currentSeconds`: a number indicating the current value of the seconds on the stopwatch
- `elapsedSeconds`: a number indicating the seconds that have passed since the start of the stopwatch
- `remainingSeconds`: a number indicating the seconds that are left until the end of the stopwatch
- `remainingTime`: the amount of time that is left until the end of the stopwatch in the format "hh:mm:ss"
- `pause`: the function to pause the stopwatch
- `play`: the function to play the stopwatch
- `reset`: the function to reset the stopwatch
- `togglePause`: the function to toggle the pause

Example:

```ts
import { useStopwatch } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useStopwatch(0, 10, 50);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>Remaining time: {counter.remainingTime}</p>
      <p>Hours: {counter.currentHours}</p>
      <p>Minutes: {counter.currentMinutes}</p>
      <p>Seconds: {counter.currentSeconds}</p>
      <p>Elapsed seconds: {counter.elapsedSeconds}</p>
      <p>Remaining seconds: {counter.remainingSeconds}</p>
      <p>Is the counter paused? {counter.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {counter.isOver ? "Yes" : "No"}</p>
      <button onClick={counter.pause}>Pause</button>
      <button onClick={counter.play}>Play</button>
      <button onClick={counter.reset}>Reset</button>
      <button onClick={counter.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

### useTimer

The useTimer hook provides timer functionality.

It takes four arguments:

- `hours`, `minutes`, and `seconds`: the inital time for the timer
- `startPaused` (optional, by default is false): a boolean value indicating whether the timer should start in a paused state

It returns an object with the following props:

- `current`: the current value of the timer in the format "hh:mm:ss"
- `isPaused`: a boolean value indicating whether the timer is currently paused or not
- `isOver`: a boolean value indicating whether the timer is currently over or not
- `currentHours`: a number indicating the current value of the hours on the timer
- `currentMinutes`: a number indicating the current value of the minutes on the timer
- `currentSeconds`: a number indicating the current value of the seconds on the timer
- `elapsedSeconds`: a number indicating the seconds that have passed since the start of the timer
- `remainingSeconds`: a number indicating the seconds that are left until the end of the timer
- `elapsedTime`: the amount of time that has passed since the start of the timer in the format "hh:mm:ss"
- `pause`: the function to pause the timer
- `play`: the function to play the timer
- `reset`: the function to reset the timer
- `togglePause`: the function to toggle the pause

Example:

```ts
import { useTimer } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useTimer(0, 10, 50);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>Elapsed time: {counter.elapsedTime}</p>
      <p>Hours: {counter.currentHours}</p>
      <p>Minutes: {counter.currentMinutes}</p>
      <p>Seconds: {counter.currentSeconds}</p>
      <p>Elapsed seconds: {counter.elapsedSeconds}</p>
      <p>Remaining seconds: {counter.remainingSeconds}</p>
      <p>Is the counter paused? {counter.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {counter.isOver ? "Yes" : "No"}</p>
      <button onClick={counter.pause}>Pause</button>
      <button onClick={counter.play}>Play</button>
      <button onClick={counter.reset}>Reset</button>
      <button onClick={counter.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

## Guides

- [Full guide in Spanish](https://www.dlcastillop.com/blog/dominando-final-countdown-js-una-gu%C3%ADa-completa/)

## Contributions

If you're interested in contributing to Final Countdown JS, please read our [contributing docs](https://github.com/dlcastillop/final-countdown-js/blob/main/CONTRIBUTING.md) before submitting a pull request.

## Support

Don't forget to leave a star!
