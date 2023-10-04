import { useState } from 'react';

const FontColor = () => {
  const [fontColor, setFontColor] = useState('#000'); // 초기값 검정색

  const changeColor = (color) => {
    setFontColor(color);
  };

  let colorName = '';
  if (fontColor === '#000') colorName = '검정색';
  else if (fontColor === '#f00') colorName = '빨간색';
  else if (fontColor === '#00f') colorName = '파란색';

  return (
    <div>
      <h1 style={{ color: fontColor }}>{colorName} 글씨</h1>
      <button onClick={() => changeColor('#f00')}>빨간색</button>
      <button onClick={() => changeColor('#00f')}>파란색</button>
    </div>
  );
};

export default FontColor;
