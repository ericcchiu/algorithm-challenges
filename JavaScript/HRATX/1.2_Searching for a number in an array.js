/*
Given a divider number and an array of numbers, return true if the array contains a non-zero 
number evenly divisible by the divider, and false otherwise.

DO NOT use array.find()

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

const findDivisible = (divider, array) => {
  for (let num of array) {
    if (num % divider === 0) return true; 
  } 
  return false; 
}

let arr1 = [8, 10]; 
// console.log(findDivisible(5, arr1)); // expect true

module.exports = findDivisible; 