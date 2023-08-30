// front js

// tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

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
            <button type="button" onclick="editVisitor(${id});">수정</button>
          </td>
          <td>
            <button type="button" onclick="deleteVisitor(this, ${id});">삭제</button>
          </td>
        </tr>
    `;

      // jQuery
      //   $('tbody').append(newVisitor);

      // js
      // 기존
      // tbody.insertAdjacentHTML('beforeend', newVisitor);

      // id 기준 내림차순
      tbody.insertAdjacentHTML('afterbegin', newVisitor);

      // 사용자 이름, 방명록 화면에서 제거
      form.name.value = '';
      form.comment.value = '';
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
    })
      .then((res) => {
        console.log('delete /visitor 요청에 대한 응답', res.data);

        alert('삭제 성공!');
        obj.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// 방명록 수정
// 1) 수정 버튼을 클릭하면 해당 내용이 방명록에 출력됨
// 2) 수정된 내용으로 방명록을 수정
function editVisitor(id) {
  console.log(`${id}번 방명록 수정`);

  // TODO
  // 1. id를 가지고 방명록 하나를 조회
  // 2. 가져온 값으로 `방명록 등록`란에 각각 이름과 방명록에 값을 출력
  // 3. [변경], [취소] 버튼 보이기

  axios({
    // GET /visitor/:id
    // req.params
    method: 'get',
    url: `/visitor/${id}`, // param

    // GET /visitor?id=1
    // req.query
    // method: 'get',
    // url: '/visitor',
    // params: { id: id }, // QueryString
  })
    .then((res) => {
      console.log(res.data);

      const { name, comment } = res.data;
      // 2. 가져온 값으로 `방명록 등록`란에 각각 이름과 방명록에 값을 출력
      const form = document.forms['visitor-form'];
      form.name.value = name;
      form.comment.value = comment;

      // 3. [변경], [취소] 버튼 보이기
      const btns = `
        <button type="button" onclick="editDo(${id});">변경</button>
        <button type="button" onclick="editCancel();">취소</button>
      `;
      buttonGroup.innerHTML = btns;
    })
    .catch((err) => {
      console.log(err);
    });
}

// 방명록 수정
function editDo(id) {
  const form = document.forms['visitor-form'];

  axios({
    method: 'patch',
    url: '/visitor',
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      const { isUpdated } = res.data;

      if (isUpdated) {
        alert('방명록 수정이 완료되었습니다.');

        // 방명록 테이블에 수정된 값으로 변경
        const tr = document.querySelector(`#tr_${id}`).children;
        console.log(tr);

        tr[1].textContent = form.name.value;
        tr[2].textContent = form.comment.value;

        // 수정 작업이 이루어지고 나서, input 초기화 & [등록] 버튼 출력
        editCancel();
      } else {
        alert('오류가 발생했습니다.');
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// [취소] 버튼 누르면
// - input 초기화
// - buttonGroup 요소 안에 다시 [등록] 버튼 보이기
function editCancel() {
  // 1) input 초기화
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value = '';

  // 2) buttonGroup 요소 안에 다시 [등록] 버튼 보이기
  const btn = `<button type="button" onclick="createVisitor();">등록</button>`;

  buttonGroup.innerHTML = btn;
}
