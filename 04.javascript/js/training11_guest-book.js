// [실습 11] 방명록 만들기
let number = 1;
const guestForm = document.querySelector('#guestForm');
const guestBook = document.querySelector('#guestBook');
const guestBookTitle = document.querySelectorAll('.guestBookTitle');

guestBookTitle.forEach(function(e){
    e.style.border = '1px solid #000';
});

guestForm.addEventListener('submit', function (e) {
  e.preventDefault();

  addGuestBook();
});

// 방명록 작성
function addGuestBook() {
  const guest = document.querySelector('#guest');
  const content = document.querySelector('#content');

  const now = new Date();

  // tr, td 및 값 추가
  let tr = document.createElement('tr');
  let tdNum = document.createElement('td');
  let tdGuest = document.createElement('td');
  let tdContent = document.createElement('td');
  let tdDate = document.createElement('td');

  // 스타일 적용
  tr.style.border = '1px solid #000';
  tdNum.style.border = '1px solid #000';
  tdGuest.style.border = '1px solid #000';
  tdContent.style.border = '1px solid #000';
  tdDate.style.border = '1px solid #000';

  // td에 값 채우기
  tdNum.textContent = number;
  tdGuest.textContent = guest.value;
  tdContent.textContent = content.value;
  let date = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`;
  tdDate.textContent = date;

  // tr에 td 추가
  tr.append(tdNum, tdGuest, tdContent, tdDate);
  // table에 tr추가
  guestBook.append(tr);
}
