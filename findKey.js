const findKey = (object, callback) => {

  for (let key in object) {

    if (callback(object[key]['stars'])) {
      return key;
    }

  }

  return undefined;

};

module.exports = findKey;