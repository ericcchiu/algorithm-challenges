/*
Given a string and an array of strings, return true if the string exists in the array,
and false if it does not.

DO NOT use .includes() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

const searchString = (str, arrStr) => {
  if (arrStr.length === 0) return false; 
  if (arrStr[0] === str) return true; 

  return searchString(str, arrStr.slice(1));
}

let str = 'hello'; 
let str1 = '2'
let arrString = ['x', 'y', 'hello', 'goodbye'];

console.log(searchString(str, arrString)); 
console.log(searchString(str1, arrString));