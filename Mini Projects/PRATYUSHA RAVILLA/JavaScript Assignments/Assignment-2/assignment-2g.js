
function array() {
    var numbers = [];
  
    while (true) {
      const prompt=require("prompt-sync")();
      var input = prompt("Enter a number (enter 0 to stop):");
  
      if (input == 0) {
       break;
      }
  
      numbers.push(input);
    }
  
    return numbers;
  }
  
  // Example usage
  var number = array();
  console.log("The array is: " + number);

  