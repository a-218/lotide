// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


const head = function(actual) {
  if (Array.isArray(actual) === true) {
    return actual[0];
  } else if (actual.length === 0) {
    return undefined;
  } else {
    return actual;
  }
}
console.log('sssssss');
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//assertEqual(head([]), 5);
//assertEqual(head("Hello"), "Hello");

module.exports = head;
