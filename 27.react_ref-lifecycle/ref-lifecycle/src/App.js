import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
import RefTraining from './RefTraining';

function App() {
  return (
    <div className="App">
      {/* 1. 함수형 컴포넌트 : useRef()로 DOM요소에 직접 접근 */}
      <RefSample1 />

      <br/><br/><br/><hr/><br/><br/><br/>

      {/* 2. 함수형 컴포넌트 : useRef()로 로컬변수 사용 */}
      <RefSample2 />

      <br/><br/><br/><hr/><br/><br/><br/>

      {/* 3. 클래스형 컴포넌트 : ref 사용 방법
              1) 콜백함수 (ref) => {...}
      */}
      <RefSample3 />

      <br/><br/><br/><hr/><br/><br/><br/>

      {/* 4. 클래스형 컴포넌트 : ref 사용 방법
              1) 내장함수 (createRef())
      */}
      <RefSample4 />

      <br/><br/><br/><hr/><br/><br/><br/>

      {/* [실습 1] ref 실습 */}
      <RefTraining />
    </div>
  );
}

export default App;
