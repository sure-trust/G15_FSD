function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
  
    var numbers = Array.from({ length: number }, (_, index) => index + 1);
  
    var result = numbers.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue;
    });
  
    return result;
  }
  
  // Example usage
  const prompt= require("prompt-sync")();
  var input = prompt("Enter a number:");
  var result = factorial(input);
  console.log("The factorial is: " + result);
  