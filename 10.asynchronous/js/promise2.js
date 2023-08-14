// 3. promise chaining
// (4 + 3) * 2 - 1 = 13
// sub(mul(add(4, 3), 2), 1): add → mul → sub
// ※ 비동기처리를 동기처리 하기 위한 것을 봐야하기 때문에 setTimeout()을 사용한다.

// case 1. callback()
// function add(x, y, callback) {
//   setTimeout(function () {
//     const result = x + y;
//     callback(result); // 마지막에 전달받는 콜백에 x+y값을 넘겨준다. → x+y 후에 연산할 수 있도록 한다.
//   }, 1000);
// }

// function mul(x, callback) {
//   setTimeout(function () {
//     const result = x * 2;
//     callback(result);
//   }, 700);
// }

// function sub(x, callback) {
//   setTimeout(function () {
//     const result = x - 1;
//     callback(result);
//   }, 500);
// }

// add(3, 4, function (x) {
//   console.log(`1 : ${x}`);

//   mul(x, function (y) {
//     console.log(`2 : ${y}`);

//     sub(y, function (z) {
//       console.log(`3 : ${z}`);
//     });
//   });
// });

// case 2. Promise Chaining
function add(x, y) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = x + y;
      resolve(result);
    }, 1000);
  });
}

function mul(x) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = x * 2;
      //   resolve(result);
      reject(new Error('의도적으로 발생시킨 에러'));
    }, 700);
  });
}

function sub(x) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = x - 1;
      resolve(result);
    }, 500);
  });
}

add(3, 4)
  .then(function (result) {
    console.log(`1 : ${result}`);
    return mul(result);
  })
  .then(function (result) {
    console.log(`2 : ${result}`);
    return sub(result);
  })
  .then(function (result) {
    console.log(`3 : ${result}`);
  })
  .catch(function (error) { // add(), mul(), sub() 어디서든 에러가 발생하면 catch()로 오게 된다.
    console.log(error);
  });
