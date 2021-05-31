const assertEqual = require('./assertEqual');

const eqArrays = function(firstArray, secondArray) {
  for (let x = 0; x < firstArray.length; x++) {

    if (firstArray[x] === secondArray[x]) {
      continue;
    } else {

      return false;
    }
  }
  return true;
};



// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

module.exports = eqArrays;