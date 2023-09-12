// Accept username and address from the user
const prompt=require("prompt-sync")();
const username = prompt('Enter your username:');
const address = prompt('Enter your address:');

// Find the length of the entered values
const usernameLength = username.length;
const addressLength = address.length;

// Convert the values to uppercase
const uppercaseUsername = username.toUpperCase();
const uppercaseAddress = address.toUpperCase();

// Print the results
console.log('Username: ' + username);
console.log('Length of Username: ' + usernameLength);
console.log('Username in Uppercase: ' + uppercaseUsername);

console.log('Address: ' + address);
console.log('Length of Address: ' + addressLength);
console.log('Address in Uppercase: ' + uppercaseAddress);
