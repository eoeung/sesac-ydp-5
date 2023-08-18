// [실습 1] axios get 회원가입
const getResult = document.querySelector('span#getResult');

async function axiosGetForm() {
  const getForm = document.forms['getForm'];
  const name = getForm.name.value;
  const data = {
    name: name,
  };

  if (!name) {
    getResult.textContent = '이름은 필수 값입니다.';
    return;
  }

  try {
    const response = await axios({
      method: 'get',
      url: '/getForm',
      params: data,
    });

    const { name } = data;
    getResult.textContent = `${name}님 환영합니다.`;
  } catch (err) {
    console.log(err);
  }
}

// [실습 2] axios post 로그인
async function axiosPostForm() {
  const postForm = document.forms['postForm'];
  const id = postForm.id.value;
  const pw = postForm.pw.value;
  const data = {
    id: id,
    pw: pw,
  };

  if (!id || !pw) {
    postResult.style.color = 'green';
    postResult.textContent = '아이디와 비밀번호는 필수 값입니다.';
    return;
  }

  try {
    const response = await axios({
      method: 'post',
      url: '/postForm',
      data: data,
    });

    const tempId = 'admin';
    const tempPw = '1234';
    const { id, pw } = response.data;
    console.log(id, pw);

    if (id === tempId && pw === tempPw) {
      postResult.style.color = 'blue';
      postResult.textContent = `${id}님 환영합니다!`;
    } else{
      postResult.style.color = 'red';
      postResult.textContent = '아이디 혹은 비밀번호 오류입니다.';
    }
  } catch (err) {
    console.log(err);
  }
}
