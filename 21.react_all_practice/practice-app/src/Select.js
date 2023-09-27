function Select(props) {
  // 이미지
  const sendImg = (e) => {
    props.setImg('/' + e.target.value + '.png');
  };

  // 배경색
  const sendBgImg = (e) => {
    props.setBgImg(e.target.value);
  };

  // 글자색
  const sendFontColor = (e) => {
    props.setFontColor(e.target.value);
  };

  return (
    <>
      과일 :
      <select
        onChange={(e) => {
          sendImg(e);
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          sendBgImg(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          sendFontColor(e);
        }}
      >
        <option value="white">하양</option>
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}

export default Select;
