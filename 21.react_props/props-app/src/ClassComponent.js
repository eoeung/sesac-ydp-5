import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class ClassComponent extends React.Component {
class ClassComponent extends Component {
  student = 'eoeung22';

  // 클래스형 컴포넌트는 render 함수 필수
  render() {
    const { name } = this.props;
    // console.log(this.props);

    return (
      <div>
        <h1>Hi {this.student}!</h1>
        <p>여기는 ClassComponent</p>
        <p>
          {/* 새로운 컴포넌트의 이름은 <strong>{this.props.name}</strong> */}
          새로운 컴포넌트의 이름은 <strong>{name}</strong>
        </p>
      </div>
    );
  }

  //   // ClassComponent 안에서 defaultProps 선언
  //   static defaultProps = {
  //     name: 'Default nnname',
  //   };

  //   // ClassComponent 안에서 propTypes 선언
  //   static propTypes = {
  //     name: PropTypes.string,
  //   };
}

ClassComponent.defaultProps = {
  name: 'Default nnname', // Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `ClassComponent`, expected `string`.
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired, // Warning: Failed prop type: The prop `name` is marked as required in `ClassComponent`, but its value is `undefined`.
};

export default ClassComponent;
