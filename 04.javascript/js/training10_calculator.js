// [실습 10] 간단 계산기 만들기

// 1. submit 아무 동작 안하도록 막기
const calcForm = document.querySelector('#calcForm');
calcForm.addEventListener('submit', function (e) {
  e.preventDefault();

  calc();
});

// 2. `계산하기`버튼을 클릭하면 계산하기
function calc() {
  const operObj = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };

  const param1 = document.querySelector('#param1'); // 값 1
  const param2 = document.querySelector('#param2'); // 값 2
  const oper = document.querySelector('#oper'); // 연산자
  const result = document.querySelector('#result'); // 결과

  const param1Val = parseInt(param1.value, 10);
  const param2Val = parseInt(param2.value, 10);

  const val = operObj[oper.value](param1Val, param2Val);
  console.log(val);
  result.value = val;
}
