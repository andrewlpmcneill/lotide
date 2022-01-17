const countLetters = string => {

  let counts = {};
  for (let i = 0; i < string.length; i++) {

    if (counts[string[i]] && string[i] !== ' ') {

      counts[string[i]]++;

    } else if (string[i] !== ' ') {

      counts[string[i]] = 1;

    }

  }

  return counts;

};

module.exports = countLetters;