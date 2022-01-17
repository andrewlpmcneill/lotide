const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

assertArraysEqual(tail([1,2,3,4,"test", 7]), [2,3,4,"test", 7]);
assertArraysEqual(tail([0,1,2,3,4,"test", 7]), [1,2,3,4,"test", 7]);