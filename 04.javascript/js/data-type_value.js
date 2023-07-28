// ＊primitive type vs object type

// [Object]
// 1) primitive type
//   - pass by value: 원시 타입은 값이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2, num === num2); // 1 1 true

num = 5;
console.log(num, num2, num === num2); // 5 1 false
console.clear();

// 2) object type
//   - pass by reference
const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3] → const로 선언했음에도 불구하고 값이 변했음 → `pass by reference`라서 가능하다.

const obj = { one: 1, two: 2 };
const obj2 = obj;

console.log(obj, obj2); // { one: 1, two: 2 } { one: 1, two: 2 }
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2); // { one: 1, two: 2, five: 5 } { one: 1, two: 2, five: 5 }
console.log(obj === obj2); // true → 같은 데이터이며 서로 같은 객체이다.
// → 참조값(메모리 주소, address)가 같은 객체임

const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4); // { one: 1, two: 2 } { one: 1, two: 2 }
console.log(obj3 === obj4); // false → 같은 데이터지만, 서로 다른 별도의 객체이다.
// → 참조값(메모리 주소, address)가 다른 객체임

obj3.five = 5;
console.log(obj3, obj4); // { one: 1, two: 2, five: 5 } { one: 1, two: 2 } → obj3에만 five 프로퍼티가 추가된 것을 볼 수 있음
console.log(obj3 === obj4); // false
console.log('------------');

// [배열]
const arr1 = [1, 2];
const arr2 = arr1;
// arr과 arr2 서로 같은 참조값을 가짐

console.log(arr1, arr2); // [ 1, 2 ] [ 1, 2 ]
console.log(arr1 === arr2); // true

arr1.push(5);
console.log(arr1, arr2); // [ 1, 2, 5 ] [ 1, 2, 5 ]
console.log(arr1 === arr2); // true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4); // [ 1, 2 ] [ 1, 2 ]
console.log(arr3 === arr4); // false

arr3.push(5);
console.log(arr3, arr4); // [ 1, 2, 5 ] [ 1, 2 ]
console.log(arr3 === arr4); // false

// obj = { one: 1 }; // TypeError: Assignment to constant variable. → 주소값을 변경하려는 행위 => const로 선언했기 때문에 불가능함
// → obj가 참조하고 있는 주소를 바꿀 수는 없다.

// [Object Literal]
// 객체 리터럴, 딕셔너리 라고 불림
// - key-value 쌍으로 이루어진 데이터 구조

// javascript에서 객체는 여러 의미가 있음
// typeof [] → object
// typeof {} → object
// 이 때의 객체는 광범위한 의미의 `객체`
