// ＊async, await
async function f1() {
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

console.log('1 >> ', f1()); // Promise { 1 }
// → f1() 함수는 async 키워드가 붙어 있으므로 프로미스를 반환

// f1()이 반환하는 값인 `1`만을 가지고 오고 싶은 경우
f1().then(function (result) {
  console.log('2 >> ', result);
});

console.log('3 >> ', f2()); // Promise { <pending> }

f2().then(function (result) {
  console.log('4 >> ', result);
});

// 1 >>  Promise { 1 }
// 3 >>  Promise { <pending> }
// 2 >>  1
// 4 >>  1
// 비동기로 진행하기 때문에 f1(), f2()먼저 찍고, then(function(){...})이 실행됨

console.log('-----------------------');
// 1) async: 함수 앞에 붙이는 키워드
//     - 함수만 보고도 비동기 함수임을 유추하고자 함
//     - promise를 반환
// 2) await: 기다리다.
//     - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
//     - await뒤에는 프로미스가 오게 됨
//     - **async 키워드를 사용한 함수 안에서만 await 키워드를 사용 가능

// async/await 세트
// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ['사과', '레몬', '수박'];
      resolve(fruits);
      //   reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
    }, 1000);
  });
}

// 1) promise - then()메서드 사용
// fetchFruits()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// 2) async-await 키워드 사용
// 이 함수는 비동기함수이다. → Promise를 반환한다.
// fetchFruits()함수를 기다려야한다. → 함수가 끝나면 fruits에 값이 담긴다.

// 에러 처리는 try-catch 구문으로 해야함
// async function printItems() {
//   try {
//     const fruits = await fetchFruits();
//     console.log(fruits);
//   } catch (err) {
//     console.log(err);
//   }
// }

// printItems();

console.log('-------------------------');
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // setTimeout을 동기처리 하기위해서 setTimeout이 Promise 실행함수인 executor()에 들어가야함
    setTimeout(function () {
      console.log('고민 끝');
      product = '제로 콜라';
      price = 4000;

      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명 : ${product}, 상품가격 : ${price}`);
}

// goMart() → pickDrink() → pay() 순서로 진행할 함수를 하나 생성
async function exec() {
  goMart();
  await pickDrink();
  pay();
}

let product;
let price;
exec();
