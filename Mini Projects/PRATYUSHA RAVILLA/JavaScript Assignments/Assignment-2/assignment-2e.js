function filter1(arr) {
    // Use the filter method to create a new array with numbers divisible by 5
    var filteredArray = arr.filter(function (num) {
      return num % 5 === 0;
    });
  
    return filteredArray;
  }
  
  // Example usage
  var numbers = [10, 7, 25, 12, 35, 18, 20];
  var filteredNumbers = filter1(numbers);
  console.log("Filtered array: " + filteredNumbers);
  