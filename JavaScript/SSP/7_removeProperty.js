/*
Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.

  var obj = {
    name: 'Sam',
    age: 20
  }
  removeProperty(obj, 'name');
  console.log(obj.name); // --> undefined
*/

const removeProperty = (obj, key) => obj[key] ? delete obj[key] : undefined; 

const obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
// console.log(obj.name); // --> undefined

module.exports = removeProperty;