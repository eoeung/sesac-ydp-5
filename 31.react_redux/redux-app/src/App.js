import { useState } from 'react';
import './styles/Box.css';

function App() {
  const [number, setNumber] = useState(100);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);

  return (
    <div className="App">
      <h1>React Redux Example (Props Drilling)</h1>
      <Box1 number={number} plus={plus} minus={minus} />
    </div>
  );
}

// Props Drilling : 최하위 컴포넌트에 props 값을 전달하기 위해, 중간에 있는 컴포넌트에서 사용하지 않음에도 값을 전달해야한다.
// Box4에서 number를 사용하고 싶기 때문에 Box1 → Box2 → Box3 → Box4로 props 값을 전달해야한다.
const Box1 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box1 : {number}</h2>
      <Box2 number={number} plus={plus} minus={minus} />
    </div>
  );
};

const Box2 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      {/* <h2>Box2 : {number}</h2> */}
      <h2>Box2</h2>
      <Box3 number={number} plus={plus} minus={minus} />
    </div>
  );
};

const Box3 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      {/* <h2>Box3 : {number}</h2> */}
      <h2>Box3</h2>
      <Box4 number={number} plus={plus} minus={minus} />
    </div>
  );
};

const Box4 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box4 : {number}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
};

export default App;
