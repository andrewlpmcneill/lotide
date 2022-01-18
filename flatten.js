const flatten = (array, output) => {

  if (!output) {
    output = [];
  }
  
  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {
      flatten(array[i], output);
    } else {
      output.push(array[i]);
    }
  
  }
  return output;

};

module.exports = flatten;