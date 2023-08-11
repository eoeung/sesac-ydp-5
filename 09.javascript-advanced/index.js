// ＊구조 분해 할당

// 1. 배열 구조 분해 할당
// 순서가 중요하다.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha); // a b c undefined

let num1 = 1;
let num2 = 3;
console.log('swap 전 >', num1, num2); // 1 3
[num2, num1] = [num1, num2]; // 파이썬이랑은 다르게 [] 배열로 만들어서 해줘야 함
// → [num2, num1] = [1, 3];
console.log('swap 후 >', num1, num2); // 3 1

const lists = ['apple', 'grape'];
[f1, f2, f3] = lists;
console.log(f1, f2, f3); // apple grape undefined
[f1, f2, f3 = 'orange'] = lists; // 기본값을 지정해주는 것도 가능
console.log(f1, f2, f3); // apple grape orange

const lists2 = ['banana'];
[f1 = 'apple', f2] = lists2;
console.log(f1, f2);

console.log('--------------------------');

// 2. 객체 구조 분해
// 배열과 다르게 순서가 아니라 key값과 매핑이 되는 것이 중요하다.
const obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
// 객체 구조 분해 사용 x
console.log(obj['title'], obj['content'], obj['num']); // 엘리멘탈 재밌어요 5
console.log(obj.title, obj.content, obj.num); // 엘리멘탈 재밌어요 5

// 객체 구조 분해 사용 o
// key가 존재하지 않을 때를 대비해서 (=)연산자를 이용해 기본값을 할당할 수 있음
const { num, title, content, star=10000 } = obj;
console.log(num, title, content, star); // 5 엘리멘탈 재밌어요 10000

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); // undefined undefined undefined

// (:)을 이용하면 새 변수명으로 바꿔서 저장
// 이미 객체에 있는 key값이 먼저 다른 변수로 사용되고 있는 경우 사용
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, n2, c2); // 엘리멘탈 5 재밌어요
