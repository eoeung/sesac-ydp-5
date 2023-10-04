import React, { Component } from 'react';

class ClassBind extends Component {
  constructor(props) {
    super(props);
    console.log('constructor', this);
    this.state = {
      name: 'sesac',
    };

    // 1-1) 클래스 컴포넌트에서 이벤트 사용 - bind 사용
    //  - js에서는 this를 호출하는 방법에 의해 결정
    //    → 함수가 호출될 때 마다, this가 다를 수 있음
    // bind() : 호출되는 방법과 무관하게 this를 묶어버림
    this.printConsole = this.printConsole.bind(this); // 명시적 함수로 작성하고, 해당 코드를 주석 처리하면 this.printConsole 호출 시 'undefined'
  }

  //   1-2) bind 사용 경우
  printConsole() {
    console.log('this', this);
    console.log('this.state', this.state); // Cannot read properties of undefined (reading 'state') → this가 undefined이기 때문
  }

  // 2) 화살표 함수로 작성하면, bind가 필요하지 않음
  // 화살표 함수는 this가 없어서 잘 작동함
  //    → 선언되는 시점에 상위 스코프가 this로 바인딩
//   printConsole = () => {
//     console.log('this', this);
//     console.log('this.state', this.state);
//   };

  printConsole2 = (msg) => {
    console.log('msg ::: ', msg);
  }

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자X)</button>
        <button onClick={() => this.printConsole2('Hello World')}>printConsole(인자O)</button>
        <button onClick={this.printConsole2.bind(null, 'Hello World')}>printConsole(인자O, bind)</button>
      </div>
    );
  }
}

export default ClassBind;
