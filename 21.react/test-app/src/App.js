// import logo from './logo.svg';
import './App.css';
import Larva from './Larva';

function App() {
  // const name = 'eoeung';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };

  // [실습 2] 반려동물
  const name = 'eoeung';
  const animal = '강아지';

  // [실습 4] and 연산자
  const a = 100;
  const b = 1;

  // [실습 5] Hello World
  const title = 'Hello World';

  // [실습 6] 무지개
  const red = {
    backgroundColor: 'red',
    width: '50px',
    height: '50px',
  }
  const orange = {
    backgroundColor: 'orange',
    width: '50px',
    height: '100px',
  }
  const yellow = {
    backgroundColor: 'yellow',
    width: '50px',
    height: '150px',
  }
  const green = {
    backgroundColor: 'green',
    width: '50px',
    height: '200px',
  }
  const blue = {
    backgroundColor: 'blue',
    width: '50px',
    height: '250px',
  }
  const navy = {
    backgroundColor: 'navy',
    width: '50px',
    height: '300px',
  }
  const purple = {
    backgroundColor: 'purple',
    width: '50px',
    height: '350px',
  }

  return (
    // ############### fragments ###############
    // <>
    // <div></div>
    // <span></span>
    // </>

    // ############### 자동 생성 코드 ###############
    <div className="App">
      {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
      {/* ############### JSX 문법 ############### */}
      {/* 하나로 감싸인 요소 */}
      <>
        {/* JS 문법 사용
            - {}로 감싸면 js 표현식 사용 가능
            - {}안에서 삼항 연산자 사용 가능 (if, for문 사용 불가)
       */}
        {/* <div>{name} 안녕?</div>
        <div>
          {student === 'sesac' ? (
            <span>새싹인</span>
          ) : (
            <span>새싹이 뭐지?</span>
          )}
        </div> */}

        {/* 3. style 속성
                - 리액트에서 dom 요소에 스타일 적용시, 문자열 x → 객체 사용
                - 스타일 이름 중에 하이픈(-)포함 시, camelCase로 작성해야 함(Ex. backgroundColor)
         */}

        {/* <div style={styles}>스타일 적용</div>
        <div
          style={{ backgroundColor: 'black', color: 'white', fontSize: '24px' }}
        >
          스타일 적용2
        </div> */}

        {/* 4. className 사용
                - class 속성이 아닌 className 속성을 사용 (Ex. <div className="App">)

            5. 종료 태그가 없는 태그 사용
              - 기존의 종료 태그가 없는 태그를 사용하더라도, 종료 태그를 반드시 작성해야 함
              or self closing
              (Ex. <input></input> or <input />)

            6. 주석
              - // : jsx 외부 주석
              - {/* *／}: jsx 내부 주석
        */}
      </>
      {/* [실습] 코딩온 사이트 실습 진행 */}
      {/* [실습 1] div 태그 */}
      {/* <div>
        이것은 div입니다.
        <h3>이것은 div 안에 있는 h3태그 입니다.</h3>
      </div> */}

      {/* [실습 2] 반려동물 */}
      {/* <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>{name}은 {animal}입니다.</h2> */}

      {/* [실습 3] 삼항연산자 */}
      {/* <div>{3 + 5 === 8 ? (<h4>정답입니다!</h4>) : (<h4>오답입니다!</h4>)}</div> */}

      {/* [실습 4] and 연산자 */}
      {/* a = 100, b = 1 */}
      {/* <div>{a > b && <h4>a가 b보다 큽니다.</h4>}</div> */}

      {/* [실습 5] Hello World */}
      {/* <>
        <div className="test">
          <h2>{title}</h2>
        </div>
        아이디 : <input type="text" className="input" /> <br/>
        비밀번호 : <input type="password" className="input" />
      </> */}

      {/* [실습 6] 무지개 */}
      <div style={{display: 'flex'}}>
        <div style={red}></div>
        <div style={orange}></div>
        <div style={yellow}></div>
        <div style={green}></div>
        <div style={blue}></div>
        <div style={navy}></div>
        <div style={purple}></div>
      </div>

      {/* [실습 7] 애벌레 React로 만들기 */}
      {/* <Larva /> */}
    </div>
  );
}

export default App;
