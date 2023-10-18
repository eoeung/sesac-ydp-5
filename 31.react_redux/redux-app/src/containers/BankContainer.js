import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from '../store/bankReducer';
import { Bank } from '../components/Bank';

export const BankContainer = () => {
  const money = useSelector((state) => state.bank.money);
  const dispatch = useDispatch();

  return (
    <Bank
      money={money}
      onDeposit={(changeMoney) => dispatch(deposit(changeMoney))}
      onWithdraw={(changeMoney) => dispatch(withdraw(changeMoney))}
    />
  );
};
