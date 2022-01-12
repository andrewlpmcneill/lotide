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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false