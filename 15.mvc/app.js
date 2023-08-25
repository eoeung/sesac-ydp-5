const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index');
// indexRouter에서는 'localhost:PORT/'가 기본 경로가 됨
app.use('/', indexRouter);

// 없는 라우트 주소로 접근했을 때 → 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running!`);
});
