const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  
  it("returns true for {a: '1', b: '2'}, {b: '2', a: '1'}", () => {
    assert.strictEqual(eqObjects({a: "1", b: "2"}, {b: "2", a: "1"}), true);
  });
  
  it("returns false for { a: '1', b: '2' },{ a: '1', b: '2', c: '3' }", () => {
    assert.strictEqual(eqObjects({ a: '1', b: '2' },{ a: '1', b: '2', c: '3' }), false);
  });
  
  it("returns true for { c: '1', d: ['2', 3] },{ d: ['2', 3], c: '1' }", () => {
    assert.strictEqual(eqObjects({ c: '1', d: ['2', 3] },{ d: ['2', 3], c: '1' }), true);
  });
  
  it("returns true for { c: '1', d: ['2', 3] },{ c: '1', d: ['2', 3, 4] }", () => {
    assert.strictEqual(eqObjects({ c: '1', d: ['2', 3] },{ c: '1', d: ['2', 3, 4] }), false);
  });
  
  it("returns true for { b: [2, 3, 4], a: { z: 1 } }, { b: [2, 3, 4], a: { z: 1 } }", () => {
    assert.strictEqual(eqObjects({ b: [2, 3, 4], a: { z: 1 } }, { b: [2, 3, 4], a: { z: 1 } }), true);
  });

});