const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  
  it("returns true for [1, 2, 3, 4], [1, 2, 3, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
  });
  
  it("returns false for [2, 2, 3, 4], [1, 2, 3, 4]", () => {
    assert.deepEqual(eqArrays([2, 2, 3, 4], [1, 2, 3, 4]), false);
  });
  
  it("returns true for [], []", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  
});