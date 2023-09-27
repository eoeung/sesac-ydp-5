function Input(props) {
  const sendMsg = (e) => {
    props.setMsg(e.target.value);
  }

  return (
    <>
      내용 :{" "}
      <input
        type="text"
        onChange={(e) => {sendMsg(e)}}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
