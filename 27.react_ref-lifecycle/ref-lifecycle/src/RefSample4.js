import React, { Component } from 'react';

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.createRef()를 담기
  myInputRef = React.createRef();

  handleFocus = () => {
    console.log(this); // ..., myInputRef : {current: input}, ...
    this.myInputRef.current.focus();
  };

  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭시, input에 focusing 처리</p>
        {/* ref props 사용해서 ref 설정 */}
        <input type="text" ref={this.myInputRef} />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
