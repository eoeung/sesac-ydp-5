// TODO: 조건을 만족하는 jquery 코드 작성
// .bg-red 클래스 있다면, .bg-red 제거, .bg-orange 추가
// .bg-orange 클래스 있다면, .bg-orange 제거, .bg-yellow 추가
// .bg-yellow 클래스 있다면, .bg-yellow 제거, .bg-red 추가

const box = $('.box');
box.on('click', changeColor); // 이벤트

// 이벤트 적용 함수
function changeColor() {
  // 빨강
  if (box.hasClass('bg-red')) {
    box.removeClass('bg-red');
    box.addClass('bg-orange');
  }

  // 주황
  else if (box.hasClass('bg-orange')) {
    box.removeClass('bg-orange');
    box.addClass('bg-yellow');
  }

  // 노랑
  else if (box.hasClass('bg-yellow')) {
    box.removeClass('bg-yellow');
    box.addClass('bg-green');
  }

  // 초록
  else if (box.hasClass('bg-green')) {
    box.removeClass('bg-green');
    box.addClass('bg-blue');
  }

  // 파랑
  else if (box.hasClass('bg-blue')) {
    box.removeClass('bg-blue');
    box.addClass('bg-navy');
  }

  // 남색
  else if (box.hasClass('bg-navy')) {
    box.removeClass('bg-navy');
    box.addClass('bg-purple');
  }

  // 보라
  else if (box.hasClass('bg-purple')) {
    box.removeClass('bg-purple');
    box.addClass('bg-red');
  }
}
