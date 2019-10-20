/* 
Write a function called “getLengthOfTwoWords”.
Given 2 words, “getLengthOfTwoWords” returns the sum of their lengths.

  var output = getLengthOfTwoWords('some', 'words');
  console.log(output); // --> 9
*/

const getLengthOfTwoWords = (word1, word2) => word1.length + word2.length; 

let output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9

module.exports = getLengthOfTwoWords; 

