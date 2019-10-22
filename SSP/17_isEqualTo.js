/*
Write a function called “isEqualTo”.
Given 2 numbers, “isEqualTo” returns whether num2 is equal to num1.

  var output = isEqualTo(11, 10);
  console.log(output); // --> false
*/

const isEqualTo = (num1, num2) => num1 === num2; 

let output = isEqualTo(11, 10);
// console.log(output); // --> false

module.exports = isEqualTo; 
