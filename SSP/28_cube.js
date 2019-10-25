/*
Write a function called “cube”.

Given a number, “cube” returns the cube of that number.

  let output = cube(3);
  console.log(output); // --> 27
*/

const cube = num => Math.pow(num,3); 

  let output = cube(3);
  // console.log(output); // --> 27

module.exports = cube; 
