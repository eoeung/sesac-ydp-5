// ##############################################
// ########### TypeScript에만 있는 타입 ##########
// ##############################################

// 1. Tuple
// → 요소의 길이와 타입을 고정하고 싶을 때 사용
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink); // [ 'cider', 'lotte']

drink.push('얏호'); // tuple의 한계
console.log(drink); // → [ 'cider', 'lotte', '얏호' ]

//   1) readonly
//      → Tuple 에서 사용가능한 readonly
let drink2: readonly [string, number] = ['사이다', 2000];
// drink2.push('얏호'); // Error: Property 'push' does not exist on type 'readonly [string, number]'

// Tuple 예제
// [type 키워드]
// type이라는 키워드로 새로운 type을 선언
type productInfo = [number, string, number];

let product1: productInfo = [1, '로지텍', 1300000];
let product2: productInfo = [2, 'laser', 52000];
// let product3: productInfo] = [3, 'laser', 'Apple']; // type Error

console.log('##############################################');
// ##############################################

// 2. Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth);
// {
//     '0': 'admin',
//     '1': 'user',
//     '2': 'guest',
//     admin: 0,
//     user: 1,
//     guest: 2
//   }
console.log(Auth.admin);
console.log(Auth['0']); // admin
console.log(Auth[0]); // admin

console.log('---------------------------------------------');

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Cafe); // { americano: '아메리카노', latte: '카페라떼' }
console.log(Cafe.latte);

console.log('---------------------------------------------');

enum Cake {
  choco, // 0
  vanilla, // 1
  kiwi = '키위 케이크',
}

console.log(Cake); // { '0': 'choco', '1': 'vanilla', choco: 0, vanilla: 1, kiwi: '키위 케이크' }
console.log(Cake.choco);
console.log(Cake.kiwi);

console.log('##############################################');
// ##############################################

// 3. any
// 명시적으로 any라는 타입을 사용한 것이다.
let val: any;
val = true;
val = 'Hello';
val = 10000;
val = { name: 'sesac' };

// 암묵적으로 any 사용하기
let val2;
val2 = false;
val2 = 'Bye';
