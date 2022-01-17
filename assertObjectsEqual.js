const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) {

    return false;

  }

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {

      return false;

    }

  }

  return true;

};

const eqKeysLength = (object1, object2) => {
  
  const keyLength1 = (Object.keys(object1)).length;
  const keyLength2 = (Object.keys(object2)).length;

  if (keyLength1 === keyLength2) {

    return true;

  } else {

    return false;

  }

};

const eqObjects = (object1, object2) => {

  if (!eqKeysLength(object1, object2)) {

    return false;

  }

  for (const key in object1) {

    if (!(Array.isArray(object1[key]))) {

      if (!(object1[key] === object2[key])) {
  
        return false;
  
      }

    } else {

      if (!(eqArrays(object1[key], object2[key]))) {

        return false;

      }

    }
    

  }

  return true;

};

const assertObjectsEqual = (object1, object2) => {

  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {

    console.log(`⛔️⛔️⛔️ Assertion Failed: ${inspect(object1)} !== [${inspect(object2)}]`);

  } else {

    console.log(`✅✅✅ Assertion Passed: [${inspect(object1)}] === [${inspect(object2)}]`);

  }

};

const object1 = {

  a: 25,
  b: "test",
  c: null,
  d: [1, 5, "test2"],

};

const object2 = {

  b: "test",
  c: null,
  a: 25,
  d: [1, 5, "test2"],

};

assertObjectsEqual(object1, object2);

module.exports = assertObjectsEqual;