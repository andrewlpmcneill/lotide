const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  
  it("returns ['I', 'm', 'b', 'p', 'b', 'n', 'a', 'a'] for ['I', 'may', 'be', 'paranoid', 'but', 'not', 'an', 'android'], word => word[0]", () => {
    const words = ["I", "may", "be", "paranoid", "but", "not", "an", "android"];
    assert.deepEqual(map(words, word => word[0]), ['I', 'm', 'b', 'p', 'b', 'n', 'a', 'a']);
  });
  

});