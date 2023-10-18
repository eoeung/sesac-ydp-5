import { useState } from 'react';

export const Bank = ({ money, onDeposit, onWithdraw }) => {
  const [changeMoney, setChangeMoney] = useState(0);

  return (
    <div className="Bank">
      <h1>[실습 1] React Redux 실습(은행 → 입·출금)</h1>

      <br />
      <hr />
      <br />

      <h2>은행</h2>
      <h3>잔액 : {money}</h3>
      <input
        type="text"
        onChange={(e) => {
          setChangeMoney(+e.target.value);
        }}
      />
      <button onClick={() => onDeposit(changeMoney)}>입금</button>
      <button onClick={() => onWithdraw(changeMoney)}>출금</button>
    </div>
  );
};
