// 어떤 PLUS인지 모르기때문에, 관례로 xxx/PLUS 와 같이 기능을 넣어준다.
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// plus(), minus()
// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 설정
export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// const func = () => { foo: 1 }; // ERROR
// const func = () => ({ foo: 1 });

// state의 초기값 정의
const initialState = {
  number: 50,
};

// reducer 정의: 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
  // action 객체 : {type: 'XXX', payload: ?}
  
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
