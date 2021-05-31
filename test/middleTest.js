const middle  = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), [7,6]), false);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), [5,6]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);