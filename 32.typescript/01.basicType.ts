// typescript 기본 타입
let a: number = 1;
a = 2;
// a = 'Hello'; // type error
console.log(a);

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

// 암묵적으로 타입을 추론한다.
let aa = 1;
let bb = 'hi';
let cc = false;
let dd;
let ee = null;

// 배열
let number = [1, 2, 3, 4, 5];
console.log(number);

let number2: number[] = [111, 222, 333, 444, 555];
// number2 = ['a', 'b', 'c']; // type error
console.log(number2);

let strArr: Array<string> = ['apple', 'banana', 'melon'];
console.log(strArr);

let strArr2: string[] = ['aaa', 'bbb', 'ccc'];
console.log(strArr2);

// 배열 원소가 여러가지 타입을 가지고 있는 경우
// let tempArr: (string | number | boolean)[]
// → string, boolean, number 가능
let tempArr = [1, true, 'string'];
console.log(typeof tempArr); // object

let arr1: (number | boolean | string)[] = [1, true, 'string'];

// boolean, null, number array가 원소가 될 수 있는 경우
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];
console.log(arr2);

// 어떤 자료형이든 상관 없는 배열
let arr3: any[];
let arr4: any[] = [1, 2, 3, 'wow', true, null];
// console.log(arr3); // Error: Variable 'arr3' is used before being assigned
console.log(arr4);

// Object
let obj1: object = {
  name: 'aa',
  age: '11',
};
console.log(obj1);
