// index.js
let head   = require('./head');
let tail   = require('./tail');
let middle = require('./middle');
let assertEqual = require('./assertEqual');
let assertArraysEqual =  require('./assertArraysEqual');
let { assert } = require('console');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual 
};



