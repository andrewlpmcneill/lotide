const output = [];

const flatten = array => {

  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {

      flatten(array[i]);

    } else {

      output.push(array[i]);

    }

  }

  return output;

};

console.log(flatten([1, 2, [3, [4, 'test', 'test2']], 5, [6]]));

module.exports = flatten;