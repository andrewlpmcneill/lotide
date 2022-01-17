const assertEqual = require('./assertEqual');

const head = array => {

  if (array.length > 0) {
    return array[0];
  }
  
  return undefined;

};

module.exports = head;