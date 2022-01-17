const middle = array => {

  if (!array.length) {

    return [];

  } else if (array.length % 2 !== 0) {

    const middleIndex = (array.length - 1) / 2;
    return array.slice(middleIndex, middleIndex + 1);

  } else if (array.length % 2 === 0) {

    const middleLower = (Math.floor((array.length - 1) / 2));
    return array.slice(middleLower, middleLower + 2);

  }

};

module.exports = middle;