const express = require('express');
const session = require('express-session');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('/view', '/views');

// body-paresr 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 세션 미들웨어 등록
app.use(
  session({
    secret: 'ClientSession...',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000,
    },
  })
);

app.get('/', (req, res) => {
  console.log(req.session);
  res.render('index', { id: req.session.name });
});

// 로그인 페이지
app.get('/signin', (req, res) => {
  res.render('signin', { id: req.session.name });
});

// 로그인 시도
app.post('/postSignin', (req, res) => {
  const tempId = 'admin';
  const tempPw = 'admin';
  const { id, pw } = req.body;

  if (tempId === id && tempPw === pw) {
    // 세션을 적용해서 name에 id값 넣어주기
    req.session.name = id;
    res.send({ message: 'success' });
  } else {
    res.send({ message: 'fail' });
  }
});

// 로그아웃
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.render('index', { id: null });
  });
});

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running`);
});
