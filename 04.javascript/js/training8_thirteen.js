// 13의 배수이자 홀수를 찾아보자

const find = function (num) {
  let i = 0;
  let result = [];

  while (i <= num) {
    if (i % 13 == 0 && i % 2 == 1) {
      result.push(i);
    }
    i++;
  }

  return result;
};

const num = prompt('숫자를 입력해주세요.');
document.write(`<p style="overflow-wrap: break-word"> ${find(num)} </p>`);
