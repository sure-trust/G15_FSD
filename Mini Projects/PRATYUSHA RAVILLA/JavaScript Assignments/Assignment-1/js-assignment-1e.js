// Accept a number from the user
const prompt=require("prompt-sync")();
const number = parseInt(prompt('Enter a number:'));

// Function to check if a number is prime
function isPrime(num) {
  // 1 and numbers less than 1 are not prime
  if (num <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  // If no factors found, the number is prime
  return true;
}

// Check if the number is prime
if (isPrime(number)) {
  console.log(number + ' is a prime number.');
} else {
  console.log(number + ' is not a prime number.');
}




