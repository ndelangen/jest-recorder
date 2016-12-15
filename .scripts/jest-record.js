#!/usr/bin/env node

'use strict';

const fs = require('fs');
const fork = require('child_process').fork;
const out = fs.openSync('./.log/jest-record.log', 'a');
const err = fs.openSync('./.log/jest-record.log', 'a');

console.log('jest-recorder: ON');

const child = fork('./.scripts/utils/jest-runner', ['-c', '.jestrc', '--watch'], {
 detached: false,
 stdio: [ 'ignore', out, err, 'ipc' ]
});

child.on('message', (m) => {
  console.log(m);
});
