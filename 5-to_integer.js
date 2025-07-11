#!/usr/bin/env node

const { argv } = require('node:process');

if (argv.length === 2)
  console.log('Not a number');
else if (argv.length > 2)
  console.log( isNaN(Number(argv[2])) ? 'Not a number' : 'My number: ' + Number(argv[2]));
