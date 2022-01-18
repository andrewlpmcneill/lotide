# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@andrewlpmcneill/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: Takes a string of letters and returns the number of times each occurs, as an object
* `count only`: Takes a set of values and an object and returns the number of times each value occurs in the object, as an object
* `eqArrays`: Determines if two arrays are identical
* `eqObjects`: Determines if two objects are identical
* `findKey`: Takes an object and a callback function and returns the associated key
* `findKeyByValue`: Takes an object and a value and returns the associated key
* `flatten`: Removes nesting from an array to create a single flat array
* `head`: Takes an array and returns the first element
* `letterPositions`: Takes a string and returns an object of character index values
* `map`: Takes an array and a callback function and applies the callback to the array
* `middle`: Takes an array and returns the middle element(s) of an array
* `tail`: Takes an array and returns the array after the first element
* `takeUntil`: Takes an array and a callback function and returns the array until a match is found, exclusively
* `without`: Takes an array and a list of values to exclude, and returns a new array without the excluded values
