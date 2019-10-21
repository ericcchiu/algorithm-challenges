const countdown = (i) => {
  console.log(i); 
  
  if (i <= 0) {
    return 'Blast off'; 
  } 
  return countdown(i-1); 
};

console.log(countdown(10));