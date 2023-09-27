function Result(props) {
  return (
    <div style={{ display: "block" }}>
      <img src={props.img} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: props.bgImg,
          color: props.fontColor,
        }}
      >
        {props.msg}
      </div>
    </div>
  );
}

export default Result;
