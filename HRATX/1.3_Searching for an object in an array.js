/*
Given a name (string) and an array of people (objects), find the person with the given 
name and return his/her hobby. 
Return false if there is no person with the given name.

DO NOT use people.find()

DO use a for loop.

TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

*/
// For loop
// const findPerson = (str, arr) => {
//   for (let entry of arr) {
//     if (entry.name === str) return entry.hobby;
//   }
//   return false;
// };

// Recursion
const findPerson = (str, arr) => {
  if (arr.length === 0) return false; 
  
  if(arr[0].name === str) return arr[0].hobby; 
  return findPerson(str, arr.slice(1)); 
}

const people = [
  { name: "Alice", hobby: "programming" },
  { name: "Bob", hobby: "gaming" }
];
const group = [
  { name: "Carly", hobby: "dancing" },
  { name: "Dan", hobby: "climbing" }
];

console.log(findPerson("Alice", people));
console.log(findPerson('Carl', group));
