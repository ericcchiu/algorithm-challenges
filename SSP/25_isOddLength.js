/*
Write a function called “isOddLength”.

Given a word, “isOddLength” returns whether the length of the given word is odd.

  var output = isOddLength('special');
  console.log(output); // --> true
*/

const isOddLength = word => word.length % 2 !== 0; 

let output = isOddLength('special');
// console.log(output); // --> true

module.exports =isOddLength; 