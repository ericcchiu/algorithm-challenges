/*
isLessThan
Write a function called “isLessThan”.
Given 2 numbers, “isLessThan” returns whether num2 is less than num1.

  var output = isLessThan(9, 4);
  console.log(output); // --> true
*/

const isLessThan = (num1, num2) => num2 < num1 ? true : false; 

let output = isLessThan(9, 4);
console.log(output); // --> true

module.exports = isLessThan;