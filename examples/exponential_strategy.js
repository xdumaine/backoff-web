#!/usr/bin/env node

const backoff = require('../index');

const strategy = new backoff.ExponentialStrategy();

for (let i = 0; i < 10; i++) {
  console.log(strategy.next());
}
