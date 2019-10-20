/*
Write a function called “isOldEnoughToDrink”.
Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
*/

const isOldEnoughToDrink = (age) => age >= 21 ? true : false;

// console.log('21 is old enough to drink:', isOldEnoughToDrink(21));

module.exports = isOldEnoughToDrink;

