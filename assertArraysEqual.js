// const eqArrays = function(firstArray, secondArray) {
//   let a = false;
//   let b = true;
//   for (let x = 0; x < firstArray.length; x++) {
    
//     if (firstArray[x] === secondArray[x]) {
//       continue;
//     } else {
//       return a;
//     }
//   }
//   return b;
// };

const eqArrays = require('./eqArrays');


const assertArraysEqual = function(a, b) {
  if (a !== b){
      return (console.log('🛑🛑🛑 Assertion Failed: ',  a, '!==', b,));
    } else {
      return (console.log('✅✅✅ Assertion Passed: ',  a, '===',b,));
    }
};




//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false

//  assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
//  assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false

module.exports = assertArraysEqual;

