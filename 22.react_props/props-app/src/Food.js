import PropTypes from 'prop-types';

const Food = (props) => {
  const { food } = props;
  const font = {
    color: 'red',
    fontSize: '32px',
  };

  return (
    <div>
      <p>
        내가 가장 좋아하는 음식은 <span style={font}>{food}</span>입니다. 맛있습니다.
      </p>
    </div>
  );
};

Food.defaultProps = {
  food: '떡볶이',
};

Food.propTypes = {
  food: PropTypes.string,
};

export default Food;
