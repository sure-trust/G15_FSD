function factorial(num) {
    return Array.from({length: num}, (_, i) => i + 1)
    .reduce((acc, val) => acc * val, 1);
 }
 console.log(factorial(5));
 console.log(factorial(10));
 console.log(factorial(0));  
