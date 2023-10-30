//2g)create  an array of numbers by taking input from the user till user enters 0 and then display the array
const prompt = require("prompt-sync")({ sigint: true });
const numbers = [];

while (true) {
  const input = prompt('Enter a number (or 0 to finish):');
  const number = parseInt(input);

  if (isNaN(number)) {
    alert('Invalid input! Please enter a valid number.');
    continue;
  }

  if (number === 0) {
    break;
  }

  numbers.push(number);
}

console.log('The array of numbers:', numbers);