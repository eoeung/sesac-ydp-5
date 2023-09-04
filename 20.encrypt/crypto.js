const crypto = require('crypto'); // Node.js 내장 모듈

// 단방향 암호화 구현 → crypto 사용
// createHash()
// → 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화 할 값).digest(인코딩 방식)
  // method chaining 사용
  return crypto.createHash('sha512').update(password).digest('base64');
};

console.log(createHashedPassword('1234')); // 1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==
console.log(createHashedPassword('12345')); // NieQminDE4Ggcewn98nKl3Jhgq7Smn3dLlQ1MyLPswq7njpt8qwsIP4jQ2MR1nhWTQyNMFkwV19g4tPQSBhNeQ==
console.log(createHashedPassword('1234')); // 1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==

// '1234'에 대한 값이 똑같음
// ★ 해시 함수의 한계 ★
// Rainbow Table: 암호화된 값을 빠르게 역추적해서 원본 값을 찾아내는 기법
// ↓ ↓ ↓ ↓ ↓ ↓

// ############################################
// pbkdf2(비밀번호, salt, 반복횟수, 키의 길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수(pbkdf), 주로 비밀번호 저장 시 사용
// - buffer 형식의 데이터를 반환 → toString() 이용해 문자열로 반환

// 1. 단방향 암호화 생성 함수
function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(16).toString('base64'); // 임의의 salt 생성
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = 'SHA-512'; // 해시 알고리즘

  // hash → salt와 password를 결합해서 해시(암호화된 비밀번호)를 생성
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest) // 여기까지 반환되는 값이 buffer 형태
    .toString('base64'); // toString()을 이용해서 Buffer → string으로 변환

  return {
    salt,
    hash,
  };
}

// 2. 암호 비교 함수
// → inputPassword, salt, hash를 기반으로 새로운 해시를 생성하고, savedHash랑 비교
// 제공된 비밀번호와 원래 비밀번호가 같으면 두 해시 값도 일치
// 단방향 암호화는 복호화가 불가능하기 때문에, 입력한 값과 동일한 알고리즘을 이용해 암호화한 후에 비교
function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = 'SHA-512'; // 해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString('base64');

  console.log(`savedHash ::::: ${savedHash}`);
  console.log(`hash ::::: ${hash}`);
  return savedHash === hash;
}

// 예제
const password = '1234!';
// 비밀번호 암호화
const { salt, hash } = saltAndHashPassword(password); // salt: 솔트값, hash: 해시 값
console.log(`salt : ${salt}, hash : ${hash}`);

// 비밀번호 확인
const inputPassword = '1234!!';
const isMatch = checkPassword(inputPassword, salt, hash);
console.log(`비밀번호 일치 ${isMatch}`);
