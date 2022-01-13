const assertEqual = (actual, expected) => {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);

  }

};

const findKey = (object, callback) => {

  for (let key in object) {

    if (callback(object[key]['stars'])) {
      return key;
    }

  }

  return undefined;

};

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(data, x => x === 2), 'noma');
assertEqual(findKey(data, x => x === 3), 'Akaleri');
assertEqual(findKey(data, x => x === 1), 'Blue Hill');