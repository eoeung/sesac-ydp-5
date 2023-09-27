import React, { Component } from 'react';

class Counter extends Component {
  // 기존 버전
//   constructor(props) {
//     // js에서 super는 부모클래스 생성자의 참조
//     // super() 호출 시, 현재 클래스가 상속받고 있는 클래스의 생성자 함수를 호출
//     // → 현재는 Component 클래스의 생성자 함수를 호출
//     super(props);

//     this.state = {
//       number: 0,
//     };
//     //   this.state1 = { this.state가 아니면 작동을 하지 않음
//     //     number: 0,
//     //   };
//   }

  // 최신 버전
    state = {
      number: 0,
    };

  render() {
    const { number } = this.state;
    return (
      <div>
        {/* <h1>{this.state.number}</h1> */}
        <h1>{number}</h1>
        <button
          onClick={
            // 직접 변경은 불가능
            // setState를 사용해야만 한다.
            () => {
              this.setState({ number: number + 1 });
            }
          }
        >
          +1
        </button>
        <button
          onClick={() => {
            alert(number);
          }}
        >
          Alert Number
        </button>
      </div>
    );
  }
}

export default Counter;
