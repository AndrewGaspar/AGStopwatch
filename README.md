#AGStopwatch

AGStopwatch is built using TypeScript. It's just a basic stopwatch - you can start it,
stop it, restart it, and check how much time has elapsed.

Install using:

```
npm install agstopwatch
```

Use it in your code using:

Typescript:

```ts
import Stopwatch = require("agstopwatch");
```

JavaScript:

```js
var Stopwatch = require("agstopwatch");
```

##Usage
###Stopwatch
This is a constructor function. You MUST call it with the new keyword:

```js
var sw = new Stopwatch();
```

###Stopwatch.start()
Starts the stopwatch.

###Stopwatch.stop()
Stops the stopwatch.

###Stopwatch.restart()
Clears current start time and restarts the stopwatch.

###Stopwatch.reset()
Clears current start and end time and stops the stopwatch.

###Stopwatch.startTime
The time the stopwatch was started (in ms).

###Stopwatch.stopTime
The time the stopwatch was stopped (in ms).

###Stopwatch.elapsed
The time elapsed (in ms).

##Stopwatch.running
Returns true if the stopwatch is running.
