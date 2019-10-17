/*
Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key.
Notes:
* If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

const getProperty = (obj, key) => obj[key] ? obj[key] : undefined; 

const obj = {
  key: 'value'
};
console.log(getProperty(obj, 'key'));

module.exports = getProperty;