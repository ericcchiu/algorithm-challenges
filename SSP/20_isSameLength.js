/*
Write a function called “isSameLength”.

Given two words, “isSameLength” returns whether the given words have the same length.

  var output = isSameLength('words', 'super');
  console.log(output); // --> true
*/

const isSameLength = (word1, word2) => word1.length === word2.length;

let output = isSameLength('words', 'super');
// console.log(output); // --> true

module.exports = isSameLength; 