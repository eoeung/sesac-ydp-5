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

console.log('##############################################');
// ##############################################
// 4. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'ming',
  isPassed: true,
  // addr: 'seoul', // Error
  // Type '{ name: string; isPassed: true; addr: string; }' is not assignable to type 'Student'.
  // Object literal may only specify known properties, and 'addr' does not exist in type 'Student'.
};

const student2: object = {
  name: 'ming2',
  isPassed: true,
  addr: 'seoul',
};

// 1) 학년/학점 정의할 때, type 키워드 사용
// A+, A, B, C, D, F
type typeScore = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

// 2) 학년/학점 정의할 때, enum 키워드 사용
enum EnumScore {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

// ※ type과 enum의 차이
type Breakpoint1 = 500 | 700 | 1000;
enum Breakpoint2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

// 1) type
// const width1: Breakpoint1 = 500;
// 500이라는 값이 어떤 것을 의미하는지 알 수 없음

// 2) enum
// enum은 값 사이에 관계가 있는 경우, 사용하기 편할 수 있음
const width2: Breakpoint2 = Breakpoint2.SM;

// [interface 상속]
interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // backNumber라는 key는 있어도 되고 없어도 됨
  // [grade: number]: string; // key로 number형을 지정하고 싶은 경우
  // → 타입을 string으로 설정했기 때문에, 내가 원하지 않는 값도 할당될 수 있음

  // #####################
  // 1) type 키워드
  // #####################
  // [grade: number]: typeScore; // key로 number형을 지정하고 싶은 경우

  // #####################
  // 2) enum 키워드
  // #####################
  [grade: number]: EnumScore; // key로 number형을 지정하고 싶은 경우
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'picture',
  height: 193,
  backNumber: 17,

  // #####################
  // 1) type 키워드 사용
  // #####################
  // 1: 'A+', // 1학년: A+
  // 2: 'NP', // ERROR
  // 타입을 string으로 설정했기 때문에, 내가 원하지 않는 값도 할당될 수 있음
  // 2: 'A', // 2학년: A

  // #####################
  // 2) enum 키워드 사용
  // #####################
  1: EnumScore.Aplus,
  2: EnumScore.A,
};
// Student라는 인터페이스를 상속받기 때문에 에러가 발생하지 않음
console.log(otani);

otani.position = '투수';
otani['height'] = 200;
// otani.backNumber = 16; // Error: Cannot assign to 'backNumber' because it is a read-only property.
console.log(otani);
// position: 'picture' → 'position: '투수'로 바뀜
// height: 193 → height: 200으로 바뀜

console.log('##############################################');
// ##############################################

// 5. 교차 타입: 2개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

// type 키워드 사용
type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  // const toyCar: Toy & Car = { 와 동일
  name: 'tayo',
  start() {
    console.log('출발');
  },
  color: 'blue',
  price: 5000,
};

// 6. type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let daniel: Person = {
  name: 'danial',
  age: 20,
  // gender: 'f', // Error: Type '"f"' is not assignable to type 'Gender'. Did you mean '"F"'?
  gender: 'F',
  like: ['minji', 'hani'],
};