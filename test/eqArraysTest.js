const eqArrays = require("../eqArrays");

console.log((eqArrays([1, 2, 3], [1, 2, 3])));
console.log((eqArrays([1, 2, 3], [1, 1, 3])));
console.log((eqArrays([1, 2, 39], [1, 2, 39])));