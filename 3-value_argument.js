#!/usr/bin/env node

const { argv } = require('node:process');

console.log(argv[2] ?? 'No argument');
