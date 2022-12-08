

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 8 for [8, 5, 7]", () => {
    assert.strictEqual(head([8, 5, 7]), 8); 
  });
});