// ＊내장 메서드

// [문자열 내장 메서드]
let str1 = 'Strawberry Moon';
let str2 = '    Strawberry Moon    ';

// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// 문자열의 길이 (length는 메서드가 아닌 "속성")
console.log(str1.length);
console.log(str2.length);

// 대/소문자 변환
console.log(str1.toUpperCase()); // STRAWBERRY MOON
console.log(str1.toLowerCase()); // strawberry moon

// 양끝 공백 제거
console.log(str2.trim()); // Strawberry Moon
console.log(str2.trim().length); // 15
// str2.trim().length → 메서드 체이닝 → 여러 메서드를 연결해서 사용
// → return값이 있는 경우만 가능

// indexOf() 글자 위치 찾기
console.log(str1.indexOf('w'));
console.log(str1.indexOf('r'));
console.log(str1.indexOf('x')); // 존재하지 않는 문자에 대해 검색하면 -1 반환

// slice(): 문자열 자르기
console.log(str1.slice(11)); // Moon → 11부터 끝까지
console.log(str1.slice(1, 5)); // traw → 1부터 (5-1)까지

// replace(): 문자열 바꾸기
// replaceAll(): 문자열 모두 바꾸기
console.log(str1.replace('a', 'x')); // Strxwberry Moon
console.log(str1.replace('r', 'x')); // Stxawberry Moon
// → replace() 메서드는 재할당을 하지 않음
console.log(str1.replaceAll('r', 'x')); // Stxawbexxy Moon

// split(): 문자열 쪼개기(배열로 반환)
let date = '23.03.10';
console.log(date.split('.')); // [ '23', '03', '10' ]
console.log(date.split('3')); // [ '2', '.0', '.10' ]

// repeat(n): n만큼 문자열을 반복
console.log('hi'.repeat(5)); // hihihihihi

// [배열 내장 메서드]
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quokka', 'rabbit', 'puppy', 'hamster'];

// 배열에 값 추가
arr1[5] = 6; // arr1 배열의 5번 인덱스에 6이라는 값을 추가
arr1[8] = 100; // 인덱스를 건너뛰면 빈 값(empty)가 들어감
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, <2 empty items>, 100 ]

// push(): 배열의 마지막에 값을 추가
arr1.push(6);
arr1.push(10);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, <2 empty items>, 100, 6, 10 ]

// pop(): 배열의 마지막 요소 제거/반환도 해줌
arr1.pop();
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, <2 empty items>, 100, 6 ]

// unshift(): 배열의 처음에 값을 추가
arr1.unshift('cat');
console.log(arr1); // [ 'cat', 1, 2, 3, 4, 5, 6, <2 empty items>, 100, 6 ]

// shift(): 배열의 처음 요소 제거/반환
arr1.shift();
console.log(arr1); // [ 1, 2, 3, 4, 5, 6, <2 empty items>, 100, 6 ]

// includes(value): value값이 있는지 배열에서 검사
console.log(arr2.includes('quokka')); // true
console.log(arr2.includes('apple')); // false

// reverse(): 배열을 뒤집음
console.log(arr1.reverse()); // [ 6, 100, <2 empty items>, 6, 5, 4, 3, 2, 1 ]
console.log(arr1); // [ 6, 100, <2 empty items>, 6, 5, 4, 3, 2, 1 ]
// → reverse() 메서드를 사용하면, 기존 배열이 변경된다.

// join(separator): separator로 배열 요소로 합침
console.log(arr2); // [ 'quokka', 'rabbit', 'puppy', 'hamster' ]
console.log(arr2.join('')); // quokkarabbitpuppyhamster
console.log(arr2.join('-')); // quokka-rabbit-puppy-hamster

// 메서드 체이닝(method chaining)
console.log('hello'.split('')); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log('hello'.split('').reverse()); // [ 'o', 'l', 'l', 'e', 'h' ]
console.log('hello'.split('').reverse().join()); // o,l,l,e,h
