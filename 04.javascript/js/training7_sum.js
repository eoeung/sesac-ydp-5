// 합계 구하기

function sumTwoFive(start, end) {
  const TWO = 2;
  const FIVE = 5;
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % TWO == 0 || i % FIVE == 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumTwoFive(0, 100)); // 3050;
