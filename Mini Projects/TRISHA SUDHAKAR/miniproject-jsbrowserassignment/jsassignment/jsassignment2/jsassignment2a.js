//write a function to accept 3 numeric values and return average of those numbers
const prompt = require("prompt-sync")({ sigint: true });
function calculateAverage(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var average = sum / 3;
    return average;
  }

  var number1 = parseFloat(prompt("Enter the first number:"));
  var number2 = parseFloat(prompt("Enter the second number:"));
  var number3 = parseFloat(prompt("Enter the third number:"));
  
  var result = calculateAverage(number1, number2, number3);
  console.log("The average is: " + result);