import { useSelector, useDispatch } from 'react-redux';
import { Box1, Box2, Box3, Box4 } from '../App4';
import { plus, minus } from '../store/counterReducer';
import { toggleVisible } from '../store/isVisibleReducer';

export const Box1Container = () => {
  return <Box1 />;
};

export const Box2Container = () => {
  return <Box2 />;
};

export const Box3Container = () => {
  return <Box3 />;
};

export const Box4Container = () => {
  // 전역으로 관리되는 number 값을 가지고 온다.
  const number = useSelector((state) => state.counter.number);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch(); // dispatch : 액션을 발생시킨다.
  // → dispatch(action)으로 액션 객체를 파라미터로 넣어서 호출

  return (
    <Box4
      number={number}
      isVisible={isVisible}
      onPlus={() => dispatch(plus())}
      onMinus={() => dispatch(minus())}
      onToggleVisible={() => dispatch(toggleVisible())}
    />
  );
};
