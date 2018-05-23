#!/usr/bin/env node

const backoff = require('../index');

// This example demonstrates how the backoff strategy can be used directly
// to drive a backoff operation using direct calls to setTimeout(fn, delay).

const strategy = new backoff.ExponentialStrategy({
  randomisationFactor: 0.5,
  initialDelay: 10,
  maxDelay: 1000,
  factor: 3
});

let attempt = 1;

function doSomething () {
  if (attempt > 10) {
    console.log('Success!');
    strategy.reset();
    return;
  }

  console.log('Attempt #' + attempt);
  attempt++;
  setTimeout(doSomething, strategy.next());
}

doSomething();
