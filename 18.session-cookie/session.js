const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const hostname = '127.0.0.1';
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
// 세션 미들웨어 등록
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY, // key
    resave: false, // 매 요청마다 세션을 다시 저장할 것인지
    saveUninitialized: true, // 처음부터 세션을 생성할 것인지
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, // 1m
    },
  })
);

// 세션 옵션 객체
// secret: 안전하게 쿠키를 전송하기 위한, 쿠키 서명 값
// resave: 세션에 수정사항이 생기지 않더라도, 매 요청마다 세션을 다시 저장할 것인지 설정
// saveUninitialized: 세션에 저장할 내역이 없더라도, 처음부터 세션을 생성할지 설정
// httpOnly: http 프로토콜에서도 세션 사용 가능
// maxAge: 쿠키 수명 (단위 ms)

app.get('/', (req, res) => {
  res.render('session');
});

// 세션 설정
app.get('/set', (req, res) => {
  req.session.name = '홍길동';
  res.send('세션 설정 완료');
});

// 세션 확인
app.get('/name', (req, res) => {
  console.log(req.session);
  /**
     Session {
        cookie: {
            path: '/',
            _expires: 2023-09-04T04:41:58.402Z,
            originalMaxAge: 60000,
            httpOnly: true
        },
        name: '홍길동'
    }
   */
  // req.sessionID: 현재 세션 아이디
  // → express-session 미들웨어에 의해 암호화된 쿠키 내용
  res.send({ id: req.sessionID, name: req.session.name });
});

// 세션 제거
app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }

    // res.redirect(주소): 주소로 이동(리다이렉트)
    res.redirect('/name'); // 세션 확인
  });
});

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running`);
});

// 세션 정리
// 1. 세션 설정
// req.session.key = value

// 2. 세션 확인
// req.sessionID
// req.session.key

// 3. 세션 제거
// req.session.destroy(callback)
