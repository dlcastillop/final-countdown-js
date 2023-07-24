# ⏱️ Final Countdown JS

Final Countdown JS is a react hook library to handle all kinds of timers.

## Installation

```js
npm i final-countdown-js
```

## Hooks

### useCountDown

The useCountDown hook provides a simple countdown timer functionality.

It takes three arguments:

- min: the minimum value of the countdown timer
- max: the maximum value of the countdown timer
- startPaused (optional, by default is false): a boolean value indicating whether the countdown timer should start in a paused state.

It returns an object with the following props:

- current: the current value of the countdown timer
- isPaused: a boolean value indicating whether the countdown timer is currently paused or not
- isOver: a boolean value indicating whether the countdown timer is currently over or not
- pause: the function to pause the countdown timer
- play: the function to play the countdown timer
- reset: the function to reset the countdown timer

Example:

```js
import { useCountDown } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useCountDown(0, 10);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <button onClick={() => counter.pause()}>Pause</button>
      <button onClick={() => counter.play()}>Play</button>
      <button onClick={() => counter.reset()}>Reset</button>
    </div>
  );
};

export default ReactCounter;
```

### useCountUp

The useCountUp hook provides a simple countup timer functionality.

It takes four arguments:

- min: the minimum value of the countup timer
- max: the maximum value of the countup timer
- startPaused (optional, by default is false): a boolean value indicating whether the countup timer should start in a paused state

It returns an object with the following props:

- current: the current value of the countup timer
- isPaused: a boolean value indicating whether the countup timer is currently paused or not
- isOver: a boolean value indicating whether the countup timer is currently over or not
- pause: the function to pause the countup timer
- play: the function to play the countup timer
- reset: the function to reset the countup timer

Example:

```js
import { useCountUp } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useCountUp(0, 10);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <button onClick={() => counter.pause()}>Pause</button>
      <button onClick={() => counter.play()}>Play</button>
      <button onClick={() => counter.reset()}>Reset</button>
    </div>
  );
};

export default ReactCounter;
```

### useStopwatch

The useStopwatch hook provides stopwatch functionality.

It takes four arguments:

- hours, minutes and seconds: the final time for the stopwatch
- startPaused (optional, by default is false): a boolean value indicating whether the stopwatch should start in a paused state

It returns an object with the following props:

- current: the current value of the stopwatch in the format "hh:mm:ss"
- isPaused: a boolean value indicating whether the stopwatch is currently paused or not
- isOver: a boolean value indicating whether the stopwatch is currently over or not
- pause: the function to pause the stopwatch
- play: the function to play the stopwatch
- reset: the function to reset the stopwatch

Example:

```js
import { useStopwatch } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useStopwatch(0, 10, 50);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <button onClick={() => counter.pause()}>Pause</button>
      <button onClick={() => counter.play()}>Play</button>
      <button onClick={() => counter.reset()}>Reset</button>
    </div>
  );
};

export default ReactCounter;
```

### useTimer

The useTimer hook provides timer functionality.

It takes four arguments:

- hours, minutes, and seconds: the inital time for the timer
- startPaused (optional, by default is false): a boolean value indicating whether the timer should start in a paused state

It returns an object with the following props:

- current: the current value of the timer in the format "hh:mm:ss"
- isPaused: a boolean value indicating whether the timer is currently paused or not
- isOver: a boolean value indicating whether the timer is currently over or not
- pause: the function to pause the timer
- play: the function to play the timer
- reset: the function to reset the timer

Example:

```js
import { useTimer } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useTimer(0, 10, 50);

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>The counter is paused? {counter.isPaused ? "True" : "False"}</p>
      <button onClick={() => counter.pause()}>Pause</button>
      <button onClick={() => counter.play()}>Play</button>
      <button onClick={() => counter.reset()}>Reset</button>
    </div>
  );
};

export default ReactCounter;
```

## Contributions

If you're interested in contributing to Final Countdown JS, please read our [contributing docs](https://github.com/dlcastillop/final-countdown-js/blob/main/CONTRIBUTING.md) before submitting a pull request.

## Support

Don't forget to leave a star!
