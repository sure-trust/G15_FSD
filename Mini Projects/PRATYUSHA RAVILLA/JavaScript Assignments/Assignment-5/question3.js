function greetPerson(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name) {
          resolve(`Hello, ${name}!`);
        } else {
          reject("Name not provided.");
        }
      }, 3000);
    });
  }
  
  // Using Promise.all

  const promise1 = greetPerson("Pratyusha");
  const promise2 = greetPerson("Mithila");
  const promise3 = greetPerson("Bhagat");
  
  Promise.all([promise1, promise2, promise3])
    .then((greetings) => {
      console.log("Promise.all - All promises resolved successfully:");
      console.log(greetings);
    })
    .catch((error) => {
      console.log("Promise.all - An error occurred:");
      console.error(error);
    });
  
  // Using Promise.any

  Promise.any([promise1, promise2, promise3])
    .then((greeting) => {
      console.log("Promise.any - At least one promise resolved successfully:");
      console.log(greeting);
    })
    .catch((errors) => {
      console.log("Promise.any - All promises rejected:");
      console.error(errors);
    });
  
  // Using Promise.allSettled

  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
      console.log("Promise.allSettled - All promises settled:");
      console.log(results);
    });
  
  // Using Promise.race
  
  const promise4 = greetPerson("David");
  
  Promise.race([promise1, promise2, promise3, promise4])
    .then((greeting) => {
      console.log("Promise.race - The first promise to resolve or reject:");
      console.log(greeting);
    });
  