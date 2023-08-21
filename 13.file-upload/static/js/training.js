// 일반 회원가입
function validation() {
  // 유효성 검사
  const form = document.forms['formRg'];
  const alertBox = document.querySelector('#alertBox');

  if (!form.formId.value) {
    alertBox.textContent = '아이디를 입력해주세요.';
    return false;
  } else if (!form.formPw.value) {
    alertBox.textContent = '비밀번호를 입력해주세요.';
    return false;
  } else if (!form.formName.value) {
    alertBox.textContent = '이름을 입력해주세요.';
    return false;
  } else if (!form.formAge.value) {
    alertBox.textContent = '나이를 입력해주세요.';
    return false;
  } else if (!form.formProfile.value) {
    alertBox.textContent = '파일을 업로드해주세요.';
    return false;
  } else alertBox.textContent = '';

  //   if (!form.formId.checkValidation()) {
  //     alertBox.textContent = '아이디를 입력해주세요.';
  //     return false;
  //   } else if (!form.formPw.checkValidation()) {
  //     alertBox.textContent = '비밀번호를 입력해주세요.';
  //     return false;
  //   } else if (!form.formName.checkValidation()) {
  //     alertBox.textContent = '이름을 입력해주세요.';
  //     return false;
  //   } else if (!form.formAge.checkValidation()) {
  //     alertBox.textContent = '나이를 입력해주세요.';
  //     return false;
  //   } else alertBox.textContent = '';
}
