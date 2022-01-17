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

const map = (array, callback) => {

  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;

};

const words = ["I", "may", "be", "paranoid", "but", "not", "an", "android"];

// const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ['I', 'm', 'b', 'p', 'b', 'n', 'a', 'a']);

module.exports = map;