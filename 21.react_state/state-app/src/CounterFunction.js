import { useState } from 'react';

const CounterFunction = (props) => {
  const [number, setNumber] = useState(0); // useState 초기값 설정 = 0으로
  const onClickEnter = () => {
    setNumber(number + 1);
  };
  const { value } = props;

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickEnter}>{value}</button>
    </div>
  );
};

export default CounterFunction;
