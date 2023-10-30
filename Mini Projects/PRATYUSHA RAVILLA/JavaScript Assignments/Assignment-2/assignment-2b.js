function total(numbers) {
    // Initialize a variable to store the sum
    var sum = 0;
  
    // Iterate over each element in the array
    for (var i = 0; i < numbers.length; i++) {
      // Add the current element to the sum
      sum += numbers[i];
    }
  
    // Return the sum
    return sum;
  }
  
  // Example usage
  var array = [1, 2, 3, 4, 5];
  var result = total(array);
  console.log("The sum is: " + result);
  