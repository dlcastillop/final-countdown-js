# <img src="https://github.com/dlcastillop/dlcastillop/blob/main/logos/final-countdown-js-logo.png" width="40" height="40" /> Final Countdown JS

Final Countdown JS is a react hook library to handle all kinds of timers.

## Featured

<a href="https://www.producthunt.com/posts/final-countdown-js?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-final&#0045;countdown&#0045;js" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=410431&theme=neutral" alt="Final&#0032;Countdown&#0032;JS - A&#0032;react&#0032;hook&#0032;library&#0032;to&#0032;handle&#0032;all&#0032;kinds&#0032;of&#0032;timers | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

[Featured on DevHunt with 19 upvotes ending up in the 6th position of the week.](https://devhunt.org/tool/final-countdown-js)

## Installation

You can use npm, yarn or pnpm to install Final Countdown JS.

```bash
npm install final-countdown-js
```

```bash
yarn add final-countdown-js
```

```bash
pnpm install final-countdown-js
```

## Hooks

### useCountDown

The useCountDown hook provides a simple countdown timer functionality.

It takes three arguments:

- `min` (number): the initial value of the counter.
- `max`(number): the final value of the counter. It has to be greater than `min`.
- `options`(optional object): the options for the counter.
  - `startPaused` (optional boolean): a boolean flag that determines whether the counter should start in a paused state. Defaults to false.
  - `onFinish` (optional function): a function that will be called when the counter reaches the final value.

It returns an object with the following props:

- `current`: an object holding the current time of the counter in both leading zero and non-leading zero formats. This object has two properties:
  - `withLeadingZero`: a string indicating the current time of the counter with leading zeroes where necessary.
  - `withoutLeadingZero`: a string indicating the current time of the counter without leading zeros.
- `isPaused`: a boolean value indicating if the counter is currently paused.
- `isOver`: a boolean value indicating if the counter has finished running.
- `pause`: a function that, when called, will pause the counter.
- `play`: a function that, when called, will resume (or start) the counter.
- `reset`: a function that, when called, will reset the counter.
- `togglePause`: a function that, when called, will toggle between pausing and playing the counter.

Example:

```tsx
import { useCountDown } from "final-countdown-js";

const ReactCounter = () => {
  const { current, isPaused, isOver, pause, play, reset, togglePause } =
    useCountDown(0, 10, {
      startPaused: false,
      onFinish: () => console.log("Counter ended"),
    });

  return (
    <div>
      <p>Counter value: {current.withLeadingZero}</p>
      <p>Counter value: {current.withoutLeadingZero}</p>
      <p>Is the counter paused? {isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {isOver ? "Yes" : "No"}</p>
      <button onClick={pause}>Pause</button>
      <button onClick={play}>Play</button>
      <button onClick={reset}>Reset</button>
      <button onClick={togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

### useCountUp

The useCountUp hook provides a simple countup timer functionality.

It takes three arguments:

- `min` (number): the initial value of the counter.
- `max`(number): the final value of the counter. It has to be greater than `min`.
- `options`(optional object): the options for the counter.
  - `startPaused` (optional boolean): a boolean flag that determines whether the counter should start in a paused state. Defaults to false.
  - `onFinish` (optional function): a function that will be called when the counter reaches the final value.

It returns an object with the following props:

- `current`: an object holding the current time of the counter in both leading zero and non-leading zero formats. This object has two properties:
  - `withLeadingZero`: a string indicating the current time of the counter with leading zeroes where necessary.
  - `withoutLeadingZero`: a string indicating the current time of the counter without leading zeros.
- `isPaused`: a boolean value indicating if the counter is currently paused.
- `isOver`: a boolean value indicating if the counter has finished running.
- `pause`: a function that, when called, will pause the counter.
- `play`: a function that, when called, will resume (or start) the counter.
- `reset`: a function that, when called, will reset the counter.
- `togglePause`: a function that, when called, will toggle between pausing and playing the counter.

Example:

```tsx
import { useCountUp } from "final-countdown-js";

const ReactCounter = () => {
  const { current, isPaused, isOver, pause, play, reset, togglePause } =
    useCountUp(0, 10, {
      startPaused: false,
      onFinish: () => console.log("Counter ended"),
    });

  return (
    <div>
      <p>Counter value: {current.withLeadingZero}</p>
      <p>Counter value: {current.withoutLeadingZero}</p>
      <p>Is the counter paused? {isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {isOver ? "Yes" : "No"}</p>
      <button onClick={pause}>Pause</button>
      <button onClick={play}>Play</button>
      <button onClick={reset}>Reset</button>
      <button onClick={togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;
```

### useStopwatch

The useStopwatch hook provides stopwatch functionality with a limit.

It takes six arguments:

- `days` (number): the final value of the days. It has to be equal to or greater than 0.
- `hours` (number): the final value of the hours. The value must be between 0 (inclusive) and 24 (exclusive).
- `minutes` (number): the final value of the minutes. The value must be between 0 (inclusive) and 60 (exclusive).
- `seconds` (number): the final value of the seconds. The value must be between 0 (inclusive) and 60 (exclusive).
- `startPaused` (optional boolean): a boolean flag that determines whether the stopwatch should start in a paused state. Defaults to false.
- `separator` (optional string): a string that specifies the separator to be used between days, hours, minutes, and seconds when the time is represented as a string. By default, colon (:) is used as a separator.
- `onFinish` (optional function): a function that will be called when the stopwatch reaches the final value.

It returns an object with the following props:

- `current`: an object holding the current time of the stopwatch in both leading zero and non-leading zero formats. This object has two properties:
  - `withLeadingZero`: a string indicating the current time of the stopwatch with leading zeroes where necessary.
  - `withoutLeadingZero`: a string indicating the current time of the stopwatch without leading zeros.
- `isPaused`: a boolean value indicating if the stopwatch is currently paused.
- `isOver`: a boolean value indicating if the stopwatch has finished running.
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
- `reset`: a function that, when called, will reset the stopwatch.
- `togglePause`: a function that, when called, will toggle between pausing and playing the stopwatch.

Example:

```tsx
import { useStopwatch } from "final-countdown-js";

const ReactCounter = () => {
  const {
    current,
    remainingTime,
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
  } = useStopwatch(1, 0, 10, 50);

  return (
    <div>
      <p>Stopwatch value: {current.withLeadingZero}</p>
      <p>Stopwatch value: {current.withoutLeadingZero}</p>
      <p>Remaining time: {remainingTime.withLeadingZero}</p>
      <p>Remaining time: {remainingTime.withoutLeadingZero}</p>
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

export default ReactCounter;
```

### useTimer

The useTimer hook provides timer functionality.

It takes six arguments:

- `days` (number): the initial value of the days. It has to be equal to or greater than 0.
- `hours` (number): the initial value of the hours. The value must be between 0 (inclusive) and 24 (exclusive).
- `minutes` (number): the initial value of the minutes. The value must be between 0 (inclusive) and 60 (exclusive).
- `seconds` (number): the initial value of the seconds. The value must be between 0 (inclusive) and 60 (exclusive).
- `startPaused` (optional boolean): a boolean flag that determines whether the timer should start in a paused state. Defaults to false.
- `separator` (optional string): a string that specifies the separator to be used between days, hours, minutes, and seconds when the time is represented as a string. By default, colon (:) is used as a separator.
- `onFinish` (optional function): a function that will be called when the timer reaches the final value.

It returns an object with the following props:

- `current`: an object holding the current time of the timer in both leading zero and non-leading zero formats. This object has two properties:
  - `withLeadingZero`: a string indicating the current time of the timer with leading zeroes where necessary.
  - `withoutLeadingZero`: a string indicating the current time of the timer without leading zeros.
- `isPaused`: a boolean value indicating if the timer is currently paused.
- `isOver`: a boolean value indicating if the timer has finished running.
- `currentDays`: a number indicating the current value of the days on the timer.
- `currentHours`: a number indicating the current value of the hours on the timer.
- `currentMinutes`: a number indicating the current value of the minutes on the timer.
- `currentSeconds`: a number indicating the current value of the seconds on the timer.
- `elapsedSeconds`: a number indicating the total elapsed time, calculated in seconds, since the timer started.
- `remainingSeconds`: a number indicating the total remaining time, calculated in seconds, until the timer reaches the initially set time.
- `elapsedTime`: analogous to the `current` object, this object holds the elapsed time in both formats:
  - `withLeadingZero`: a string indicating the elapsed time with leading zeroes.
  - `withoutLeadingZero`: a string indicating the elapsed time without leading zeroes.
- `pause`: a function that, when called, will pause the timer.
- `play`: a function that, when called, will resume (or start) the timer.
- `reset`: a function that, when called, will reset the timer.
- `togglePause`: a function that, when called, will toggle between pausing and playing the timer.

Example:

```tsx
import { useTimer } from "final-countdown-js";

const ReactCounter = () => {
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
  } = useTimer(0, 10, 50);

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

export default ReactCounter;
```

## Contributions

If you're interested in contributing to Final Countdown JS, please read our [contributing docs](https://github.com/dlcastillop/final-countdown-js/blob/main/CONTRIBUTING.md) before submitting a pull request.

## Support

Don't forget to leave a star and [a review on Product Hunt!](https://www.producthunt.com/products/final-countdown-js/reviews/new)
