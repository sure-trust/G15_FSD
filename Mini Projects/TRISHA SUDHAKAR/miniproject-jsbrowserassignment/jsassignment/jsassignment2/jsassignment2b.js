//write a function to accept an array of numbers and return sum of the array elements
function sumArrayElements(numbers) {
    // Initialize the sum variable
    let sum = 0;
  
    // Iterate over each element in the array
    for (let i = 0; i < numbers.length; i++) {
      // Add the current element to the sum
      sum += numbers[i];
    }
  
    // Return the sum
    return sum;
  }
  
  // Example usage:
  const numbers = [5, 2, 3, 4, 5];
  const result = sumArrayElements(numbers);
  console.log(result);