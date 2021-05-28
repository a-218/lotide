const findKey  = function (array, callback) {
  // ...
  let collect = [];
  for (const element in array) {

    if (callback(array[element])) {
      collect = element;
      break;
    } else {
      collect = undefined;
    }
  }
  return collect;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
  } else {
    return (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
};

// TEST CODE
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 10), undefined);
