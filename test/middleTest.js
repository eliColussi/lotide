const assert = require('chai').assert;
const middle = require("../middle");


describe("#middle", () => {
  it("should return [5, 3] for [2, 5, 3, 41]", () => {
    assert.deepEqual(middle([2, 5, 3, 41]), [5, 3]);
  });
  it("should return [21] for [5, 6, 21, 42, 5]", () => {
    assert.deepEqual(middle([5, 6, 21, 42, 5]), [21]);
  });
});