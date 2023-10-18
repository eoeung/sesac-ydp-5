// typescript 기본 타입
var a = 1;
a = 2;
// a = 'Hello'; // type error
console.log(a);
var b = 'str';
var c = true;
var d;
var e = null;
// 암묵적으로 타입을 추론한다.
var aa = 1;
var bb = 'hi';
var cc = false;
var dd;
var ee = null;
// 배열
var number = [1, 2, 3, 4, 5];
console.log(number);
var number2 = [111, 222, 333, 444, 555];
// number2 = ['a', 'b', 'c']; // type error
console.log(number2);
var strArr = ['apple', 'banana', 'melon'];
console.log(strArr);
var strArr2 = ['aaa', 'bbb', 'ccc'];
console.log(strArr2);
// 배열 원소가 여러가지 타입을 가지고 있는 경우
// let tempArr: (string | number | boolean)[]
// → string, boolean, number 가능
var tempArr = [1, true, 'string'];
console.log(typeof tempArr); // object
var arr1 = [1, true, 'string'];
// boolean, null, number array가 원소가 될 수 있는 경우
var arr2 = [true, false, null, [1, 2, 3]];
console.log(arr2);
// 어떤 자료형이든 상관 없는 배열
var arr3;
var arr4 = [1, 2, 3, 'wow', true, null];
// console.log(arr3); // Error: Variable 'arr3' is used before being assigned
console.log(arr4);
// Object
var obj1 = {
    name: 'aa',
    age: '11',
};
console.log(obj1);
