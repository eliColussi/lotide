const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: 🥳️🥳️ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: 🤧🤧 ${actual} !== ${expected}`);
  }

};

function tail(array) {
  let newArray = array.slice([1]);
  return newArray;
};



module.exports = tail;