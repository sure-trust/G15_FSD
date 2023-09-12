const prompt= require("prompt-sync")();
let x = prompt("Enter number:",2)
if (x%2==0) {
    console.log(x + "  it is even");
}
else {
    console.log(x + "  it is odd")
}