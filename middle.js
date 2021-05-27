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


const middle = function(array) {
  let arrayLength = array.length;
  if (arrayLength <= 2) {
    return [];

  } else if (arrayLength % 2 !== 0) {
    let startIndex = Math.floor(arrayLength / 2);
    let endIndex = startIndex + 1;
   
    return (array.slice(startIndex, endIndex));
  } else {
    let startIndex = arrayLength / 2 - 1;
    let endIndex = arrayLength / 2 + 1;
 
    return (array.slice(startIndex, endIndex));
  }
};


middle([1]);// => []
middle([1, 2]); //=> []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]);// => [2, 3]
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), [5,6]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);