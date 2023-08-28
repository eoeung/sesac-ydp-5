// front js

// tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody');
const bg = document.querySelector('#button-group');

// 방명록 작성
// 버튼 클릭시 POST /visitor 요청 날려서 db에 데이터 INSERT
function createVisitor() {
  const form = document.forms['visitor-form'];

  axios({
    method: 'post',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log('post /visitor 요청에 대한 응답', res);

      // 방금 추가한 방명록 정보를 보이기
      // → newVisitor 변수에 <tr> 요소를 생성하고, <tbody>의 맨 마지막 요소로 추가
      const { id, name, comment } = res.data; // res : id, name, comment
      const newVisitor = `
        <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td>
            <button type="button">수정</button>
          </td>
          <td>
            <button type="button" onclick="deleteVisitor(this, ${id});">삭제</button>
          </td>
        </tr>
    `;

      // jQuery
      //   $('tbody').append(newVisitor);

      // js
      tbody.insertAdjacentHTML('beforeend', newVisitor);
    })
    .catch((err) => {
      console.log(err);
    });
}

// 방명록 삭제
function deleteVisitor(obj, id) {
  console.log(obj, id);

  if (confirm('정말로 삭제하시겠습니까?')) {
    axios({
      method: 'delete',
      url: '/visitor',
      data: { id: id },
    }).then((res) => {
      console.log('delete /visitor 요청에 대한 응답', res.data);

      alert('삭제 성공!');
      obj.parentElement.parentElement.remove();
    }).catch(err => {
        console.log(err);
    });
  }
}
