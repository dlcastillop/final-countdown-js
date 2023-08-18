# <img src="./public/logo.png" width="40" height="40" /> Final Countdown JS

Final Countdown JS is a react hook library to handle all kinds of timers.

## Installation

You can use npm, yarn or pnpm to install Final Countdown JS.

```
npm install final-countdown-js
```

```
yarn add final-countdown-js
```

```
pnpm install final-countdown-js
```

## Hooks

### useCountDown

The useCountDown hook provides a simple countdown timer functionality.

It takes three arguments:

- `min`: the minimum value of the countdown timer
- `max`: the maximum value of the countdown timer
- `startPaused` (optional, by default is false): a boolean value indicating whether the countdown timer should start in a paused state.

It returns an object with the following props:

- `current`: an object with two props:
  - `withLeadingZero`: a string with the current value of the counter with a leading zero
  - `withoutLeadingZero`: a string with the current value of the counter without a leading zero
- `isPaused`: a boolean value indicating whether the countdown timer is currently paused or not
- `isOver`: a boolean value indicating whether the countdown timer is currently over or not
- `pause`: the function to pause the countdown timer
- `play`: the function to play the countdown timer
- `reset`: the function to reset the countdown timer
- `togglePause`: the function to toggle the pause

Example:

```js
import { useCountDown } from "final-countdown-js";

const ReactCounter = () => {
  const countDown = useCountDown(0, 10);

  return (
    <div>
      <p>
        Counter value with leading zero: {countDown.current.withLeadingZero}
      </p>
      <p>
        Counter value without leading zero:{" "}
        {countDown.current.withoutLeadingZero}
      </p>
      <p>Is the counter paused? {countDown.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {countDown.isOver ? "Yes" : "No"}</p>
      <button onClick={countDown.pause}>Pause</button>
      <button onClick={countDown.play}>Play</button>
      <button onClick={countDown.reset}>Reset</button>
      <button onClick={countDown.togglePause}>Toggle Pause</button>
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

- `current`: an object with two props:
  - `withLeadingZero`: a string with the current value of the counter with a leading zero
  - `withoutLeadingZero`: a string with the current value of the counter without a leading zero
- `isPaused`: a boolean value indicating whether the countup timer is currently paused or not
- `isOver`: a boolean value indicating whether the countup timer is currently over or not
- `pause`: the function to pause the countup timer
- `play`: the function to play the countup timer
- `reset`: the function to reset the countup timer
- `togglePause`: the function to toggle the pause

Example:

```js
import { useCountUp } from "final-countdown-js";

const ReactCounter = () => {
  const countUp = useCountDown(0, 10);

  return (
    <div>
      <p>Counter value with leading zero: {countUp.current.withLeadingZero}</p>
      <p>
        Counter value without leading zero: {countUp.current.withoutLeadingZero}
      </p>
      <p>Is the counter paused? {countUp.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {countUp.isOver ? "Yes" : "No"}</p>
      <button onClick={countUp.pause}>Pause</button>
      <button onClick={countUp.play}>Play</button>
      <button onClick={countUp.reset}>Reset</button>
      <button onClick={countUp.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

### useStopwatch

The useStopwatch hook provides stopwatch functionality with a limit.

It takes six arguments:

- `days` (number): the initial number of days to start the stopwatch. It has to be equal to or greater than 0.
- `hours` (number): the initial number of hours to start the stopwatch. The value must be between 0 (inclusive) and 24 (exclusive).
- `minutes` (number): the initial number of minutes to start the stopwatch. The value must be between 0 (inclusive) and 60 (exclusive).
- `seconds` (number): the initial number of seconds to start the stopwatch. The value must be between 0 (inclusive) and 60 (exclusive).
- `startPaused` (optional boolean): a boolean flag that determines whether the stopwatch should start in a paused state. Defaults to false.
- `separator` (optional string): a string that specifies the separator to be used between days, hours, minutes, and seconds when the time is represented as a string. By default, colon (:) is used as a separator.

It returns an object with the following props:

- `current`: an object holding the current time of the stopwatch in both leading zero and non-leading zero formats. This object has two properties:
  - `withLeadingZero`: a string indicating the current time of the stopwatch with leading zeroes where necessary.
  - `withoutLeadingZero`: a string indicating the current time of the stopwatch without leading zeros.
- `isPaused`: a boolean value indicating if the stopwatch is currently paused.
- `isOver`: a boolean value indicating if the stopwatch has finished running its course.
- `currentDays`: a number indicating the current value of the days on the stopwatch.
- `currentHours`: a number indicating the current value of the hours on the stopwatch.
- `currentMinutes`: a number indicating the current value of the minutes on the stopwatch.
- `currentSeconds`: a number indicating the current value of the seconds on the stopwatch.
- `elapsedSeconds`: a number indicating the total elapsed time, calculated in seconds, since the stopwatch started.
- `remainingSeconds`: a number indicating the total remaining time, calculated in seconds, until the stopwatch reaches the initially set time.
- `remainingTime`: analogous to the `current` object, this object holds the remaining time in both formats:
  - `withLeadingZero`: a string indicating the remaining time with leading zeroes.
  - `withoutLeadingZero`: a string indicating the remaining time without leading zeroes.
- `pause`: a function that, when called, will pause the stopwatch.
- `play`: a function that, when called, will resume (or start) the stopwatch.
- `reset`: a function that, when called, will reset the stopwatch and the remaining time to their initial state/values.
- `togglePause`: a function that, when called, will toggle between pausing and playing the stopwatch.

Example:

```js
import { useStopwatch } from "final-countdown-js";

const ReactCounter = () => {
  const stopwatch = useStopwatch(1, 0, 10, 50);

  return (
    <div>
      <p>Counter value: {stopwatch.current.withLeadingZero}</p>
      <p>Counter value: {stopwatch.current.withoutLeadingZero}</p>
      <p>Remaining time: {stopwatch.remainingTime.withLeadingZero}</p>
      <p>Remaining time: {stopwatch.remainingTime.withoutLeadingZero}</p>
      <p>Days: {stopwatch.currentDays}</p>
      <p>Hours: {stopwatch.currentHours}</p>
      <p>Minutes: {stopwatch.currentMinutes}</p>
      <p>Seconds: {stopwatch.currentSeconds}</p>
      <p>Elapsed seconds: {stopwatch.elapsedSeconds}</p>
      <p>Remaining seconds: {stopwatch.remainingSeconds}</p>
      <p>Is the counter paused? {stopwatch.isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {stopwatch.isOver ? "Yes" : "No"}</p>
      <button onClick={stopwatch.pause}>Pause</button>
      <button onClick={stopwatch.play}>Play</button>
      <button onClick={stopwatch.reset}>Reset</button>
      <button onClick={stopwatch.togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

### useUnlimitedStopwatch

The useStopwatch hook provides unlimited stopwatch functionality.

It takes one argument:

- `startPaused` (optional, by default is false): a boolean value indicating whether the stopwatch should start in a paused state

It returns an object with the following props:

- `current`: the current value of the stopwatch in the format "hh:mm:ss"
- `isPaused`: a boolean value indicating whether the stopwatch is currently paused or not
- `currentHours`: a number indicating the current value of the hours on the stopwatch
- `currentMinutes`: a number indicating the current value of the minutes on the stopwatch
- `currentSeconds`: a number indicating the current value of the seconds on the stopwatch
- `elapsedSeconds`: a number indicating the seconds that have passed since the start of the stopwatch
- `pause`: the function to pause the stopwatch
- `play`: the function to play the stopwatch
- `reset`: the function to reset the stopwatch
- `togglePause`: the function to toggle the pause

Example:

```js
import { useUnlimitedStopwatch } from "final-countdown-js";

const ReactCounter = () => {
  const counter = useUnlimitedStopwatch();

  return (
    <div>
      <p>Counter value: {counter.current}</p>
      <p>Hours: {counter.currentHours}</p>
      <p>Minutes: {counter.currentMinutes}</p>
      <p>Seconds: {counter.currentSeconds}</p>
      <p>Elapsed seconds: {counter.elapsedSeconds}</p>
      <p>Is the counter paused? {counter.isPaused ? "Yes" : "No"}</p>
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

```js
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
