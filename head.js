 const assertEqual = require('./assertEqual'); //{
  
//   if (actual === expected) {
//     console.log(`Assertion passed: 🥳️🥳️ ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertion Failed: 🤧🤧 ${actual} !== ${expected}`);
//   }

// };

//function head(array) {
  //return (array && array.length) ? array[0] : undefined;
//};

function head(array) {
  return array[0];
};



module.exports = head;