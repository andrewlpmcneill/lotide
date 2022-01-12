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

const middle = array => {

  if (!array.length) {

    return [];

  } else if (array.length % 2 !== 0) {

    const middleIndex = (array.length - 1) / 2;
    return array.slice(middleIndex, middleIndex + 1);

  } else if (array.length % 2 === 0) {

    const middleLower = (Math.floor((array.length - 1) / 2));
    return array.slice(middleLower, middleLower + 2);

  }

};

// TEST CODE
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));