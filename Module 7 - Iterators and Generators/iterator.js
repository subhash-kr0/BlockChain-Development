// Iterator in JavaScript

// Iterator is an object which defines a sequence and potentially a return value upon its termination.
// Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:
//
// value : the next value in the sequence
// done : boolean which is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.
//

// Example 1
const myArray = [1, 2, 3, 4, 5];

const myArrayIterator = myArray[Symbol.iterator]();

console.log(myArrayIterator.next());
console.log(myArrayIterator.next());
console.log(myArrayIterator.next());
console.log(myArrayIterator.next());
console.log(myArrayIterator.next());
console.log(myArrayIterator.next());

// Example 2
const myString = "Hello World";

const myStringIterator = myString[Symbol.iterator]();

console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());
console.log(myStringIterator.next());

// value and done
const myArray1 = [1, 2, 3, 4, 5];

const myArrayIterator1 = myArray1[Symbol.iterator]();

console.log(myArrayIterator1.next());
console.log(myArrayIterator1.next());
console.log(myArrayIterator1.next());
console.log(myArrayIterator1.next().value);
console.log(myArrayIterator1.next().done);
