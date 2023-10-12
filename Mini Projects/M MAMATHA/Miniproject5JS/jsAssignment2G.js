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