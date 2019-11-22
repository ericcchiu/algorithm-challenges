/*
Write a function called “average”.

Given two numbers, “average” returns their average.

var output = average(4, 6);
console.log(output); // --> 5
*/

const average = (num1, num2) => (num1 + num2)/2; 

let output = average(4, 6);
console.log(output); // --> 5

module.exports = average; 