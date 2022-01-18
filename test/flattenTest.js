const assert = require('chai').assert;
const flatten = require('../flatten.js');

describe("#flatten", () => {
  
  it("returns [1] for [[[1]]]", () => {
    assert.deepEqual(flatten([[[1]]]), [1]);
  });
  
  it("returns [1, 2, 3] for [1, [2, 3]]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
  
  it("returns [1, 2, 3, 4, 'test', 'test2', 5, 6] for [1, 2, [3, [4, 'test', 'test2']], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, [4, 'test', 'test2']], 5, [6]]), [1, 2, 3, 4, 'test', 'test2', 5, 6]);
  });
  
});