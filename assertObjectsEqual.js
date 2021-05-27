const eqArrays = function (firstArray, secondArray) {
  for (let x = 0; x < firstArray.length; x++) {
    if (firstArray[x] === secondArray[x]) {
      continue;
    } else {

      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertObjectsEqual  = function (actual, expected) {
  const inspect = require('util').inspect; 
  let ob1Keys = Object.keys(actual);  ///key array of the object

  let ob2Keys = Object.keys(expected);

  if (ob1Keys.length !== ob2Keys.length) {
    return (console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  }

  for (const element of ob1Keys) {

    if (Array.isArray(actual[element]) === true) {
      if (actual[element].length !== expected[element].length) {
        return (console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
      } else {
        let result = eqArrays(actual[element], expected[element]);
        if (result === false) {
          return (console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
        }
      }
    } else if (actual[element] !== expected[element]) {
      return (console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
    }
  }
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));

};


const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab,ab);
assertObjectsEqual(ab,abc);
assertObjectsEqual(cd2,dc);