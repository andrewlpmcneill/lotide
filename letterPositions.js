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

const letterPositions = sentence => {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]].push(i);
      continue;
    }
    results[sentence[i]] = [i];
  
  }

  return results;

};

assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello test').e, [1, 7]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);