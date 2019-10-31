/*
Write a function called “addFullNameProperty”.

Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” 
returns a “fullName” property whose value is a string with the first name and last name 
separated by a space.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
*/

const addFullNameProperty = obj => {
  let { firstName, lastName } = obj; 
  return obj[fullName] = firstName + ' ' + lastName; 
}

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'