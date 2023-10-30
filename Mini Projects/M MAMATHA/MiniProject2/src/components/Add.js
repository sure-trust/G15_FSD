import React, { useState } from 'react';

const Add = () => {
  const [addNumbers, setAddNumbers] = useState({ first: 0, second: 0 });
  const [subNumbers, setSubNumbers] = useState({ first: 0, second: 0 });
  const [mulNumbers, setMulNumbers] = useState({ first: 0, second: 0 });
  const [divNumbers, setDivNumbers] = useState({ first: 0, second: 1 }); // Avoid division by zero
  const [addResult, setAddResult] = useState(0);
  const [subResult, setSubResult] = useState(0);
  const [mulResult, setMulResult] = useState(0);
  const [divResult, setDivResult] = useState(0);

  const calculateAdd = () => {
    setAddResult(addNumbers.first + addNumbers.second);
  };

  const calculateSub = () => {
    setSubResult(subNumbers.first - subNumbers.second);
  };

  const calculateMul = () => {
    setMulResult(mulNumbers.first * mulNumbers.second);
  };

  const calculateDiv = () => {
    setDivResult(divNumbers.second !== 0 ? divNumbers.first / divNumbers.second : 'Undefined');
  };

  return (
    <div>
      <div>
        <input type='number' onChange={(event) => setAddNumbers({ ...addNumbers, first: +event.target.value })} />
        + <input type='number' onChange={(event) => setAddNumbers({ ...addNumbers, second: +event.target.value })} />
        = {addResult}
        <button onClick={calculateAdd}>Calculate</button>
      </div>
      <div>
        <input type='number' onChange={(event) => setSubNumbers({ ...subNumbers, first: +event.target.value })} />
        - <input type='number' onChange={(event) => setSubNumbers({ ...subNumbers, second: +event.target.value })} />
        = {subResult}
        <button onClick={calculateSub}>Calculate</button>
      </div>
      <div>
        <input type='number' onChange={(event) => setMulNumbers({ ...mulNumbers, first: +event.target.value })} />
        * <input type='number' onChange={(event) => setMulNumbers({ ...mulNumbers, second: +event.target.value })} />
        = {mulResult}
        <button onClick={calculateMul}>Calculate</button>
      </div>
      <div>
        <input type='number' onChange={(event) => setDivNumbers({ ...divNumbers, first: +event.target.value })} />
        / <input type='number' onChange={(event) => setDivNumbers({ ...divNumbers, second: +event.target.value })} />
        = {divResult}
        <button onClick={calculateDiv}>Calculate</button>
      </div>
    </div>
  );
};

export default Add;