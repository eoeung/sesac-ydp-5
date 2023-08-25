const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
  {
    id: 5,
    userid: 'apple',
    date: '2022-11-06',
    comment: '우와아아아',
  },
];

// 메인 화면
app.get('/', (req, res) => {
  res.render('index');
});

// 댓글 목록 확인
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments });
});

// 댓글 자세한 정보
app.get('/comment/:id', (req, res) => {
  // req.params: 라우트 매개변수에 대한 정보가 담겨있음
  //   console.log(`req.params: ${req.params}`);
  console.log('req.params : ', req.params);
  const commentId = Number(req.params.id);

  if (!comments[commentId - 1]) {
    res.render('404');
  } else {
    res.render('comment', { comment: comments[commentId - 1] });
  }
});

// param 여러개 사용 가능
app.get('/test/:id/:name', (req, res) => {
  console.log(req.params);
  res.send('test is success');
});

// 없는 라우트 주소로 접근했을 때 → 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running!`);
});
