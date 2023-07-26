// ＊함수

// [함수의 종류]
// 1) 내장 함수
// - 이미 언어에서 자주 쓰는 기능을 만들어 놓은 함수
//   Ex) alert(), confirm(), prompt(), ...

// 2) 사용자 정의 함수
// - 개발자가 자주 쓰이는 기능을 커스터마이징하여 만든 함수

// [함수 선언 방식]
// 1) 명시적 함수 선언(함수 선언문)
function helloWorld() {
  console.log('Hello World! 1');
}
helloWorld(); // Hello World! 1

function helloWorld2() {
  return 'Hello World! 2';
}
// return (반환값)
// : 함수 내부(body, block) 코드의 "최종 결과값"
// 최종 결과값을 저장하고 보관하기위한 키워드
// return 키워드를 만나면 함수 실행 중단 (return 다음에 코드 더 작성 의미 x)
console.log(helloWorld2()); // Hello World! 2

// 2) 함수 표현식
// - 함수를 변수에 저장하는 형태
const helloWorld3 = function () {
  console.log('Hello World! 3');
};

const helloWorld4 = function () {
  return 'Hello World! 4';
};

helloWorld3(); // Hello World! 3
console.log(helloWorld4()); // Hello World! 4
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
// => 함수는 "여러 번" 호출 가능!!!!!

// 3) 화살표 함수(arrow function)
// - 함수 선언 문법이 간결해짐

const myFunc1 = (x) => x;
// 아래 함수를 화살표 함수로 바꾼 것임
// function myFunc1(x){
//     return x;
// }

const mySum = (x, y) => x + y;
console.log(mySum(5, 2)); // 7

// ※ return을 생략할 수 있지만, body({...}) 내에서 return 구문만 있을 때 생략이 가능
// 코드가 길어지면 return 명시해줘야함
const myMulti = (a, b) => {
  let result = a * b;
  return result;
};
console.log(myMulti(1, 2)); // 2
// const myMulti = (a, b) => let result = a * b; return result;
// → body내에 return 구문만 있는 것이 아니므로 위 코드는 에러 발생

// [매개변수가 있는 함수]
function hello1(text) {
  return text;
}

console.log(hello1('안녕!!!'));

const apple = '사과는 맛있군';
console.log(hello1(apple));

const myNumber = 8;
console.log(hello1(myNumber));

function hello2(text, name) {
  //   return text + ' ' + name;
  return `${text} ${name}`;
}
console.log(hello2('안녕!!', 'John!!'));
console.log(hello2('잘가~~', 'John!!'));

function hello3(text, name) {
  console.log(`${text} ${name}`);
}
hello3('반갑당', '얘들아');

// [호이스팅(hoisting)] → 함수, 변수
// - "끌어올리다"라는 사전적 의미를 지니고 있음
// - 함수에서는 "함수 선언문"이 호이스팅 대상이 됨
// - 코드가 실행되기 전에 [함수 | 변수] 선언을 최상단으로 끌어올리는 현상
// ※ 변수에서는 "var" 키워드로 선언한 변수만이 호이스팅의 대상(let, const는 호이스팅 대상이 아님)

// 1) 함수 선언문
// - 함수 호출을 함수 정의보다 먼저했음에도 불구하고, 값이 정상적으로 나온다.
myHello(); // Hello~~
function myHello() {
  console.log('Hello~~');
}

// 2) 함수 표현식
// - 에러 발생
// myHello2(); // ReferenceError: Cannot access 'myHello2' before initialization
const myHello2 = function () {
  console.log('Hello~~ 2');
};
