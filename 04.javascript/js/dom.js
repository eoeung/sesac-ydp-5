// ＊DOM(Document Object Model)

// [document객체 실습]
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log("------------");

// [document 객체를 이용해 HTML 요소 선택]
// 1) getElementById
console.log( document.getElementById('green') );
console.log( document.getElementById('red') );
console.log("------------");

// 2) getElementsByClassName
console.log( document.getElementsByClassName('pink') ); // 유사 배열 형태
console.log( document.getElementsByClassName('pink')[1] ); // 2
console.log("------------");

// 3) getElementsByTagName
console.log( document.getElementsByTagName('div') );
console.log("------------");

// 4) getElementsByName
console.log( document.getElementsByName('id') );
console.log("------------");

// 5) querySelector(css selector)
// → 처음 발견한 하나만 가지고 온다.
console.log( document.querySelector('.pink') );
console.log( document.querySelector('.others') );
console.log( document.querySelector('#green') );
console.log( document.querySelector('div') );
console.log( document.querySelector('[name=id]') );
console.log("------------");

// 6) querySelectorAll(css selector)
// → 선택자에 해당되는 모든 요소를 선택
console.log( document.querySelectorAll('.pink') );
console.log( document.querySelectorAll('.others') );
console.log( document.querySelectorAll('#green') );
console.log( document.querySelectorAll('div') );
console.log( document.querySelectorAll('[name=id]') );

console.log( document.querySelectorAll('.pink')[0] );
console.log( document.querySelectorAll('.pink')[1] );
console.log( document.querySelectorAll('.pink')[2] );
console.log( document.querySelectorAll('.pink')[3] );
console.log("------------");

// [유사 배열]
// []식으로 생긴 배열을 의미 → 배열은 아님
// index, length는 가지고 있음
// 배열과 달리 사용 가능한 메서드가 제한되어 있음

// 1) NodeList → forEach() 가능
document.querySelectorAll('.pink').forEach(e => console.log(e));
console.log("=============");

// 2) HTMLCollection → forEach() 불가능
// → forEach()를 사용하고 싶다면, Array로 변경해줘야함
// document.getElementsByClassName('.pink').forEach(e => console.log(e)); // Uncaught TypeError: document.getElementsByClassName(...).forEach is not a function
Array.from(document.getElementsByClassName('pink')).forEach(e => console.log(e));
console.log("------------");

// [for ... of]
const pinks = document.querySelectorAll('.pink');
for(let pink of pinks){
    console.log(pink);
}
console.log("------------");