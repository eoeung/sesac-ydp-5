// axios 동적 폼 실습
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터
const indexRouter = require('./routes');
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running`);
});
