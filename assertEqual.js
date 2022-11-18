const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion passed: 🥳️🥳️ [actual] === [expected]");
  } else {
    console.log("Assertion Failed: 🤧🤧 [actual] !== [expected]");
  }
  
};
console.log(assertEqual(1, 2));
console.log(assertEqual("yes", "maybe"));
console.log(assertEqual("yes", "yes"));
console.log(assertEqual(1, 1));
