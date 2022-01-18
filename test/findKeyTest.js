const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  
  it("returns 'noma' for {'Blue Hill': { stars: 1 }, 'Akaleri': { stars: 3 }, 'noma': { stars: 2 }, 'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre': { stars: 3 }}, x => x === 2", () => {
    const data = {"Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 }};
    assert.strictEqual(findKey(data, x => x === 2), 'noma');
  });
  
  it("returns 'Akaleri' for {'Blue Hill': { stars: 1 }, 'Akaleri': { stars: 3 }, 'noma': { stars: 2 }, 'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre': { stars: 3 }}, x => x === 3", () => {
    const data = {"Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 }};
    assert.strictEqual(findKey(data, x => x === 3), 'Akaleri');
  });

  it("returns 'Blue Hill' for {'Blue Hill': { stars: 1 }, 'Akaleri': { stars: 3 }, 'noma': { stars: 2 }, 'elBulli': { stars: 3 }, 'Ora': { stars: 2 }, 'Akelarre': { stars: 3 }}, x => x === 1", () => {
    const data = {"Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 }};
    assert.strictEqual(findKey(data, x => x === 1), 'Blue Hill');
  });

});