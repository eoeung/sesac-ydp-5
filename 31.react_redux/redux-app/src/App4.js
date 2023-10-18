import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css';
import {
  Box1Container,
  Box2Container,
  Box3Container,
  Box4Container,
} from './containers/BoxesContainer';

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

export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2Container />
    </div>
  );
};

export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3Container />
    </div>
  );
};

export const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4Container />
    </div>
  );
};

// Presentational Component이므로 View에 집중
// → Redux 관련된 것은 'containers' 폴더에..
export const Box4 = ({
  number,
  isVisible,
  onPlus,
  onMinus,
  onToggleVisible,
}) => {
  return (
    <div className="Box">
      <h2>Box4 : {number}</h2>
      <h2>isVisible 값은 {isVisible ? '참' : '거짓'}</h2>

      <button onClick={onPlus}>Plus</button>
      <button onClick={onMinus}>Minus</button>
      <button onClick={onToggleVisible}>Change</button>
    </div>
  );
};

export default App;
