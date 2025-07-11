#!/usr/bin/env node

const { argv } = require('node:process');

function factorial(n) {
  if (isNaN(n))
    return 1;

  if (n <= 1)
    return 1;

  return n * factorial(n - 1);
}

console.log(factorial(Number(argv[2])));
