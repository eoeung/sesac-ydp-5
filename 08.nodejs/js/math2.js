// math module
// add(): 더하기 함수를 정의한 파일

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const PI = Math.PI;
const E = Math.E;

// 내보내기
// [Case 1]
// 객체로 내보내는 방법
module.exports = {
  add,
  sub,
  mul,
  div,
  PI,
  E,
};
/*
＊key-value가 동일하면 위 처럼 중복없이 하나만 작성할 수 있음
module.exports = {
  add: add,
  PI: PI,
  E: E,
};
*/

// [Case 2]
// 하나씩 내보내기
// → module.exports는 하나만 내보낼 수 있음
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.E = E;

// [Case 3]
// Case 2를 더 간단하게
// exports.add = add;
// exports.PI = PI;
// exports.E = E;