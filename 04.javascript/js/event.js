// ＊이벤트
// javascript에서 이벤트는 어떤 사건을 의미
// Ex) 버튼 클릭, 웹 페이지 로드 등, ...

// 이벤트에 함수 등록 방법 2가지
// 1) HTML 상에서 onXXX 속성으로 등록
// 2) js에서 listener를 사용해 등록

// 1) onXXX 속성으로 등록
function clickH1() {
  alert('제목 클릭');
}

// 2) addEventListener
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.querySelector('#container');

// addEventListener(이벤트 종류, 이벤트가 발생했을 때 함수)
btn1.addEventListener('click', function () {
  alert('버튼 1을 클릭하셨습니다.');
});
btn1.addEventListener('mouseover', function () {
  btn1.style.backgroundColor = 'aqua';
});
btn1.addEventListener('mouseout', function () {
  btn1.style.backgroundColor = 'rgb(44, 44, 44)';
});

btn2.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.backgroundColor = 'pink';
  div.innerHTML = 'HI!!!!!!';
  container.append(div);
});

btn3.addEventListener('click', changeColor);
function changeColor() {
  const divs = document.querySelectorAll('#container div');
  for (let div of divs) {
    div.style.backgroundColor = 'skyblue';
  }
}

btn4.addEventListener('click', changeBtnColor);
function changeBtnColor() {
  console.log(this); // 자기 자신 → 이벤트를 발생시키고 있는 요소(btn4)
  console.log(this.parentNode);
  this.style.backgroundColor = 'yellow';
  this.style.color = '#000';
}
console.log('--------------');

const btn = document.querySelector('button');
const input = document.querySelector('input');

// [이벤트 객체]
// 이벤트 발생 → 브라우저는 발생한 이벤트에 대한 정보를 담은 "이벤트 객체(event object)"를 이벤트 리스터에 전달

// Ex) mousedown 이벤트 발생 → 이벤트 객체는 (마우스 좌표, 버튼 번호) 정보를 가짐

// Ex) keydown 이벤트 발생 → 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐

// 1) 마우스 | 키보드 이벤트
btn.addEventListener('click', function (event) {
  // 이벤트 객체
  console.log(event); // 이벤트 객체에 대한 정보 출력
});

input.addEventListener('keydown', function (e) {
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === 'ArrowUp') {
    console.log('↑');
  } else if (e.code === 'ArrowDown') {
    console.log('↓');
  } else {
    console.log('others');
  }
});

// 2) 폼 이벤트
const todoForm = document.querySelector('#todo-form');
const todos = document.querySelector('[class=todos]');

todoForm.addEventListener('submit', (e) => {
  console.log('submit');
  e.preventDefault(); // 폼 submit 이벤트가 새로고침 되는 것을 막음 → 폼 제출을 막음
  // ※ addEventListener에 설정한 이벤트를 막는 것임

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput); // console.dir(): 인자에 대한 정보를 보여줌
  console.log(todoInput.value);

  const newTodo = todoInput.value.trim();
  if (newTodo !== '') {
    const newTodoLi = document.createElement('li');
    newTodoLi.append(newTodo); // <li>input 입력값</li>
    todos.append(newTodoLi);
  }

  // input창 초기화
  todoInput.value = '';
});

// 3) 체인지 이벤트
// → input요소에 변경이 일어나고, 다른 요소를 클릭하는 등 input이 포커스 아웃(blur)처리되었을 때 일어나느 이벤트
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', (e) => {
  console.log('change!!!');
  console.log(e.target.value);
});

chgInput.addEventListener('input', function(e){
    console.log('changing!!!!!');

    const div = document.querySelector('.intro');
    div.textContent = this.value; // 실시간 텍스트 동기화
});