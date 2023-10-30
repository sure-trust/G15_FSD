//2f)use reduce method of array to find the foctorial of a given number
function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    } else if (n === 0) {
      return 1;
    } else {
      return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr);
    }
  }
  
 
  const number = 5;
  const result = factorial(number);
  console.log(`The factorial of ${number} is: ${result}`);