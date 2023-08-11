// [실습 2] Spread 연산자 사용하기
const word1 = 'abc';
const word2 = 'xyz';

const finalWord = [...word1, ...word2];
console.log(finalWord); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]
