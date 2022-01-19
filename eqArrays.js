const eqArrays = (array1, array2) => {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
    
  }

  return true;

};

module.exports = eqArrays;