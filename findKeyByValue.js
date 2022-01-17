const assertEqual = (actual, expected) => {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);

  }

};

const findKeyByValue = (object, value) => {

  for (let key in object) {

    if (object[key] === value) {

      return key;

    }

  }

  return undefined;

};

module.exports = findKeyByValue;