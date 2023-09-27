import React, { useState } from 'react';

const NumberFunction = () => {
  const [number, setNumber] = useState(0); // 초기값은 0으로

  // 증가
  const Increase = () => {
    setNumber(number + 1);
  };

  // 감소
  const Decrease = () => {
    setNumber(number - 2);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>증가</button>
      <button onClick={Decrease}>감소</button>
    </div>
  );
};

export default NumberFunction;
