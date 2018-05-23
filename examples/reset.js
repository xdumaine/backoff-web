#!/usr/bin/env node

const backoff = require('../index');

const backoffStrategy = backoff.exponential();

backoffStrategy.on('ready', function (number, delay) {
  console.log('Backoff done: ' + number + ' ' + delay + 'ms');

  if (number < 15) {
    backoffStrategy.backoff();
  }
});

backoffStrategy.backoff();

setInterval(function () {
  backoffStrategy.reset();
  backoffStrategy.backoff();
}, 5000);
