import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css';

function App() {
  // 전역으로 관리되는 number 값을 가지고 온다.
  const number = useSelector((state) => state.counter.number);

  return (
    <div className="App">
      <h1>React Redux Example (Provider, store, reducer 사용)</h1>
      <h2>number : {number}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  // 전역으로 관리되는 number 값을 가지고 온다.
  const number = useSelector((state) => state.counter.number);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch(); // dispatch : 액션을 발생시킨다.
  // → dispatch(action)으로 액션 객체를 파라미터로 넣어서 호출

  return (
    <div className="Box">
      <h2>Box4 : {number}</h2>
      <h2>isVisible 값은 {isVisible ? '참' : '거짓'}이다.</h2>

      <button onClick={() => dispatch({ type: 'PLUS' })}>Plus</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>Minus</button>

      {/* [Quiz] CHANGE 버튼을 클릭하면, '참', '거짓' 글자가 토글 */}
      <button onClick={() => dispatch({ type: 'CHANGE' })}>CHANGE</button>
    </div>
  );
};

export default App;
