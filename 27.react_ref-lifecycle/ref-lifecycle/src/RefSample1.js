import React, { useRef } from 'react';

export default function RefSample1() {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  // 3. useRef()를 이용해서 만든 객체의 current값에 focus() DOM API 사용
  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시, input에 focus 처리</p>
      {/* 2. 직접 접근하고 싶은 DOM 요소에 ref props 설정 */}
      <input type="text" ref={inputRef}></input>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
