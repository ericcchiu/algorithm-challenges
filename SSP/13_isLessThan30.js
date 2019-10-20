/*
Write a function called “isLessThan30”.
Given a number, “isLessThan30” returns whether the given number is less than 30.

  var output = isLessThan30(9);
  console.log(output); // --> true
*/

const isLessThan30 = num => num < 30 ? true : false; 


let output = isLessThan30(9);
// console.log(output); // --> true

module.exports = isLessThan30; 