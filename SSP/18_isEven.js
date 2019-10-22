/*
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

  var output = isEven(11);
  console.log(output); // --> false
*/

const isEven = num => num % 2 === 0; 

let output = isEven(11);
// console.log(output); // --> false


module.exports = isEven;