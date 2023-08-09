// 구조 분해 할당: 구조를 분해해서 할당
// 1. 객체({})
const cookie = {
  choco: '초코맛 쿠키',
  vanilla: '바닐라맛 쿠키',
  orange: '오렌지맛 쿠키',
};

console.log(cookie.choco);
console.log(cookie.vanilla);
console.log(cookie.orange);
console.log('-------------------');

// 객체 구조 분해 할당
// key값만 일치하면 알아서 할당해준다.
// 없는 key에 대한 값은 undefined로 출력됨
const { choco, chocochoco, vanilla, orange } = cookie;
/*
const { choco, vanilla, orange } = {
  choco: '초코맛 쿠키',
  vanilla: '바닐라맛 쿠키',
  orange: '오렌지맛 쿠키',
};
*/
console.log(choco);
console.log(chocochoco); // undefined
console.log(vanilla);
console.log(orange);
console.log('-------------------');

// 2. 배열([])
