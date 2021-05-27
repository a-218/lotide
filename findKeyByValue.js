// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
  } else {
    return (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
};

const findKeyByValue = function(tvShows, val) {
  let objectKeys = Object.keys(tvShows);
  let objectValues = Object.values(tvShows);
  for (let x = 0; x < objectValues.length; x++) {
    if (objectValues[x] === val) {
      return objectKeys[x];
    }
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);