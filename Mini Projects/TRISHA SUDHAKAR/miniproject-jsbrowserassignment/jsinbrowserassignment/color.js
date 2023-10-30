// Prompt the user for their favorite color
var favoriteColor = prompt("What is your favorite color?");

// Get the first element child of the body
var firstElementChild = document.body.firstElementChild;

// Change the background color of the first element child to the user's favorite color
firstElementChild.style.backgroundColor = favoriteColor;