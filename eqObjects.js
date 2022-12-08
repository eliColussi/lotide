const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: 🥳️🥳️ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: 🤧🤧 ${actual} !== ${expected}`);
  }
  
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
  } 
}
return true;
};


const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key in obj1) {
    if (Array.isArray(key[obj1])) {
      if (eqArrays(obj1[key], obj2[key]) === false) {
        return false;
      }
    } 
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

module.exports = eqObjects;