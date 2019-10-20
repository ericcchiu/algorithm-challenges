/*
Write a function called “isGreaterThan10”.
Given a number, “isGreaterThan10” returns whether the given number is greater than 10.

  var output = isGreaterThan10(11);
  console.log(output); // --> true
*/

const isGreaterThan10 = num => num > 10 ? true : false; 


let output = isGreaterThan10(11);
console.log(output); // --> true

module.exports = isGreaterThan10; 