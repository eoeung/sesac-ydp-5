const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', './views');

// middleware: 요청과 응답의 중간에서 작업하는 코드
// app.use()로 미들웨어를 등록

// req.body 객체를 해석할 수 있도록, body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// 라우팅(Routing): 주소 설정
// GET '/' → index.ejs
app.get('/', (req, res) => {
  console.log(req.query); // {}
  // res.render(ejs_경로, 데이터)
  // ejs_경로: views/ 폴더 내부의 ejs 파일의 주소
  // 데이터: 뷰에 넣어줄 정보
  res.render('index', { title: '폼 전송을 연습해보자' });
});

// GET '/getForm' => 임의의 메시지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/getForm', (req, res) => {
  console.log(req.query); // { id: 'abcd', pw: '1234' }
  console.log(req.body); // {}
  res.render('result', { title: 'GET 요청', userInfo: req.query });
});

// [실습 1] get으로 정보 받기
app.get('/getInfo', (req, res) => {
    res.render('training1_get', {title: '[실습 1] get으로 정보 받기'});
});

app.get('/getInfoForm', (req, res) => {
    console.log(req.query);
    res.render('getInfo', {title: '[실습 1] get으로 받은 정보 결과', userInfo: req.query});
})

// POST '/postForm' => 임의의 메시지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
// ※ body-parser 미들웨어를 등록해야 해당 정보를 가지고 올 수 있음
app.post('/postForm', (req, res) => {
  console.log(req.query); // {}
  console.log(req.body); // { id: 'zzzz', pw: '9999' }
  res.render('result', { title: 'POST 요청', userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is open`);
});
