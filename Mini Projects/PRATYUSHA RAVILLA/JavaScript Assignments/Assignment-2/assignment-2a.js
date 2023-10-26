function Average(num1, num2, num3) {
  // Calculate the sum of the three numbers
  var sum = num1 + num2 + num3;

  // Calculate the average by dividing the sum by 3
  var average = sum / 3;

  // Return the average
  return average;
}

// Example usage
var result = Average(5, 10, 15);
console.log("The average is: " + result);
