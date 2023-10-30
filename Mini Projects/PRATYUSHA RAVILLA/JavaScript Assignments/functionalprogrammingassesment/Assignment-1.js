//question 1
let pizza=true;

pizza=false;
console.log(pizza); // false


//question 2
const pizza1=true;


pizza1=false;
console.log(pizza1); // it throws an error


//question 3
//difference between var and let

// Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared


var topic = "Javascript";

if (topic) {
    let topic = "React";
    console.log(topic);
}
// question 4
console.log(topic);

//question 5
 // react
 //Javascript

 //question 6
 // created a div with id as container..

 //question 7
 
let container = document.getElementById('container');

// 8. using the traditional for loop which should iterate for 5 times
for (let i=0 ; i < 5; i++) {

  // 8a. create element div
  const newDiv = document.createElement('div');

  // 8b. add event listener for click function
  newDiv.addEventListener('click', function() {
    // on clicked it should display a message displaying the iteration number
    alert(`Clicked on iteration number ${i + 1}`);
  });

  // 8c. add div to the container
  container.appendChild(newDiv);
}

//question 9

const firstName = "John";
const middlename = "Doe";
const lastName = "Smith";
const qty = 3;
const price = 25.99;
const event = "Music Festival";
const ticketAgent = "TicketMaster";

const email = `
Hello ${firstName},

Thanks for ordering ${qty} tickets to ${event}.

Order Details:
${firstName} ${middlename} ${lastName}
${qty} * ${price} = ${qty * price} to ${event}

You can pick up your tickets up 30 minutes before the show.

${ticketAgent}.
`;

console.log(email);

//question 10

// const article = {
//     title: "Introduction to React Hooks",
//     body: "React Hooks provide a way to use state and other React features without writing a class component.",
//   };
  
//   const displayDate = new Date().getFullYear();
  
//   document.body.innerHTML = `
//   <section>
//     <header>
//         <h1>The React Blog</h1>
//     </header>
//     <article>
//         <h2>${article.title}</h2>
//         ${article.body}
//     </article>
//     <footer>
//         <p>copyright ${displayDate} | The React Blog</p>
//     </footer>
//   </section>
//   `;
  
//question 11

function logCompliment() {
    console.log('You are doing great');
  }
  
  logCompliment(); // Invoke the function

  
  //question 12
  const logCompliment = function() {
    console.log('You are doing great');
  };
  
  logCompliment(); // Invoke the function

  
  //question 13
  const logCompliment = function(name, message) {
    return `Hey ${name}, ${message}`;
  };
  
  const compliment = logCompliment("Alice", "you're doing an excellent job!");
  console.log(compliment); // Output: Hey Alice, you're doing an excellent job!

  
  //question 14
  function logActivity(name, activity = "working") {
    console.log(`${name} is ${activity}.`);
  }
  
  logActivity("John"); // Output: John is working.
  logActivity("Alice", "reading"); // Output: Alice is reading.

  
  //question 15
  const greeting = (arg1, arg2) => {
    console.log(`${arg1} is from ${arg2}`);
  };
  
  greeting("Alice", "New York"); 
  greeting("Bob", "London"); 
  
  

  //question 16
  //const greeting = (arg1, arg2) => {
    if (arg1 === undefined || arg1 === null) {
      throw new Error("arg1 is missing or null");
    }
    
    return `${arg1} is from ${arg2}`;
  
  
  try {
    const message1 = greeting("Alice", "New York");
    console.log(message1); // Output: Alice is from New York
    
    const message2 = greeting(null, "London"); // This will throw an error
    console.log(message2);
  } catch (error) {
    console.error(error.message);
  }
  

  //question 17
  const tahoe = {
    mountains: ["Mount Tallac", "Echo Peak", "Freel Peak", "Rubicon Peak"],
    printMountains: function() {
      this.mountains.forEach((mountain, index) => {
        setTimeout(() => {
          console.log(mountain);
        }, index * 1000); // Delay of 1 second for each mountain
      });
    }
  };
  
  tahoe.printMountains();

  
      //question 18
  const sandwich = {
    bread: "wheat",
    meat: "turkey",
    cheese: "cheddar",
    toppings: ["lettuce", "tomato", "onion"]
  };
  
  console.log(sandwich);

  
       //question 19
  // const sandwich = {
  //   bread: "wheat",
  //   meat: "turkey",
  //   cheese: "cheddar",
  //   toppings: ["lettuce", "tomato", "onion"]
  // };
  
  //const { bread, meat } = sandwich;
  
  console.log("Bread:", bread);
  console.log("Meat:", meat);

  
         //question 20
  // const sandwich={
  //   bread:'wheet',
  //   meat:'chicken',
  //   cheese:'cheeser',
  //   toppings:['tomato','onion','chilli']
  // };
  let{bread,meat}=sandwich
     bread:'brown';
     meat:'goat';
     console.log(sandwich.bread);
     console.log(sandwich.meat);
     console.log(bread);
    
  

