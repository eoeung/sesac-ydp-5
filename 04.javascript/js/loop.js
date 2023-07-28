// ＊반복문

// [for문 - 기초]
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('--------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('--------');

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복변수 i 값)
  sum = sum + i;
  //   console.log(i, sum);
}
console.log(sum);
console.log('--------');

// [for문 - 배열]
const fruits = ['사과', '배', '포도', '망고'];
for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1~20 중에서 짝수 합 구하기
let sum2 = 0;
// 1~20까지 숫자를 반복
// 현재 반복 숫자가 짝수라면 sum2에 더한다.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) sum2 += i;
}
console.log(sum2); // 110

// [while문]
let idx = 0;
while (idx < 10) {
  console.log('안녕', idx);
  idx = idx + 1; // idx += 1
}
console.log('--------');

let idx2 = 0;
while (true) {
  // 의도적으로 무한루프
  // (무한루프에 빠졌다면 브라우저 닫고 다시 실행하기)
  console.log('안녕', idx2);
  idx2 = idx2 + 1; // idx2 += 1

  // 무한 루프를 빠져나오는 조건
  if (idx2 === 10) {
    break;
  }
}
console.log('--------');

// continue를 이용해 0~99까지 중에서 홀수의 합
let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue; // 이번 반복회차는 스킵할게용
  }

  sum3 = sum3 + i;
  console.log(i, sum3);
}
console.log(sum3);
console.log('--------');

// [배열에서 반복문 사용하기]
// 1) 기본 for문
// 2) for ... of
// 3) forEach()
// 4) for ... in

const arr3 = [1, 2, 5, 6, 7];
const alphabets = ['a', 'b', 'c', 'd', 'F', 'G'];

// 1) 기본 for문
for (let a = 0; a < arr3.length; a++) {
  console.log(arr3[a]);
}

// 2) for ... of
for (let alpha of alphabets) {
  console.log(alpha);
}

// 3) forEach()
alphabets.forEach(function (alpha, idx) {
  // callback(currentValue [, index [, thisArr]])
  console.log(alpha, idx);
});

// 4) for ... in
//   - 객체의 key를 반복할 수 있는 구문
const me = { name: 'moon', gender: 'm', hobby: 'sleep' };
for (let key in me) {
  console.log(key, me[key], me.key);
}
// name moon undefined
// gender m undefined
// hobby sleep undefined
// 'key'라는 key값이 없기 때문에, me.key는 undefined 출력됨
// → me.key는 key라는 문자열을 의미한다는 것을 알 수 있음

console.log('--------');

// 배열의 합
let numbers = [1, 2, 3, 4, 5, 6];
let sum111 = 0;
let sum222 = 0;
let sum333 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum111 += numbers[i];
}
console.log(sum111); // 21

for (let num of numbers) {
  sum222 += num;
}
console.log(sum222); // 21

numbers.forEach((num) => (sum333 += num));
console.log(sum333); // 21
console.log('--------');

// map(), filter(), find() 메서드
// 1) map(): 배열 내 모든 원소에 대해 연산한 결과를 모아 `새로운 배열`을 반환
const arr4 = [1, 2, 3, 4, 5];
const mapResult = arr4.map(function (e) {
  return e * 2;
});
console.log(mapResult); // [ 2, 4, 6, 8, 10 ]

// 2) filter(): 주어진 함수의 조건에 만족하는 원소들만 `새로운 배열`로 담아서 반환
// const filterResult = arr4.filter(function(e){
//   return e > 2;
// });

const filterResult = arr4.filter((e) => e > 2);
console.log(filterResult); // [3, 4, 5]

// 3) find(): 특정 조건을 만족하는 첫 번째 요소 반환
const findResult = arr4.find((e) => e > 2);
console.log(findResult, typeof findResult); // 3, number
console.log('--------');

// [Quiz]
// 1) 글자 수가 3개 초과인 단어만 필터링
// 2) 글자에 'a' 문자가 포함되어 있는 단어만 필터링
const words = ['dog', 'cat', 'rabbit', 'apple', 'wow'];

// 1)
const threeOver = words.filter((e) => e.length > 3);
console.log(threeOver); // [ 'rabbit', 'apple' ]

// 2)
const includesA = words.filter((e) => e.includes('a'));
const indexOfA = words.filter((e) => e.indexOf('a') > -1);
console.log(includesA); // [ 'cat', 'rabbit', 'apple' ]
console.log(indexOfA); // [ 'cat', 'rabbit', 'apple' ]
