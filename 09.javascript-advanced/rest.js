// ＊rest 파라미터

// 1. rest in function
const values = [10, 20, 30];

function get(a, ...rest) {
  console.log(`a >> ${a}`);
  console.log(`rest >> ${rest}`);
}

get(values);
// a >> 10,20,30
// rest >>
get(...values);
// a >> 10
// rest >> 20,30

// 2. rest in object
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor, rest); // choco { company: 'lotte', price: 1000 }

// 3. rest in array
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one, two, ...rest2] = number;
console.log(one); // 1
console.log(two); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]
