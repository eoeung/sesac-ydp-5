// ＊Javascript로 document요소 다루기

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

// [태그 내부 내용 변경]
// 1) innerHTML, innerText, textContent
//   - innerHTML: 태그 사용이 가능
//   - innerText, textContent: 태그가 문자(기호)로 그대로 노출

div1.innerHTML = '[innerHTML] 여기는 <b>첫 번째</b> 태그';
div2.innerText = '[innerText] 여기는 <b>첫 번째</b> 태그';
div3.textContent = '[textContent] 여기는 <b>첫 번째</b> 태그';

// [속성(attribute)값 변경]
// setAttribute(속성명, 변경할 속성 값) → 속성값을 `설정`하는 메서드
const naver = document.querySelector('#naver');
naver.setAttribute('href', 'https://www.google.com');

const pooh = document.querySelector('#pooh');
pooh.setAttribute('src', '../images/temp.png');

// [속성값 가져오기]
// getAttribute(속성명) → 속성값을 `가져`오는 메서드
console.log(document.querySelector('#pooh').getAttribute('src'));

// ※ 속성 접근(.) 연산자로도 가능
console.log(pooh.id); // pooh
console.log(naver.href); // https://www.google.com/

// ※※ 연산자로 속성에 접근하고, 할당 연산자(=)로 속성값 변경 가능
document.querySelector('#naver').href = '#';

// [CSS 지정]
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사 배열

// 1) style 속성
// style이라는 속성을 이용해서, css 지정 가능
// style.XXX (xxx: camelCase)
// list[0].style.backgroundColor = 'purple';
// list[0].style.fontSize = '20px';
// list[0].style.color = '#fff';

for (let li of list) {
  li.style.backgroundColor = 'purple';
  li.style.fontSize = '20px';
  li.style.color = '#fff';
}

// 2) classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains: 있는지 없는지 확인(true / false)
// xxx.classList.toggle: 있으면 제거, 없으면 추가

h1.classList.remove('add-h1');
h1.classList.add('add-h1');
console.log(h1.classList.contains('add-h1')); // true

if (h1.classList.contains('add-h1')) {
  h1.innerText = '하하하 add-h1 클래스가 있지요!';
} else {
  h1.innerText = '우우우 add-h1 클래스가 없지요!';
}
h1.classList.toggle('add-h1');
console.log('--------------');

// [요소 찾기]
// 계층 구조 (형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

// 1) 자식 요소
console.log(friends.children); // HTMLCollection → 유사배열
console.log(friends.children[0]);
console.log('--------------');

// 2) 부모 요소
console.log(tigger.parentNode);
console.log('--------------');

// 3) 형제 요소
console.log(tigger.previousElementSibling); // 이전 → 이요르
console.log(tigger.nextElementSibling); // 이후 → 피글렛
console.log(tigger.nextElementSibling.nextElementSibling); // 이후의 이후 → 로빈

console.log(tigger.parentNode.parentNode); // <body> → #tigger의 부모인 <ul>의 부모인 <body>
console.log('--------------');

// 4) 요소 생성, 추가, 삭제
//   (1) 요소 생성
const container = document.querySelector('.container');
const p = document.createElement('p'); // 요소 생성 → <p></p> 태그 생성
p.innerText = '새로 추가된 p 요소 입니다.';
p.style.fontWeight = 'bold';
p.style.backgroundColor = '#f00';

//   (2) 요소 추가
// - x.append(y): `x`요소의 맨 마지막 자식으로 `y`요소 추가 → 여러 개 요소 추가 가능
// - x.appendChild(y): append와 똑같으나 하나의 요소만 추가할 수 있다.
// container.append(p);
div1.appendChild(p);

const p2 = document.createElement('p');
const p3 = document.createElement('p');
p2.innerHTML = 'p2';
p3.innerHTML = 'p3';
p2.classList.add('p-2');
p3.classList.add('p-3');

container.append(p2, p3); // 여러 개 추가도 가능

// - x.prepend(y): `x`요소의 맨 처음 자식으로 `y`요소 추가
const li1 = document.createElement('li');
li1.textContent = '캉가';
friends.prepend(li1);

const li0 = document.createElement('li');
li0.innerHTML = '<b>친구들을 소개합니다.</b>';
friends.prepend(li0);

//   (3) 요소 삭제
// - x.remove(): `x`요소를 삭제
const firstLi = document.querySelector('li'); // 가장 처음있는 li선택
console.log(firstLi); // <li><b>친구들을 소개합니다.</b></li>
// firstLi.remove();

// - x.removeChild(y): `x`의 자식요소인 `y`를 삭제
const ul = firstLi.parentNode; // ul 태그
ul.removeChild(firstLi);
// firstLi.remove()와 동일한 코드이다.

console.log('--------------');
