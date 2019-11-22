/*
Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

  var output = isOdd(9);
  console.log(output); // --> true
*/

const isOdd = num => num % 2 != 0; 


let output = isOdd(9);
// console.log(output); // --> true

module.exports = isOdd; 