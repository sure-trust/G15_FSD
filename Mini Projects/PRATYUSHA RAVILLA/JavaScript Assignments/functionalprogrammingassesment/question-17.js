//question 15

const greeting = (arg1, arg2) => {
    console.log(`${arg1} is from ${arg2}`);
  };
  
  greeting("Alice", "New York"); 
  greeting("Bob", "London"); 
  



// //question 16
//   const greeting = (arg1, arg2) => {
//     if (arg1 === undefined || arg1 === null) {
//         throw new Error("arg1 is missing or null");
//       }
      
//       return `${arg1} is from ${arg2}`;
    
    
//     try {
//       const message1 = greeting("Alice", "New York");
//       console.log(message1); // Output: Alice is from New York
      
//       const message2 = greeting(null, "London"); // This will throw an error
//       console.log(message2);
//     } catch (error) {
//       console.error(error.message);
//     }
// };