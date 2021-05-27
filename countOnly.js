// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
  } else {
    return (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
 
  let newObject = {};
  for (let key in itemsToCount) {
    if (itemsToCount[key] === true) {
      newObject[key] = 0;
    } else {
      newObject[key] = undefined;
    }
  }

  for (let key in newObject) {
    let count = 0;
    if (newObject[key] === 0) {
      for (let x  = 0; x < allItems.length; x++) {
        if (allItems[x] === key) {
          count++;
          console.log(key);
          console.log(count);
        }
      }
      newObject[key] = count;
    }
    if (newObject[key] === 0) {
      newObject[key] = undefined;
    }
  }
  console.log(newObject);
  //console.log(itemsToCount.hasOwnProperty(allItems[5]));
  return newObject;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);