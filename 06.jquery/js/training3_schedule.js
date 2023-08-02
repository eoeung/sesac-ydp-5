// [실습 3] 스케줄
let thisDay;

// 1. 날짜 클릭하면 input 값 채우기
$('.day').click(function () {
  thisDay = $(this);
  $('#date').val($(this).text());

  console.log(thisDay);
});

// 2. 내용 입력 후, `작성`버튼 클릭하면 해당 날짜에 내용 추가
$('#btn').click(function () {
  console.log(thisDay);
  thisDay.append(`<p>${$('#contents').val()}</p>`);
});
