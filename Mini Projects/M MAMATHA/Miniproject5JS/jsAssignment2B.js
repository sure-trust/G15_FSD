function sumArrayElements(numbers) {
    
    let sum = 0;
  
    
    for (let i = 0; i < numbers.length; i++) {
      
      sum += numbers[i];
    }
  
    
    return sum;
  }
  
  
  const numbers = [5, 2, 3, 4, 10];
  const result = sumArrayElements(numbers);
  console.log(result)

