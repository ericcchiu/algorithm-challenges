/*
Write a function called “isGreaterThan”.
Given 2 numbers, “isGreaterThan” returns whether num2 is greater than num1.

  var output = isGreaterThan(11, 10);
  console.log(output); // --> false
*/

const isGreaterThan = (num1, num2) => num2 > num1; 

let output = isGreaterThan(11, 10);
// console.log(output); // --> false

module.exports = isGreaterThan; 