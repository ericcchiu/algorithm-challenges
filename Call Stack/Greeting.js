const greet = name => {
  console.log(`Hello, ${name}!`); 
  let secondGreeting = greet2(name); 
  console.log(secondGreeting)
  console.log('Getting ready to say bye...'); 
  bye(); 
  return 'Complete';
};

const greet2 = name => {
console.log('Second greeting');
return `Hello again, ${name}!`;

};
const bye = () => 'BYE!!!';

console.log(greet('Eric')); 
