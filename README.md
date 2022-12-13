# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @elicolussi/lotide`

**Require it:**

`const _ = require('@elicolussi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(assertArraysEqual)`: checks if two arrays are equal
- `function2(assertEqual)`: checks if two values are equal
- `function3(assertObjectsEqual)`: checks if two objects are equal
- `function4(countLetters)`: returns count of each letter in string
- `function5(countOnly)`: takes input and returns a count of chosen items
- `function6(eqArrays)`: compares two arrays returns bool
- `function7(eqObjects)`: compares two objects returns bool
- `function8(findKey)`: searches for a key chosen by the user that returns truthy
- `function9(findKeyByValue)`: searches for key in object that matches given value
- `function10(flatten)`: flattens array with nested arrays into a single array
- `function11(head)`: retrieves the first element of an array
- `function12(index)`: a list of all the functions stored in an object
- `function13(letterPosition)`: returns indices of letters position in a given string
- `function14(map)`: creates a new array with the results of calling a provided function on every element in the calling array
- `function15(middle)`: returns middle element(s) of an array
- `function16(tail)`: returns every element of array except the head (first element)
- `function17(takeUntil)`: returns a slice of an array with elements taken from the beginning
- `function18(without)`: removes elements from an array
