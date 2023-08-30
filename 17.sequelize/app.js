const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8000;
const db = require('./models'); // ./models/index.js

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 에러 처리
app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  // force: false; → 실제 DB에 테이블이 존재하지 않으면, 모델에 정의한대로 생성
  // force: true; → DB에 테이블이 있어도 무조건 새로 생성
  app.listen(PORT, () => {
    console.log(`http://${hostname}:${PORT} is running!`);
  });
});
