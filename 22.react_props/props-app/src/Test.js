import React, { Component } from 'react';

class Test extends Component {
  name = 'eoeung';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12px',
  };

  render() {
    return <div style={this.my_style}>{this.name}</div>;
  }
}

export default Test;