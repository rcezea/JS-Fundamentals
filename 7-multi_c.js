#!/usr/bin/env node

const argv = require('node:process').argv;
if (!isNaN(Number(argv[2])))
  for (let i = 0; i < argv[2]; i++)
    console.log('C is fun');
else
  console.log('Missing number of occurrences');
