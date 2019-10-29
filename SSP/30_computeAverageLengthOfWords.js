/*
Write a function called “computeAverageLengthOfWords”.

Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

  let output = computeAverageLengthOfWords('code', 'programs');
  console.log(output); // --> 6
*/

const computeAverageLengthOfWords = (word1, word2) => (word1.length + word2.length)/2; 

let output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6

module.exports = computeAverageLengthOfWords; 