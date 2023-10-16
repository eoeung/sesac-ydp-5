import React from 'react';

export default class LifeCycleClass extends React.Component {
  componentDidMount() {
    console.log('Class Component | O Mount!');
  }

  componentDidUpdate() {
    console.log('Class Component | V Update!');
  }

  componentWillUnmount() {
    console.log('Class Component | X Unmount!');
  }

  render() {
    return <h1>LifeCycleClass {this.props.number}</h1>;
  }
}
