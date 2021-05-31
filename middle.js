const eqArrays = require('./eqArrays');
const assertArraysEqual = require("./assertArraysEqual");



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


// middle([1]);// => []
// middle([1, 2]); //=> []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]);// => [2, 3]
// middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]); // => [3, 4]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), [7,6]), false);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), [5,6]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// const mary = { name: "Mary Sue" };
// mary["name"] = "Mary Jane";
// mary["age"]  = 22;
// console.log(mary)

module.exports=middle;