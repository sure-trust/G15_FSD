const prompt = require("prompt-sync")();

let  x = Math.random() * 10;
let  guess = 5 ;
while (guess > 0) {
    let y = prompt("input:");
    if (x===y){
        console.log("you win")
    }
    else {
        console.log("better luck next time")
    }  
}


