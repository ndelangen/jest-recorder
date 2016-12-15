# jest-recorder

A POC for a way to run jest in watch-mode within a system and record jest output.

This demo logs jest terminal to a file `/.logs/jest-record.log`.

The json jest generates (the test results) are output into the terminal.

## Install

```
yarn install
```
```
npm install
```

## Running

Running a single run normal jest:
```
npm run test
```

Running jest in watch-mode
```
npm run test:watch
```

Running jest in watch-mode and recording the results
```
npm run test:record
```

