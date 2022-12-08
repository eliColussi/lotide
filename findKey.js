const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: 🥳️🥳️ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: 🤧🤧 ${actual} !== ${expected}`);
  }
};

const findKeys = (object, callBack) => {
  for (const key in object) {
    if (callBack(object[key]) === true) {
      return key;
    }
  }
  return undefined;
};

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
let test1 = findKeys(object, x => x.stars === 3);
let expected1 = "Akaleri";
assertEqual(test1, expected1);

let test2 = findKeys(object, x => x.stars === 1000);
let expected2 = undefined;
assertEqual(test2, expected2);

let test3 = findKeys(object, x => x.stars < 2);
let expected3 = "Ora";
assertEqual(test3, expected3);

module.exports = findKeys;