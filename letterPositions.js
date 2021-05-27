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



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let x = 0; x < sentence.length; x++) {
    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]] = [x];
    }
  }
  console.log(results);
  return results;
};


letterPositions("hhello");
letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("hello").e, [1]);