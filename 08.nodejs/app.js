// 모듈 불러오기
const add = require('./math');
const math = require('./math2');

// console.log(add); // [Function: add]
console.log(add(1, 2)); // 3
console.log('---------------------');

console.log(math, typeof math); // { add: [Function: add], PI: 3.141592653589793, E: 2.718281828459045 } object
console.log(math.E); // 2.718281828459045
console.log(math.PI); // 3.141592653589793
// console.log(math[PI]); // ReferenceError: PI is not defined
console.log(math['PI']); // 3.141592653589793
console.log('---------------------');

// Quiz. 뺄셈, 곱셈, 나눗셈 함수 구현
console.log(math.sub(100, 99)); // 1
console.log(math.mul(2, 2)); // 4
console.log(math.div(50, 5)); // 10
