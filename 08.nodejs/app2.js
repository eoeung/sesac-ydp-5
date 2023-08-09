// 모듈 불러오기
// (객체) 구조 분해 할당
const { add, E, PI } = require('./math2');

console.log(add(3, 5)); // 8
console.log(E);
console.log(PI);
console.log('------------------');

// 하나일 때는 변수 이름 바꾸는 것도 가능
const add2 = require('./math');
console.log(add2(1, 1)); // 2

const hello = require('./math');
console.log(hello(2, 2)); // 4
