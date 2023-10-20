// overloading
function sum(a: string, b: string): string; // 선언부
function sum(a: number, b: number): number; // 선언부
// 두 인자 모두 string과 number를 받는 똑같은 함수 sum을 선언

function sum(a: any, b: any): any {
  // 구현부 → 이미 위에서 어떻게 할 것인지 모두 선언했으므로, 명시적으로 any를 선언해준다.
  return a + b;
}

console.log(sum('가', '나')); // 가나
console.log(sum(10, 20)); // 30
// console.log(sum(10, '얏호')); // Error
// No overload matches this call.
//   Overload 1 of 2, '(a: string, b: string): string', gave the following error.
//   Argument of type 'number' is not assignable to parameter of type 'string'.
// Overload 2 of 2, '(a: number, b: number): number', gave the following error.
//   Argument of type 'string' is not assignable to parameter of type 'number'.
