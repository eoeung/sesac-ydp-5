const DEPOSIT = 'bank/DEPOSIT'; // 입금
const WITHDRAW = 'bank/WITHDRAW'; // 출금

export const deposit = (payload) => ({ type: DEPOSIT, payload }); // 입금
export const withdraw = (payload) => ({ type: WITHDRAW, payload }); // 출금

// 처음 잔액은 0원
const initialState = {
  money: 0,
};

const bankReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === DEPOSIT) {
    return { money: state.money + payload };
  } else if (type === WITHDRAW) {
    return { money: state.money - payload };

  // 이 부분이 없어서 계속 에러 발생
  // 최종적으로 Reducer를 거쳤을 때, 초기값이 undefined면 에러를 내보내는 듯
  } else {
    return { money: state.money };
  }
};

export default bankReducer;
