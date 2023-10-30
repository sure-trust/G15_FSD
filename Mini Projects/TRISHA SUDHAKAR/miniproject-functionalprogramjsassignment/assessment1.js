//first of all -- create a assessment1.html and use this script in that file
let pizza=true;

pizza = false;

console.log(pizza);

//1. assign  a value false to it and print it on console


const pizza1 = true;
console.log(pizza1);


//2.try to assign and print it and write down the message that you get


//difference between var and let let variable can be accessed within the block  of function //var is the global variable accesible within entire function


var topic = "Javascript"; // Global variable "topic" 

if (topic) {
    let topic = "React"; // Local variable "topic" with value "React", within the global variable inside this block

    console.log(topic); // Output: "React" - This will print the value of the local "topic" variable inside the if block
}

console.log(topic); // 4. Output: "Javascript" - This will print the value of the global "topic" variable outside the if block



//5.output react
//         javascript

//6. create a  div with id container in html file  -- write done here in comment once done
//done..!!
//7.in this script get its reference of the element with id "container"
const containerDiv = document.getElementById("container");//when this is done we can work with element and its styling


//8. using the traditional for loop which should iterate for 5 times
//  every iteration  should :
// 8a .create element div
//8b add event listener for click function and on clicked it should display  a message displaying  the iteration number
//8c. add div to the container
for (let i = 0; i < 5; i++) {
    const divElement = document.createElement("div");
    divElement.textContent = `Iteration ${i + 1}`;

    divElement.addEventListener("click", function() {
        alert(`Clicked! Iteration ${i + 1}`);
    });

    container.appendChild(divElement);//adds the div element with the id container to the div container
}

//9 create  a const email which has to use template strings
// to display some string literals along with variable values
const firstName = "trisha";
const middlename = "_";
const lastName = "sudhakar";
const domain = "gmail.com";

//const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;

//console.log(email);


const qty = 3;
const event = "Concert";
const price = 30.99;
const ticketAgent = "TicketMaster";

const email = `
Hello ${firstName},

Thanks for ordering ${qty} tickets to ${event}.

Order Details:
${firstName} ${middlename} ${lastName}
${qty} * ${price} = ${qty * price} to ${event}

You can pick up your tickets 30 minutes before the show.

${ticketAgent}.
`;

console.log(email);

/*
you have to replace everything in << >> with the variable
email = 
Hello <<firstName>>
Thanks for ordering <<qty>> tickets to <<event>>.

Order Details :
<<firstname>> <<middlename>> <<lastname>>
<<qty>> * <<price>> = <<qty*price>> to <<event>>


You can pick up your tickets up 30 minutes before the show

<<ticketAgent>>.



*/


/*10.
In this question I have created a string with ` `
create variables using let or const article.title and body and replace it in code given below

document.body.innerHTML = `
<section>
  <header>
      <h1>The React Blog</h1>
  </header>
  <article>
      <h2><<article.title>></h2>
      <<article.body>>
  </article>
  <footer>
      <p>copyright <<display date>> | The React Blog</p>
  </footer>
</section>
`;

*/
// Assuming you have the following variables
const articleTitle = "The Power of React Hooks";
const articleBody = "React Hooks provide a way to add stateful logic to functional components...";

document.body.innerHTML = `
<section>
  <header>
      <h1>The React Blog</h1>
  </header>
  <article>
      <h2>${articleTitle}</h2>
      ${articleBody}
  </article>
  <footer>
      <p>copyright ${new Date().getFullYear()} | The React Blog</p>
  </footer>
</section>
`;


//11 .create a function logCompliment as a regular function just printing 'you are doing great'
//invoke it
function logCompliment() {
    console.log('you are doing great');
  }
  
  logCompliment();
  
//12.above function as a function expression 
//invoke it'
const logComplimentt = function() {
  console.log('you are doing great');
};

logComplimentt();

  
  

//13.modify logCompliment to take 2 args name and message which it should return
function logCompliment(name, message) {
  return `${name}, ${message}`;
}

const complimentMessage = logCompliment("John", "you are doing great");
console.log(complimentMessage);

//14.create function logActivity which takes 2 args name and activity ,use default parameters
function logActivity(name = "trisha", activity = "coding") {
  console.log(`${name} is ${activity}.`);
}

// Usage with default parameters
logActivity(); // Output: trisha is coding.
logActivity("alice"); // Output: Alice is coding.
logActivity("Bob", "swimming"); // Output: Bob is swimming.

//15.create  an arrowfunction greeting which takes 2 args 
//which it prints in the foll manner "arg1 is from arg2" whatever are values 
const greeting = (arg1, arg2) => {
  console.log(`${arg1} is from ${arg2}.`);
};

// Usage
greeting("trisha", "bangalore");
greeting("sudhakar", "karnataka");

//16. if arg1 is not provided or null , throw error with proper
 //message else return the value
 const greting = (arg1, arg2) => {
  if (arg1 === null || arg1 === undefined) {
    throw new Error("arg1 is missing or null. Please provide a valid value.");
  }

  return arg1;
};

// Usage
try {
  const result1 = greting("John", "New York");
  console.log(result1); // Output: John

  const result2 = greting(null, "London"); // This will throw an error
  console.log(result2); // This line will not be reached due to the error thrown
} catch (error) {
  console.error(error.message); // Output: arg1 is missing or null. Please provide a valid value.
}

 


 //17.create  a const tahoe with mountains array [ ] ,print function which prints mountains using join at a delay of 1second
 const tahoe = {
    mountains: [],
  };
  
  function printMountains() {
    const delay = 1000; // 1 second delay
  
    setTimeout(function() {
      if (tahoe.mountains.length === 0) {
        console.log("No mountains to print.");
      } else {
        console.log("Mountains: " + tahoe.mountains.join(", "));
      }
    }, delay);
  }
  
  // Usage
  tahoe.mountains = ["Mount Shasta", "Mount Lassen", "Mount Whitney"];
  printMountains();
  
 //18.create an object sandwich with properties  bread , meat ,cheese  as scalar and toppings as array
 const sandwich = {
  bread: "Wheat",
  meat: "Turkey",
  cheese: "Swiss",
  toppings: ["Lettuce", "Tomato", "Onion", "Mayonnaise"],
};

console.log(sandwich);

 //19destructure sandwich in 2 consts bread and meat and print them


const { bread, meat } = sandwich;

console.log("Bread:", bread);
console.log("Meat:", meat);
//output Bread: Wheat
//Meat: Turkey


 //20.this time destructure sandwich in 2 let variables bread and meat 
 //then assign diff values to both and display them
 //also display sandwich.bread and sandwich.meat
 const sandwic = {
  bread: "Wheat",
  meat: "Turkey",
  cheese: "Swiss",
  toppings: ["Lettuce", "Tomato", "Onion", "Mayonnaise"],
};

let { breaad, meaat } = sandwich;

console.log("Before changes:");
console.log("bread:", breaad);
console.log("meat:", meaat);
console.log("sandwich.bread:", sandwich.breaad);
console.log("sandwich.meat:", sandwich.meaat);

// Assigning different values to bread and meat
breaad = "Sourdough";
meaat = "Chicken";

console.log("\nAfter changes:");
console.log("bread:", breaad);
console.log("meat:", meaat);
console.log("sandwich.bread:", sandwich.breaad);
console.log("sandwich.meat:", sandwich.meaat);










