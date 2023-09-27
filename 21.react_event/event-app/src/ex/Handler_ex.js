import React, { Component } from 'react';

class HandlerEx extends Component {
  state = {
    msg: 'Hello World!',
  };

  sayGoodBye = () => {
    this.setState({
      msg: 'Goodbye World!',
    });
  };

  render() {
    const { msg } = this.state;

    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={this.sayGoodBye}>굿바이 이벤트</button>
      </div>
    );
  }
}

export default HandlerEx;
