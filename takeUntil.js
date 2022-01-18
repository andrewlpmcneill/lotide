const takeUntil = (array, callback) => {

  const output = [];

  for (const element of array) {
    if (callback(element)) {
      return output;
    }
    output.push(element);
  }

};

module.exports = takeUntil;