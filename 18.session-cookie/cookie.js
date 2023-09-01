const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/view', '/views');

// cookie-parser 미들웨어 등록
// app.use(cookieParser()); // 일반 쿠키
const COOKIE_SECRET_KEY = 'This is my secret key'; // 쿠키에 대한 비밀키
app.use(cookieParser(COOKIE_SECRET_KEY)); // 암호화 쿠키

// 쿠키 옵션 객체
const myCookieConf = {
  // 웹 서버를 통해서만 쿠키 접근 가능

  // httpOnly: 프론트에서 document.cookie로 접근을 차단
  // maxAge: 60 * 1000, // maxAge: 쿠키 수명 (밀리초(ms) 단위 → 60 * 1000은 1분)
  // expires: 만료 날짜를 GMT시간설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  // 즉, 쿠키가 전송될 url특정 가능(기본값: /)
  // domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  // secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정(req.signedCookies객체에 들어있음)

  httpOnly: true,
  maxAge: 20 * 1000,
  signed: true,
};

app.get('/', (req, res) => {
  res.render('cookie');
});

// 쿠키 설정하기
app.get('/setCookie', (req, res) => {
  // res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션);
  res.cookie('myCookie', 'myValue', myCookieConf); // 쿠키를 Header에 설정하는 코드 → 응답하는 코드가 아님
  res.send('Cookie 설정 완료'); // ※ 응답 관련 코드는 꼭 하나만 있어야 함
});

// 쿠키 확인하기
app.get('/getCookie', (req, res) => {
  //   console.log(req.cookies, req.signedCookies);
  // { myCookie: 'myValue' } [Object: null prototype] {} // 일반 쿠키
  // {} [Object: null prototype] { myCookie: 'myValue' } // 암호화 쿠키
  // res.send(req.cookies); // 일반 쿠키
  const { myCookie } = req.signedCookies;
  console.log(myCookie); // myValue | undefined → 쿠키 설정 O / 쿠키 설정 X
  res.send(req.signedCookies); // 암호화 쿠키
});

// 쿠키 제거하기
app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'myValue', myCookieConf);
  res.send('쿠기 삭제완료');
});

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running`);
});
