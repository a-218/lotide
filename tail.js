// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
  } else {
    return (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
};

let newArray = [];
const tail = function(actual) {
  if (Array.isArray(actual) === true) {
    for (let x = 1; x < actual.length; x++) {
      newArray.push(actual[x]);
    }
    return console.log(newArray);
  } else if (actual.length === 1 || actual.length === 0) {
    return console.log([]);
  }
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length,3);
