// Example string
var str = "Hello, World!";

// Length of the string
var length = str.length;
console.log("Length: " + length);

// Accessing characters in a string
var firstChar = str[0];
console.log("First character: " + firstChar);

// Converting to uppercase and lowercase
var upperCaseStr = str.toUpperCase();
console.log("Uppercase: " + upperCaseStr);

var lowerCaseStr = str.toLowerCase();
console.log("Lowercase: " + lowerCaseStr);

// Extracting substrings
var substring = str.substring(0, 5);
console.log("Substring: " + substring);

// Finding the index of a character or substring
var index = str.indexOf("o");
console.log("Index of 'o': " + index);

// Replacing characters or substrings
var replacedStr = str.replace("World", "Universe");
console.log("Replaced string: " + replacedStr);

// Splitting a string into an array
var splitArr = str.split(",");
console.log("Split array: " + splitArr);

// Trimming whitespace from the start and end of a string
var trimmedStr = "   Trimmed   ";
console.log("Original string: " + trimmedStr);
console.log("Trimmed string: " + trimmedStr.trim());
