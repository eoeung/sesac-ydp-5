// jQuery
// $( 선택자 ).동작함수()
// $(): HTML 요소를 선택하는 함수
// $의 의미: jQuery() 함수의 축약 형태 → 식별자 역할
// 동작함수: 선택된 요소에 대해 원하는 동작 수행

console.log($('#div1'));

function submitJs() {
  const div1 = document.querySelector('#div1');

  div1.innerText = '반갑습니다!';

  // css(스타일) 변경
  // div1.style.border = "2px solid #f00";
  div1.setAttribute('style', 'border: 2px solid #f00');
}

function submitJquery() {
  // 요소 선택
  const div1 = $('#div1');

  div1.text('안녕히 계세요~');

  // css(스타일) 변경
  div1.css('border', '2px dotted #00f');
}

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');

// 유사 배열 형태로 출력
console.log(colorsJs); // NodeList
console.log(colorsJquery);

// js li 요소 클릭시 글씨 색상 빨간색
colorsJs.forEach((item) => {
  item.addEventListener('click', function () {
    this.style.color = 'red';
  });
});

// Error: 유사 객체에 이벤트리스너를 추가하려고 했기 대문
// colorsJs.addEventListener('click', () => {
//   colorsJs.style.color = 'red';
// });

// jquery li 요소 클릭 시 배경 색상 하늘색
colorsJquery.on('click', function () {
  //   console.log($(this));
  $(this).css('background-color', 'skyblue');
});
