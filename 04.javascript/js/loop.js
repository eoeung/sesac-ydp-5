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