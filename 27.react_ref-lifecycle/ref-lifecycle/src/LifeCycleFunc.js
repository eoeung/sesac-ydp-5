import React, { useState } from 'react';
import MyComponent from './MyComponent';

const LifeCycleFunc = () => {
  const [ number, setNumber ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  const changeVisibleState = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={changeNumberState}>Plus</button>
      <button onClick={changeVisibleState}>On/Off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};

export default LifeCycleFunc;
