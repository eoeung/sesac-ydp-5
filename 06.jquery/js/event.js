console.log(document); // js
console.log($(document)); // jQuery

// 1. Load Event
// js
document.addEventListener('DOMContentLoaded', function () {
  console.log('문서의 dom 트리가 완성되면 실행되는 이벤트');
});

// jQuery
$(document).ready(function () {
  console.log('ready - 문서의 dom 트리가 완성되면 실행되는 이벤트');
});

$(function () {
  console.log('안녕?');
});

// 2. Mouse Event
//   1) click
// $('.p-msg').on('click', function () {
$('.p-msg').click(function () {
  $('.p-msg').css('color', 'red');
});

// $('.num').click(function () {
//   //   $('.num').css('color', 'blue'); // class="num" 요소들 모두 선택
//   // $(this): 자기 자신 = 이벤트가 허용된 요소
//   $(this).css('color', 'blue');
// });

// // click in js
const nums = document.querySelectorAll('.num');

for (let num of nums) {
  num.addEventListener('click', function (e) {
    this.style.color = 'green';
  });
}

//   2) mouseover(): 마우스 올렸을 때
// $('.numbers').on('mouseover', function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!!</div>');
// });

//   3) hover(): 마우스 올리고/뗐을 때 → 함수를 2개 받을 수 있음
// mouseover + mouseout
$('.div-hover').hover(
  //   function () {
  //     $(this).addClass('hover');
  //   },
  //   function () {
  //     $(this).removeClass('hover');
  //   }
  function () {
    $(this).toggleClass('hover');
  }
);

//   4) scroll()
// js
window.addEventListener('scroll', function () {
  console.log('scrolling with js !!!');
});

// jQuery
// $(window).on('scroll', function(){
$(window).scroll(function () {
  console.log('scrolling with jQuery !!!');
});

// 3. Keyboard Event
//   1) keydown
// $('.input-key').keydown(function(e){
$('.input-key').on('keydown', function (e) {
  // e: 이벤트 객체
  // console.log(e);

  if (e.code === 'ArrowUp') {
    console.log('↑');
  } else if (e.code === 'ArrowDown') {
    console.log('↓');
  } else {
    console.log('others');
  }
});

// 4. Form Event
//   1) submit
$('#todo-form').on('submit', function (e) {
  e.preventDefault();
  //   console.log(e);

  // Quiz.
  // 1) name 속성값이 todo인 요소를 선택하고, 해당 요소의 value를 todo 변수에 저장
  const val = $('[name=todo]').val();

  // 2) todos 클래스를 가지는 요소를 선택해서 li 요소에 todo 변수의 값을 텍스트로 갖게 한 후, 추가
  $('ul.todos').append(`<li>${val}</li>`);

  // 3) name 속성값이 todo인 요소의 value 초기화
  $('input[name=todo]').val('');
});

// 5. e.preventDefault()
$('a#inactive').on('click', function (e) {
  e.preventDefault(); // <a>태그의 기본 동작을 막음

  // <a>태그의 클릭 이벤트에 대한 기본 동작은 href에 연결되어 있는 링크로의 이동
  $('#text').append('이 링크는 동작하지 않음');
});

// 6. this
// 그 함수가 속해 있던 객체를 참조
// `뭔가`를 클릭할 때 불러오는 함수(콜백함수)에서 this는 `그 뭔가`를 의미
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor() {
  this.style.backgroundColor = 'royalblue';
}

function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  // btn.addEventListener('click', function () {
  //     //     console.log(this);
  //     //     this.style.backgroundColor = 'royalblue';
  // });

  // 매개 변수 없는 경우, function(){} 대신 함수 이름 써도 됨
  //   btn.addEventListener('click', setBgColor);

  // 매개 변수가 있는 경우, function(){} 안에 함수 이름과 인자를 넣어주면 됨
  btn.addEventListener('click', function () {
    setBgColor2(this, 'purple');
  });
}
for (let span of spans) {
  // span.addEventListener('click', function () {
  //     console.log(this);
  //     this.style.backgroundColor = 'royalblue';
  // });

  // 매개 변수 없는 경우, function(){} 대신 함수 이름 써도 됨
  //   span.addEventListener('click', setBgColor);

  // 매개 변수가 있는 경우, function(){} 안에 함수 이름과 인자를 넣어주면 됨
  span.addEventListener('click', function () {
    setBgColor2(this, 'yellow');
  });
}
