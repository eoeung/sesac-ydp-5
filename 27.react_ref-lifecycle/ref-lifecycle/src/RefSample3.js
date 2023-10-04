import React, { Component } from 'react';

export default class RefSample3 extends Component {
  handleFocus = () => {
    console.log(this); // 컴포넌트 자기 자신을 의미 // ..., myInputRef : input, ...
    this.myInputRef.focus();
  };

  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시, input에 focusing 처리</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInputRef = ref;
          }}
        />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
