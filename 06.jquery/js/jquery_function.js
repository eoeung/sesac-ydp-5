// jQuery Method → Javascript 코드와 비교해보기

// [val()]
function getValue() {
  // js
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jQuery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  // document.querySelector('input').value = 'Hello World!';

  // jQuery
  $('input').val('Hello World!');
}

// -----------------------------------------
// [css()]
// js
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red;';
}

// jQuery
function changeCssJquery() {
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');
  $('span').css({
    'font-size': '40px',
    color: 'blue',
  });
}

// jQuery get CSS
function getCssJquery() {
  // js
  // console.log(document.querySelector('span').style.color);

  // jQuery
  console.log($('span').css('color'));
}

// -----------------------------------------
// [attr()]
// js
function changeAttrJS() {
  // Quiz
  // a 태그를 선택하고, href 속성값을 naver 주소로 변경
  const a = document.querySelector('a');
  //   a.href = 'https://www.naver.com';
  a.setAttribute('href', 'https://www.naver.com');
  a.textContent = 'Naver';
}

// jQuery
function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
  $('a').text('Daum');
}

// -----------------------------------------
// [text()]
// js
function changeTextJS() {
  const pText = document.querySelector('.p-text');
  //   pText.textContent = 'Hello World!';
  pText.innerText = 'Hello World!';
  //   pText.innerHTML = 'Hello World!';
}
// jQuery
function changeTextJquery() {
  $('.p-text').text('Hello World @@@');
}

// -----------------------------------------
// [html()]
// js
function changeHtmlJS() {
  const pHtml = document.querySelector('.p-html');
  pHtml.innerHTML = '<h5>Hello World!</h5>';
}

// jQuery
function changeHtmlJquery() {
  $('.p-html').html('<h5>Hello World @@@</h5>');
}

// -----------------------------------------
// [요소 추가하기]

// 1) 선택된 요소의 자식 요소 중 마지막에 추가
// js
function appendJS() {
  const colors = document.querySelector('.colors');
  const li = document.createElement('li');
  li.setAttribute('class', 'red');
  li.setAttribute('style', 'color: red;');
  li.textContent = 'red js';

  colors.append(li);
}

// jQuery
function appendJquery() {
  $('.colors').append('<li class="red" style="color: red">red jQuery</li>');
}

// =========================================
// 2) 선택된 요소의 자식 요소 중 맨 처음에 추가
// js
function prependJS() {
  const colors = document.querySelector('.colors');
  const li = document.createElement('li');
  li.setAttribute('class', 'blue');
  li.setAttribute('style', 'color: blue;');
  li.textContent = 'blue js';

  colors.prepend(li);
}

// jQuery
function prependJquery() {
  $('.colors').prepend('<li class="blue" style="color: blue">blue jQuery</li>');
}

// =========================================
// 3) 선택된 요소의 형제 요소로 이전 형제로 추가
// js
function beforeJS() {
  // green을 기준으로
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.setAttribute('class', 'pink');
  li.setAttribute('style', 'color: pink;');
  li.textContent = 'pink js';

  green.before(li);
}

// jQuery
function beforeJquery() {
  $('.green').before('<li class="pink" style="color: pink;">pink jQuery</li>');
}

// =========================================
// 4) 선택된 요소의 형제 요소로 이후 형제로 추가
// js
function afterJS() {
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.setAttribute('class', 'skyblue');
  li.setAttribute('style', 'color: skyblue;');
  li.textContent = 'skyblue js';

  green.after(li);
}

// jQuery
function afterJquery() {
  $('.green').after(
    '<li class="skyblue" style="color: skyblue;">skyblue jQuery</li>'
  );
}

// -----------------------------------------
// [요소 삭제하기]
// 1) 선택된 요소 모두 삭제
// js
function removeJS() {
  const li2 = document.querySelector('#li2');
  li2.remove();
}
// jQuery
function removeJquery() {
  $('#li2').remove();
}

// =========================================
// 2) 선택된 요소의 자식 요소 모두 삭제
// js
function emptyJS() {
  const nums = document.querySelector('.nums');
  nums.textContent = '';
}

// jQuery
function emptyJquery() {
  $('.nums').empty();
}

// -----------------------------------------
// [요소 탐색하기]

// 1) 부모 찾기
function findParent() {
  // js
  console.log(document.querySelector('.child2').parentElement);

  // jQuery
  console.log($('.child2').parent());
}

// =========================================
// 2) 조상 찾기
function findParents() {
  // js는 존재하지 않으므로 pass
  // jQuery
  console.log($('.child2').parents());
}
// =========================================
// 3) 다음 형제 찾기
function findNext() {
  // js
  console.log(document.querySelector('.child2').nextElementSibling);

  // jQuery
  console.log($('.child2').next('div'));
}

// =========================================
// 4) 이전 형제 찾기
function findPrev() {
  // js
  console.log(document.querySelector('.child2').previousElementSibling);

  // jQuery
  console.log($('.child2').prev('div'));
}

// =========================================
// 5) 모든 자식 찾기
function findChildren() {
  // js
  console.log(document.querySelector('.parent').children);

  // jQuery
  console.log($('.parent').children());
}
// -----------------------------------------
// [클래스 조작하기]
function addClass() {
  // js
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  //   const hi = document.querySelector('#hi');
  //   hi.classList.add('fs-50');

  // jQuery
  $('#hi').addClass('fs-50');
}

function removeClass() {
  // js
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  //   const hi = document.querySelector('#hi');
  //   hi.classList.remove('fs-50');

  // jQuery
  $('#hi').removeClass('fs-50');
}

function hasClass() {
  // js
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  //   const hi = document.querySelector('#hi');
  //   console.log(hi.classList.contains('fs-50'));

  // jQuery
  console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
  // js
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  //   const hi = document.querySelector('#hi');
  //   hi.classList.toggle('bg-pink');

  // jQuery
  $('#hi').toggleClass('bg-pink');
}
