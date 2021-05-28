const assertArraysEqual = function (firstArray, secondArray) {
  for (let x = 0; x < firstArray.length; x++) {
    if (firstArray[x] === secondArray[x]) {
      continue;
    } else {
      return (console.log('🛑🛑🛑 Assertion Failed: ', firstArray, '!==', secondArray,));
    }
  }
  return (console.log('✅✅✅ Assertion Passed: ', firstArray, '===', secondArray,));
};


const takeUntil = function (array, callback) {
  // ...
  let collect = []
  for (const element of array) {
    if (callback(element) === false) {
      collect.push(element);
    } else {
      break;
    }
  }
  return collect;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]