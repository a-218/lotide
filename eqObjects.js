// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
  } else {
    return (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
};

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
const eqObjects = function (object1, object2) {

  let ob1Keys = Object.keys(object1);  ///key array of the object

  let ob2Keys = Object.keys(object2);

  if (ob1Keys.length !== ob2Keys.length) {
    return false;
  }

  for (const element of ob1Keys) {

    if (Array.isArray(object1[element]) === true) {
      if (object1[element].length !== object2[element].length) {
        return false;
      } else {

        console.log(object1[element]);
        let result = eqArrays(object1[element], object2[element]);

        if (result === false) {
          return false;
        }
      }
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;

};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

assertEqual(eqObjects(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, cd2), false);
