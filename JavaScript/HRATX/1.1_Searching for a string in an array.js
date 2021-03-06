/*
Given a string and an array of strings, return true if the string exists in the array, 
and false if it does not.

DO NOT use .includes() in your solution.

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
*/

// const searchString = (str, arrStr) => {
//   for (let item of arrStr) { 
//     console.log(item); 
//     if (str === item ) return true; 
//   }
//   return false
// }

const searchString = (str, arrStr) => {

  if (arrStr.length === 0) return false; 
  if(str === arrStr[0]) return true; 
  return searchString(str, arrStr.slice(1)); 
}

let str = "x"; 
let arr = ["a", "x", "c"]; 

console.log(searchString(str, arr)); 