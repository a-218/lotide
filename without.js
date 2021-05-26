const assertArraysEqual = function(firstArray, secondArray) {
  for (let x = 0; x < firstArray.length; x++) {
    if (firstArray[x] === secondArray[x]) {
      continue;
    } else {
      return (console.log('🛑🛑🛑 Assertion Failed: ', firstArray, '!==', secondArray,));
    }
  }
  return (console.log('✅✅✅ Assertion Passed: ', firstArray, '===', secondArray,));
};

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

const without = function(sourceArray, removed) {
  let indexValue = [];
  let newArray = [];
  for (let x = 0; x < removed.length; x++) {
    indexValue[x] = sourceArray.indexOf(removed[x]);
  }
  //console.log(indexValue);

  for (let x = 0; x < sourceArray.length; x++) {
    if (indexValue.includes(x)) {
      continue;
    } else {
      newArray.push(sourceArray[x]);
    }
  }
  console.log(newArray);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);// no need to capture return value for this test case
without([1, 2, 3], [1]);// => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]
without(["1", "2", "3"], [1, "2", "3"]);// => ["1"]
// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);