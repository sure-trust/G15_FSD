//question 17
const tohoe={
    mountains:['one','two','three','four'],
    printMountains: function() {
        this.mountains.forEach((mountain, index) => {
          setTimeout(() => {
            console.log(mountain);
          }, index * 1000); // Delay of 1 second for each mountain
        });
      }
     

};
tohoe.printMountains();


//question 18
let sandwich={
    bread:'wheet',
    meat:'chicken',
    cheese:'cheeser',
    toppings:['tomato','onion','chilli']
};
console.log(sandwich);

//question 19
const{bread,meat} = sandwich;
console.log('bread:',bread);
console.log('meat:',meat);


