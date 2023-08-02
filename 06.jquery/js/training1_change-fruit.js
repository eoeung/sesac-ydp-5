// TODO: 조건을 만족하는 jquery 코드 작성

// console.log($('.btn')); // 유사 배열
// jQuery 는 js와 다르게 배열 형태더라도 그냥 바로 이벤트 적용 가능!!

$('.apple').on('click', function () {
  $('.fruit').attr({
    src: '../images/apple.jpg',
    alt: '사과',
    title: '사과',
  });
});

$('.bananas').on('click', function () {
    $('.fruit').attr({
        src: '../images/bananas.jpg',
        alt: '바나나',
        title: '바나나',
      });
});

$('.grapes').on('click', function () {
    $('.fruit').attr({
        src: '../images/grapes.jpg',
        alt: '포도',
        title: '포도',
      });
});

$('.peaches').on('click', function () {
    $('.fruit').attr({
        src: '../images/peaches.jpg',
        alt: '복숭아',
        title: '복숭아',
      });
});
