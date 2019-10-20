/*
Write a function called “isOldEnoughToVote”.
Given a number, in this case an age, ‘isOldEnoughToVote’ returns whether a person of this given age is old enough to legally vote in the United States.
Notes:
* The legal voting age in the United States is 18.
*/

const isOldEnoughToVote = age => age >= 18 ? true : false; 

// console.log(isOldEnoughToVote(24));

module.exports = isOldEnoughToVote;