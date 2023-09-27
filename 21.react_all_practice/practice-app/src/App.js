import Input from './Input';
import Result from './Result';
import Select from './Select';
import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('글자글자'); // 글자
  const [img, setImg] = useState('apple.png'); // 이미지
  const [bgImg, setBgImg] = useState('#000'); // 배경색
  const [fontColor, setFontColor] = useState('#fff'); // 글자색

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select setImg={setImg} setBgImg={setBgImg} setFontColor={setFontColor}></Select>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input setMsg={setMsg}></Input>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result msg={msg} img={img} bgImg={bgImg} fontColor={fontColor}></Result>
      </div>
    </>
  );
}

export default App;
