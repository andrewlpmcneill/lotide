const assertEqual = (actual, expected) => {

  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);

  }

};

assertEqual("Lighthouse Labs", "LighthousE Labs");
assertEqual(1, 1);