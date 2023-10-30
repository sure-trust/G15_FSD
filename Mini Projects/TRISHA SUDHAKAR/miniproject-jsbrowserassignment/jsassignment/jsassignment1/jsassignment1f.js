const prompt = require("prompt-sync")({ sigint: true });
// Accept username and address from the user
var username = prompt("Enter your username:");
var address = prompt("Enter your address:");

// Calculate the length of the entered values
var usernameLength = username.length;
var addressLength = address.length;

// Convert the entered values to uppercase
var uppercaseUsername = username.toUpperCase();
var uppercaseAddress = address.toUpperCase();

// Print the results
console.log("Username length:", usernameLength);
console.log("Address length:", addressLength);
console.log("Uppercase username:", uppercaseUsername);
console.log("Uppercase address:", uppercaseAddress);