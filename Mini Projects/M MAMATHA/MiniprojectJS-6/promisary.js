function greetPerson(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`Hello, ${name}!`);
            } else {
                reject(new Error("Name not provided."));
            }
        }, 3000);
    });
}


const promise1 = greetPerson("Alice");
const promise2 = greetPerson("Bob");
const promise3 = greetPerson("Charlie");


Promise.all([promise1, promise2, promise3])
    .then((results) => {
        const resultAllElement = document.getElementById('result-all');
        resultAllElement.textContent = "Promise.all - All promises resolved:\n" + results.join("\n");
    })
    .catch((error) => {
        console.log("Promise.all - One or more promises rejected:");
        console.error(error);
    });


Promise.any([promise1, promise2, promise3])
    .then((result) => {
        const resultAnyElement = document.getElementById('result-any');
        resultAnyElement.textContent = "Promise.any - At least one promise resolved:\n" + result;
    })
    .catch((errors) => {
        console.log("Promise.any - All promises rejected:");
        console.error(errors);
    });


Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        const resultAllSettledElement = document.getElementById('result-allSettled');
        resultAllSettledElement.textContent = "Promise.allSettled - All promises settled:\n" + JSON.stringify(results);
    });
    
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        const resultRaceElement = document.getElementById('result-race');
        resultRaceElement.textContent = "Promise.race - Fastest promise resolved:\n" + result;
    })
    .catch((error) => {
        console.log("Promise.race - Fastest promise rejected:");
        console.error(error);
    });