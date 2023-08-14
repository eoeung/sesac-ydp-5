// 2) promise
// function call(name) {
//   return new Promise(function (resolve, rejest) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log('back');
//       resolve('back');
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log('hell');
//       resolve('callback hell');
//     }, 1000);
//   });
// }

// call('kim')
//   .then(function (result) {
//     console.log(`${result} 반가워`);
//     return back();
//   })
//   .then(function (result) {
//     console.log(`${result} 을 실행했구나`);
//     return hell();
//   })
//   .then(function (result) {
//     console.log(`여기는 ${result}`);
//   });

// 3) async-await
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('back');
        resolve('back');
      }, 1000);
    });
  }

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

async function exec() {
  let user = await call('kim');
  console.log(`${user} 반가워`);
  let back1 = await back();
  console.log(`${back1} 을 실행했구나`);
  let hell1 = await hell();
  console.log(`여기는 ${hell1}`);
}

exec();
