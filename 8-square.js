#!/usr/bin/env node

const argv = require('node:process').argv;
if (!isNaN(Number(argv[2])))
  for (let i = 0; i < argv[2]; i++)
    console.log('X'.repeat(Number(argv[2])));
else
  console.log('Missing size');
