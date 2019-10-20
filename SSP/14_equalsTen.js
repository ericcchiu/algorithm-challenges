/*
Write a function called “equalsTen”.
Given a number, “equalsTen” returns whether or not the given number is 10.

  var output = equalsTen(9);
  console.log(output); // --> false
*/

const equalsTen = num => num === 10 ? true : false; 

let output = equalsTen(9);
// console.log(output); // --> false

module.exports = equalsTen; 