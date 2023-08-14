// ＊Promise
// - 비동기함수를 동기처리 하기 위해 만든 객체
// - 미래에 실패/성공에 대한 결과 값을 "약속"한다는 의미
// - 성공, 실패를 분리해서 반환
//     - 성공, 실패에 대한 결과는 then(), catch()메서드로 이어받아서 처리가 가능
// → 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// 1. promise를 생성하는 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    // Promise객체는 executor(실행 함수)가 존재하고, 매개변수는 resolve, reject를 받음
    if (flag) {
      resolve(
        `현재 프로미스의 상태는 fulfilled(이행)! then()으로 연결, 이 때 flag 값은 ${flag}`
      );
    } else {
      reject(
        `현재 프로미스의 상태는 rejected(거절)! catch()로 연결, 이 때 flag 값은 ${flag}`
      );
    }
  });
}

// 2. promise를 사용하는 코드
promise1(false) // false
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

promise1(5 < 3) // false
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

promise1(true) // true
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

promise1(5 > 3) // true
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

promise1(10 > 5) // true
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 2. 프로미스 예제
// index.js에서 callback()을 이용해 동기처리한 것을 promise를 이용해 동기처리
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // setTimeout을 동기처리 하기위해서 setTimeout이 Promise 실행함수인 executor()에 들어가야함
    setTimeout(function () {
      console.log('고민 끝');
      product = '제로 콜라';
      //   price = 2000;
      price = 4000;

      //   resolve();

      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
  // 3초 기다린 후에 코드 실행 (3초 동안 고민)
}

function pay() {
  console.log(`상품명 : ${product}, 상품가격 : ${price}`);
}

function noPay() {
  console.log(`금액 부족`);
}

let product;
let price;

goMart();
pickDrink().then(pay).catch(noPay);
// pickDrink().then(function(){
//     pay();
// })
