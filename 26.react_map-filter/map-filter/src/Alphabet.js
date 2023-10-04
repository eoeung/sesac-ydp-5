import React, { useState } from 'react';

export default function Alphabet() {
  //   const alphabets = ['b', 'a', 'n', 'a', 'n', 'a'];
  const [list, setList] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  //   const [alphabet, setAlphabet] = useState(alphabets);
  const [alphabet, setAlphabet] = useState(list);
  const [inputAlpha, setInputAlpha] = useState('');
  // 알파벳 추가
  const addAlpha = () => {
    // [Quiz] input이 빈 값이라면, alphabet 상태가 변경되지 않도록 하기
    if (!inputAlpha) {
      alert('빈 값을 넣을 수 없습니다.');
      return;
    }

    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });

    setAlphabet(newAlpha);
    setInputAlpha('');
  };

  // 알파벳 삭제
  const deleteAlpha = (targetId) => {
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };

  const handleKeyDown = (e) => {
    //   console.log(e);
    // console.log(e.nativeEvent.isComposing);
    // bug fix : IME(input method enter) 문제 해결
    if(e.nativeEvent.isComposing){
        return;
    }

    if (e.key === 'Enter') {
      addAlpha();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // [Quiz] input에서 enter키 누르면 추가되도록
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {/* {alphabet.map((val, idx) => {
          return <li key={idx}>{val}</li>;
        })} */}
        {alphabet.map((val) => {
          return (
            <li key={val.id} onDoubleClick={() => deleteAlpha(val.id)}>
              {val.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
