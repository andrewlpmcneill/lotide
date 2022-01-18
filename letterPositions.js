const letterPositions = sentence => {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]] && sentence[i] !== ' ') {
      results[sentence[i]].push(i);
      continue;
    }
    results[sentence[i]] = [i];
  
  }

  return results;

};

module.exports = letterPositions;