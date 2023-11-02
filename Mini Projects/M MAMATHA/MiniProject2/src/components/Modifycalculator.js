import React, { useState } from 'react';

const Modifycalculator = () => {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });
  const [operation, setOperation] = useState('+'); // Default operation is addition

  const changeFirstNumberHandler = (event) => {
    setEnteredNumbers((prevData) => ({
      first: +event.target.value,
      second: prevData.second,
    }));
  };

  const changeSecondNumberHandler = (event) => {
    setEnteredNumbers((prevData) => ({
      first: prevData.first,
      second: +event.target.value,
    }));
  };

  const changeOperationHandler = (event) => {
    setOperation(event.target.value);
  };

  let result;
  switch (operation) {
    case '+':
      result = enteredNumbers.first + enteredNumbers.second;
      break;
    case '-':result = enteredNumbers.first - enteredNumbers.second;
      break;
    case '*':
      result = enteredNumbers.first * enteredNumbers.second;
      break;
    case '/':
      result = enteredNumbers.second !== 0 ? enteredNumbers.first / enteredNumbers.second : 'Undefined';
      break;
    default:
      result = 'Invalid operation';
  }

  return (
    <div>
      <input type='number' onChange={changeFirstNumberHandler} />{' '}
      <select value={operation} onChange={changeOperationHandler}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>{' '}
      <input type='number' onChange={changeSecondNumberHandler} />{' = '}
      <span>{result}</span>
    </div>
  );
};

export default Modifycalculator;