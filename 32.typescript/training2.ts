// [실습 2] arr1과 arr2는 같은 결과가 출력되는데, 어떤 차이가 있는지 알아보기

let arrA: any[] = [1, true, 'string'];
let arrB = [1, true, 'string']; // let arrB: (string | number | boolean)[] = [1, true, 'string']

console.log(arrA); // [ 1, true, 'string' ]
console.log(arrB); // [ 1, true, 'string' ]

arrA[0] = { name: 'apple' };
// arrB[0] = { name: 'apple' }; // Error: Type '{ name: string; }' is not assignable to type 'string | number | boolean'.
