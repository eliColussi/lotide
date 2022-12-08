const assertEqual = require("../assertEqual");


console.log(assertEqual(1, 2));
console.log(assertEqual("yes", "maybe"));
console.log(assertEqual("yes", "yes"));
console.log(assertEqual(1, 1));