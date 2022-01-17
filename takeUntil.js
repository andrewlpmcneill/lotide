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

const assertArraysEqual = (array1, array2) => {

  if (eqArrays(array1, array2)) {
    
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
    
  } else {

    
    console.log(`⛔️⛔️⛔️ Assertion Failed: [${array1}] !== [${array2}]`);

  }

};

const takeUntil = (array, callback) => {

  // take in an array, callback works on each element
  const output = [];

  for (const element of array) {
    if (callback(element)) {
      return output;
    }
    output.push(element);
  }

};

const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data1, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;