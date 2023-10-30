// Explore String  functions
const str = "Hello, World!";

// Length of the string
console.log("Length:", str.length);

// Accessing individual characters
console.log("Character at index 0:", str.charAt(0));
console.log("Character at index 7:", str[7]);

// Concatenating strings
const firstName = "trisha";
const lastName = "sudhakar";
const fullName = firstName.concat(" ", lastName);
console.log("Full Name:", fullName);

// Converting to uppercase and lowercase
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// Checking if a string starts or ends with a specific substring
console.log("Starts with 'Hello':", str.startsWith("Hello"));
console.log("Ends with 'World!':", str.endsWith("World!"));

// Checking if a string includes a specific substring
console.log("Includes 'World':", str.includes("World"));

// Finding the index of a substring
console.log("Index of 'World':", str.indexOf("World"));

// Splitting a string into an array
const words = str.split(", ");
console.log("Split into array:", words);

// Replacing substrings
const replacedStr = str.replace("World", "Universe");
console.log("Replaced string:", replacedStr);

// Extracting a substring
const substring = str.substring(7, 12);
console.log("Substring:", substring);

// Trimming whitespace from the beginning and end of a string
const whitespaceStr = "   Trim me   ";
console.log("Trimmed string:", whitespaceStr.trim());