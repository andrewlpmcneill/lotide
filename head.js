const assertEqual = (actual, expected) => {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);

  }

};

const head = array => {

  if (array.length > 0) {

    return array[0];

  } else {

    return undefined;

  }


};