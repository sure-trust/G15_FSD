//21 . write the code to destructure array ['horse','cat','mouse'] 
//into a variable and display that variable

const animals = ['horse', 'cat', 'mouse'];
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

console.log('Destructured:', firstAnimal, secondAnimal, thirdAnimal);

//out put of 21 is ---------Destructured: horse cat mouse
/*22
With the same array,  access the last value by skipping the first two values
and print it

*/
const [ , , lastAnimal] = animals;

console.log('Last Animal:', lastAnimal);

/*
output of 22 is ------Last Animal: mouse

23.create 2 const global variables , name and altitude , and assign themto an object funHike

*/
const name = "Mountain Hike";
const altitude = 3000;

const funHike = {
  name,
  altitude
};

console.log(funHike);

/*
output of 23 is ----------{name: 'Mountain Hike', altitude: 3000}
altitude
: 
3000
name
: 
"Mountain Hike
24
create  a skier object with name ,sound  as variables and speed as function which takes
mph as arg
assign it to speed and display it

in this question create function with a regular function keyword


*/
const skier = {
    name: "John",
    sound: "Wooohooo!",
    speed: function(mph) {
      console.log(`${this.name} is skiing at ${mph} mph!`);
    }
  };
  
  skier.speed(25);
  
/*
output of 24 th is ---John is skiing at 25 mph!
25. same as above only function without function keyword
*/
/* const skier = {
    name: "John",
    sound: "Wooohooo!",
    speed(mph) {
      console.log(`${this.name} is skiing at ${mph} mph!`);
    }
  };
   */
  skier.speed(30);
//output of 25 th is --------- error message

/*26.
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];

using spread operator assign value to tahoe array

*/
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];

const tahoe = [...peaks, ...canyons];

console.log(tahoe);
/* //out put of 26 th is----(5) ['Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood']
0: "Tallac"
1: "Ralston"
2: "Rose"
3: "Ward"
4: "Blackwood"
length: 5 */