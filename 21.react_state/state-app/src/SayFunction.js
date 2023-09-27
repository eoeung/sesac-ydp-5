import { useState } from 'react';

const SayFunction = () => {
  console.log(useState('welcome!')); // [값, 함수]가 출력됨
  const [message, setMessage] = useState('welcome');
  // 'welcome' : 상태 초기값, (숫자, 문자, 배열 등 값의 형태는 자유로움)
  // message : 메시지 상태
  // setMessage() : message state 값을 바꾸는 함수

  // onClickEnter 정의
  const onClickEnter = () => {
    setMessage('안녕하세요');
  };

  const onClickLeave = () => {
    setMessage('안녕히 가세요');
  };

  return (
    <div>
      {/* 
            - HTML : onclick="onClickEvent()" → 문자열 형식 호출문 등록
            - JS : addEventListener('click', onClickEvent) → 괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생했을 때 함수를 호출함
            - React : onClick={onClickEvent} → JS와 동일
      */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default SayFunction;
