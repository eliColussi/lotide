
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
    };


const letterPositions = function(sentence) {
  const results = {};
  for (idx in sentence) {
    if (sentence[idx] !== " ") {
      if (results[sentence[idx]]) {
        results[sentence[idx]].push(idx);
      
    } else {
      results[sentence[idx]] = [idx];
    }
  }
}
  return results;
};

