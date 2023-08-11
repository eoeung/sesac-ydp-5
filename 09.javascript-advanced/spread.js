// ＊spread 연산자
// - 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다.)
// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); // [ 1, 2, 3, 4, 5 ]

// spread in string
const c = [...'Hello'];
const d = 'Hello'.split('');
console.log(c); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(d); // [ 'H', 'e', 'l', 'l', 'o' ]

// spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};

// const potatoChip = {
//   base: 'chip',
//   company: 'lotte',
//   flavor: 'potato',
// };
const potatoChip = {
  ...chip,
  flavor: 'potato',
};

// const sweetPotatoChip = {
//   base: 'chip',
//   company: 'lotte',
//   flavor: 'sweet potato',
// };
const sweetPotatoChip = {
  ...chip,
  flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);
