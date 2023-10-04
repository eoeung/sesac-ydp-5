import React, { useRef, useState } from 'react';

export default function RefSample2() {
  // ref
  const id = useRef(7);
  console.log(id); // {current: 7}
  const plusIdRef = () => {
    id.current += 1;
    console.log(id.current);
  };

  // state
  const [number, setNumber] = useState(10);
  const plusNumState = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시, id값을 1씩 증가</p>
      <h2>{id.current}</h2>
      <button onClick={plusIdRef}>Plus Ref</button>

      <p>** 비교 : state 변경시, ref와 다르게 리렌더링 확인</p>
      <h2>{number}</h2>
      <button onClick={plusNumState}>Plus State</button>
    </div>
  );
}
