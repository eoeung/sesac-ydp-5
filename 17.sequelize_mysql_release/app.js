const express = require('express');
const hostname = '127.0.0.1';
const app = express();
const PORT = 8080;
const db = require('./models'); // ./models/index.js

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
// 인덱스 페이지
app.get('/', (req, res) => {
  res.render('index');
});

// 회원가입/로그인
const userRouter = require('./routes/user');
app.use('/user', userRouter);

// TODO: 404 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

// Sequelize 모델을 실제 DB와 Table에 동기화
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://${hostname}:${PORT}/`);
  });
});
