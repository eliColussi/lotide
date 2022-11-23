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
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const flattenedArray = [];

const flatArray = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray(array[i]);
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

console.log(flatArray([1, 2, 3, [4, 8], 7, 4]));