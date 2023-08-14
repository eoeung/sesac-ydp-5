// ＊비동기처리
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

// → 1 3 2 순서대로 출력됨

// Ex) 편의점에 들어가서 음료수를 사고 나오는 상황
// 잘못된 예시
// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }

// function pickDrink() {
//   // 3초 기다린 후에 코드 실행 (3초 동안 고민)
//   setTimeout(function () {
//     console.log('고민 끝');
//     product = '제로 콜라';
//     price = '2000';
//   }, 3000);

// //   console.log(product, price); // undefined undefined
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 상품가격 : ${price}`);
// }

// let product;
// let price;

// goMart();
// pickDrink();
// pay(product, price);
/*
마트에 가서 어떤 음료를 살지 고민한다.
상품명 : undefined, 상품가격 : undefined
고민 끝
*/

// 올바른 예시 → 비동기처리를 동기처리로 해주면서 순서대로 진행할 수 있도록 처리해줌
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink(callback) {
  // callback 매개변수: 콜백함수를 의미
  // 3초 기다린 후에 코드 실행 (3초 동안 고민)
  setTimeout(function () {
    console.log('고민 끝');
    product = '제로 콜라';
    price = '2000';

    callback(product, price); // 매개변수로 넘긴 콜백함수를 실행
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 상품가격 : ${price}`);
}

let product;
let price;

goMart();
pickDrink(pay);
// pickDrink(function(product, price) {
//   console.log(`상품명 : ${product}, 상품가격 : ${price}`);
// });
