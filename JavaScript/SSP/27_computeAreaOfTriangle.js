/*
Write a function called “computeAreaOfATriangle”.

Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.

  let output = computeAreaOfATriangle(4, 6);
  console.log(output); // --> 12
*/

const computeAreaOfATriangle = (base, height) => 0.5 * base * height;

let output = computeAreaOfATriangle(4, 6);
// console.log(output); // --> 12

module.exports = computeAreaOfATriangle;