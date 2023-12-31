import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  // 함수에 인자가 없는 경우 : 함수 이름만 전달
  const increase = () => {
    setNumber(number + 1);
  };

  // 함수에 인자 보내기
  const alertMsg = (msg) => {
    alert(`${msg} : 현재 숫자는 ${number}입니다.`);
  };

  // 함수에 인자 보내기
  const consoleMsg = (e, msg) => {
    console.log(e);
    console.log('#####################');
    console.log(e.target);
    console.log(`${msg} : 현재 인자는 ${number}입니다.`);
  };

  // e.target vs e.currentTarget
  // currentTarget : 이벤트 핸들러가 있는 요소
  // e.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소
  const handleEvent = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  };

  return (
    <div>
      <h1>Number Counter</h1>
      <h2>{number}</h2>

      {/* 함수에 인자가 없는 경우 : 함수 이름만 전달 */}
      <button onClick={increase}>더하기</button>

      {/* 함수에 인자 보내기 */}
      <button onClick={() => alertMsg('hellllllllllo')}>alert 출력</button>
      <button onClick={(e) => consoleMsg(e, 'woooooorld')}>console 출력</button>

      {/* e.target vs e.currentTarget */}
      <button onClick={handleEvent}>
        <p>
          <span>handle Event</span>
        </p>
      </button>
    </div>
  );
};

export default Counter;
