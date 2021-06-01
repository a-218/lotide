// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');


const tail = function(actual) {
  let newArray = [];
  if (Array.isArray(actual) === true) {
    for (let x = 1; x < actual.length; x++) {
      newArray.push(actual[x]);
    }
    return newArray;
  } else if (actual.length === 1 || actual.length === 0) {
    return [];
  }
};


//console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
module.exports = tail;
