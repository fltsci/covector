#!/usr/bin/env node
const { main } = require("effection");
const { cli } = require("@fltsci/covector");

main(function* start() {
  yield cli(process.argv.slice(2));
});
