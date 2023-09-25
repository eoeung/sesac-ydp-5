import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Test from './Test';
import Test2 from './Test2';
import Food from './Food';
import Book from './Book';
import Console from './Console';

function App() {
  function message() {
    console.log('콘솔 띄우기 성공!');
  }

  return (
    <div className="App">
      <FunctionComponent name="영등포 새싹" />
      <FunctionComponent />

      <hr />

      <ClassComponent name="SeSAC YDP" />
      <ClassComponent />

      <hr />

      <Button link="https://www.google.com">Google</Button>

      <hr />
      {/* [실습 1-1] 컴포넌트 실습 */}
      <Test></Test>

      <hr />
      {/* [실습 1-2] 컴포넌트 실습 */}
      <Test2></Test2>

      <hr />
      {/* [실습 2] props 실습 - Food */}
      <Food food="볶음밥"></Food>

      <hr />
      {/* [실습 3] props 실습 - Book */}
      <Book title="아몬드" author="손평원" price="12,600원" type="소설"></Book>

      <hr />
      {/* [실습 4] props 실습 - Console */}
      <Console text="테스트" valid={message}></Console>
    </div>
  );
}

export default App;
