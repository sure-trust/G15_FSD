const numbers = [10, 7, 25, 16, 30, 9, 40, 3, 55, 12];

function filter(arr) {
  return arr.filter(num => num % 5 === 0);
}

const filteredArray = filter(numbers);
console.log('Filtered Array:', filteredArray);