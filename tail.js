const assertEqual = (actual, expected) => {
  
  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else if (typeof actual === 'object' && actual.length === expected.length) {

    let arraySwitch = 1;

    for (let i = 0; i < actual.length; i++) {

      if (actual[i] !== expected[i]) {

        arraySwitch = 0;
        break;

      }

    }

    if (arraySwitch === 1) {
     
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    
    } else {

      console.log(`⛔️⛔️⛔️ Assertion Failed: [${actual}] !== [${expected}]`);

    }

  } else {

    console.log(`⛔️⛔️⛔️ Assertion Failed: ${actual} !== ${expected}`);

  }

};


const tail = array => {

  if (array.length > 1) {

    const newArray = array.slice(1);
    return newArray;

  } else {

    return [];

  }

};

assertEqual(tail([0,1,2,3,4,"test", 7]), [1,2,3,4,"test", 7]);