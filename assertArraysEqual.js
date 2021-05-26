const assertArraysEqual = function(firstArray, secondArray) {
  for (let x = 0; x < firstArray.length; x++) {
    if (firstArray[x] === secondArray[x]) {
      continue;
    } else {
      return (console.log('🛑🛑🛑 Assertion Failed: ',  firstArray, '!==', secondArray,));
    }
  }
  return (console.log('✅✅✅ Assertion Passed: ',  firstArray, '===', secondArray,));
};




assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

