# 12.동적 폼 전송 (2023/08/18, 08/21)

## [동적 폼 전송]

- Ajax
  - JQuery
- Axios
  - Promise
    - then()
    - catch()
  - async-await
    - try-catch
- fetch
  - Promise
    - then()
      - return을 해줘야 함
        - response.text()
        - response.json()
    - catch()
- form validation
  - checkValidity()
- 폼 전송
  - 일반 폼 전송
  - 동적 폼 전송

### ※ 커밋 메시지 컨벤션

---

### \[실습 1] axios get 회원가입

[get으로 정보 받기 -1 : app.js](./app.js) <br>
[get으로 정보 받기 -2 : form 화면 ('/training')](./views/training.ejs) <br>
[get으로 정보 받기 -3 : form 화면 결과 ('/getForm')](./views/getInfo.ejs) <br>

### \[실습 2] axios post 로그인

[post로 정보 받기 -1 : app.js](./app.js) <br>
[post로 정보 받기 -2 : form 화면 ('/training')](./views/training.ejs) <br>
[post로 정보 받기 -3 : form 화면 결과 ('/postForm')](./views/postInfo.ejs) <br>

### \[선택 실습] weather open API

[weather open API 사용 -1 : app.js](./app.js) <br>
[weather open API 사용 -2 : ('/weather')](./views/weather.ejs) <br>
