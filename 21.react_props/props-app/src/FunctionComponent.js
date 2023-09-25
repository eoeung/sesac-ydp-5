import PropTypes from 'prop-types';

export default function FunctionComponent(props) {
// export default function FunctionComponent({name}) { // 구조분해할당 자체를 파라미터로 전달
  const student = 'eoeung';
  const { name } = props;

  return (
    <div>
      <h1>Hi {student}!</h1>
      <p>여기는 FunctionComponent</p>
      <p>
        {/* 새로운 컴포넌트의 이름은 <strong>{props.name}</strong> */}
        새로운 컴포넌트의 이름은 <strong>{name}</strong>
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: 'Default Name',
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
};
