// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
  } else {
    return (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const head = function(actual) {
  if (Array.isArray(actual) === true) {
    return actual[0];
  } else if (actual.length === 0) {
    return undefined;
  } else {
    return actual;
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([]), 5);
assertEqual(head("Hello"), "Hello");