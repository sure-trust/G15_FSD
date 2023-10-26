function extract(input) {
    // Use regular expressions to extract the amount from the string
    var num = /(\d+)/;
    var match = input.match(num);
  
    // Check if a match is found and extract the amount
    var amount = match ? parseInt(match[0]) : null;
  
    return amount;
  }
  
  // Example usage
  var inputString = "Payable amount Rs. 1000";
  var extracted = extract(inputString);
  
  if (extracted !== null) {
    console.log("Extracted amount: " + extracted);
  } else {
    console.log("Amount not found in the string.");
  }
  