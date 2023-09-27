import React, { Component } from 'react';

class Number extends Component {
  // 구 버전
  constructor() {
    super();

    this.state = {
      number: 0, // 초기값을 0으로
    };
  }

  // 신 버전
  //   state = {
  //     number: 0,
  //   };

  // 클래스 내부에 함수를 사용해서 해결
  minusOne = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        {/* 클래스 내부의 함수를 호출할 때는 this 사용 */}
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}

export default Number;
