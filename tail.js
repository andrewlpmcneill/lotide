const tail = array => {

  if (array.length > 1) {

    const newArray = array.slice(1);
    return newArray;

  }

  return [];


};

module.exports = tail;