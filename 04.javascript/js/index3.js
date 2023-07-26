console.log('connected!');

// 변수 선언: 변수 정의
// 변수 할당: = 연산자를 이용해 값을 넣음

// ### var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언이 가능하며, 예기치 못한 값을 반환할 수 있음
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// ### const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// - 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// ### let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

// 변수 선언 키워드 1. var
var a; // 변수 선언
console.log(a); // undefined: 값을 할당하지 않았음
a = 2; // 변수 할당
console.log(a); // 2

var a2 = 4; // 변수 선언과 할당을 동시에
console.log(a2);

// var 변수의 이상한 점
// 변수를 선언하기 전에 값을 할당
// → 장점 같이 보일 수도 있으나, 유지보수할 때 최악
aa = 123;
console.log(aa);

// 변수 선언 키워드 2. let
let b; // 변수 선언
console.log(b); // undefined

b = 7;
console.log(b); // 7

let b2 = 77; // 변수 선언 & 할당
console.log(b2); // 77

// let b2 = 78; // Identifier 'b2' has already been declared
b2 = 78; // 변수 값 재할당
console.log(b2); // 78

// 변수 선언 키워드 3. const
// → 변수 선언과 할당이 동시에 이루어져야 함
// 변하지 않는 값을 변수에 저장할 때 사용 (상수)
// const c; // SyntaxError: Missing initializer in const declaration → 변수 선언과 할당에 동시에 이루어져야함
const c = 3;
console.log(c); // 3

// c = 33; // TypeError: Assignment to constant variable
console.log(c); // 3

// 변수 이름 규칙 (=> 식별자 규칙)
// 식별자: 이름을 붙일 때 사용하는 단어 (변수명, 함수명, 클래스명, ...)

// 1) 키워드(예약어) 사용 불가능
//     - 키워드: 특별한 역할을 이미 하고 있는 단어
//         Ex) let, var, const, void, return, for, while, class, if, else, ...

// 2) 숫자로 시작할 수 없음
// 3) 특수문자: _, $만 허용
// 4) 공백 문자(space bar) 사용 할 수 없음

// (관례) 식별자에 단어 두 개 이상 작성하고 싶은 경우
// camelCase → js 관례
// Ex) redApple, isWater
// snake_case
// Ex) red_apple, is_water

/////////////////////////////////////////////////////
// 자료형(data types): 데이터(변수)의 종류가 무엇인가?
// 1. primitive types
//     - string
//     - number
//     - boolean
//     - undefined
//     - null
// 2. object types
//     - primitive type이 아닌 모든 객체

// 1) string
//     - 텍스트 정보, 따옴표 감싸야 함
//     - 숫자, 특수문자도 따옴표 안에 포함되어 있어야 함
let text = '안녕하세요.';
let text2 = '하이?';
let gender = '남자';

console.log(text);
console.log(text2);
console.log(text + text2);
console.log(text, text2, 'zzz');

// template literal (ES6): back-tick(`)과 dollar와 brace(${}) 조합으로 사용
// 문자열 내에서 변수와 상수를 간결하게 표현
console.log(`${text} 저는 moon 입니다. 저의 성별은 ${gender}입니다.`);

console.log(text + '저는 moon 입니다. 저의 성별은 ' + gender + '입니다.');

// 2) number
//     - 정수, 실수
//     - 연산이 가능 (+, -, *, /)
let num = 100;
let num2 = 0.12;
console.log(num, num2);
console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);

// 3) boolean
//     - true / false
let isWater = true;
let hasApple = false;
console.log(isWater, hasApple);

// 4) null
//     - 빈 값
// "값이 없음"을 의도적으로 명시
let temp = null;
console.log(temp);

// 5) undefined
//     - 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 하는 경우, 초기값으로 undefined를 할당
console.log(x);

// 6) Array
const fruits = ['orange', 'pineapple', 'grape', 'apple'];
// const fruits2 = new Array('orange', 'pineapple', 'grape', 'apple');
console.log(fruits); // [ 'orange', 'pineapple', 'grape', 'apple' ]
console.log(fruits[0]); // orange → fruits 배열의 위치가 0인 원소 출력

// javascript에서는 array 요소들의 자료형이 달라도 된다.
const data = [1, 'allie', false, null, undefined];
console.log(data); // [ 1, 'allie', false, null, undefined ]

// 2차원 배열(array안에 array) → 중첩
const korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];
console.log(korean); // [ [ '가', '나', '다' ], [ '라', '마', '바' ], [ '사', '아', '자' ] ]

console.log(korean[0]); // [ '가', '나', '다' ]
console.log(korean[0][2]); // 다

// Quiz 1) 배열 korean에서 '가자'글씨 출력하기
console.log(korean[0][0] + korean[2][2]); // 가자

// Quiz 2) 3차원 배열에서 숫자 8 출력
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(nums[1][0][1]); // 8

// 7) object (key: value)
const cat = {
  name: '나비',
  age: 1,
  isCute: true,
  mew: function () {
    return '냐옹';
  },
};

console.log(cat); // object 자체를 출력

// object의 속성(key)에 접근하는 방법
// (1) 점 표기법 (.)
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// (2) 대괄호 표기법 ([])
console.log(cat['name']);
// key 가 변수에 저장되어 있을 때 주로 사용
const tempVal = 'name';
console.log(cat[tempVal]); // => cat['name] => cat.name 과 동일

// typeof : 자료형 확인할 수 있는 키워드
// typeof를 사용하는 두 가지 방법
//  - typeof x
//  - typeof(x)
console.log(typeof '문자'); // string
console.log(typeof 12345); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(typeof null); // object → null이 아니라 object가 출력됐다? → js 공식적으로 인정한 언어 자체의 오류
console.log(typeof undefined); // undefined
console.log(NaN); // NaN
console.log(typeof fruits); // object
console.log(typeof cat); // object

// 형변환
// 성적 평균 구하는 프로그램 만들기
// let mathScore = prompt('수학점수 입력');
// console.log(mathScore, typeof mathScore);
// let engScore = prompt('영어점수 입력');
// console.log(engScore, typeof engScore);
// let avg = (mathScore + engScore) / 2;
// console.log(`수학과 영어의 평균 점수는 ${avg}입니다.`);
// prompt의 반환값은 문자열 또는 null이다.

// 형변환
// 1) String(value): 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1), typeof String(str1)); // true string
console.log(String(str2), typeof String(str2)); // 123 string
console.log(String(str3), typeof String(str3)); // null string

console.log(str1.toString(), typeof str1.toString()); // true string

// 2) Number(value): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = '123.9';

console.log(Number(n1), typeof Number(n1)); // 1 number
console.log(Number(n2), typeof Number(n2)); // 0 number
console.log(Number(n3), typeof Number(n3)); // 123.9 number
console.log(parseInt(n3, 10)); // 123 → n3값을 10진수의 정수로 변환
console.log(parseFloat(n3)); // 123.9

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined)); // NaN number
console.log(Number(null), typeof Number(null)); // 0 number
