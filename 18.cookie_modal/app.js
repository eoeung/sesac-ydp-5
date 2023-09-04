const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/view', '/views');

app.use(cookieParser());

app.get('/', (req, res) => {
  const { popup } = req.cookies;
  res.render('index', { popup: popup });
});

// 쿠키 설정
app.post('/setCookie', (req, res) => {
  const cookieConf = {
    httpOnly: true,
    maxAge: 60 * 1000,
  };
  res.cookie('popup', 'hide', cookieConf);
  res.send('Cookie 설정 완료');
});

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running`);
});
