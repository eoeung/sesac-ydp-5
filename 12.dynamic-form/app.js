const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/public', express.static(__dirname + '/js'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic');
});

/////////// Ajax //////////////
// get ajax
app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// post ajax
app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/////////// Axios //////////////
// get axios
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// post axios
app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/////////// Fetch //////////////
// get fetch
app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// post fetch
app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// [실습 모음 화면]
app.get('/training', (req, res) => {
  res.render('training');
});

// [실습 1] axios get 회원가입
app.get('/getForm', (req, res) => {
  res.send(req.query);
});

// [실습 2] axios post 로그인
app.post('/postForm', (req, res) => {
  res.send(req.body);
});

// [선택 실습] weather open API
app.get('/weather', (req, res) => {
  res.render('weather');
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
