
const eqObjects = require('./eqObjects');

const eqKeysLength = (object1, object2) => {
  
  const keyLength1 = (Object.keys(object1)).length;
  const keyLength2 = (Object.keys(object2)).length;

  if (keyLength1 === keyLength2) {

    return true;

  } else {

    return false;

  }

};

const assertObjectsEqual = (object1, object2) => {

  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {

    console.log(`⛔️⛔️⛔️ Assertion Failed: ${inspect(object1)} !== [${inspect(object2)}]`);

  } else {
 
    console.log(`✅✅✅ Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);

  }

};

// const object1 = {

//   a: 25,
//   b: "test",
//   c: null,
//   d: [1, 5, "test2"],

// };

// const object2 = {

//   b: "test",
//   c: null,
//   a: 25,
//   d: [1, 5, "test2"],

// };

// assertObjectsEqual(object1, object2);

module.exports = assertObjectsEqual;