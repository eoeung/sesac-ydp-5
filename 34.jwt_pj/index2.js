const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV';

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;

    if (id === realId && pw === realPw) {
      // 토큰을 생성
      const token = jwt.sign({ id }, SECRET); // id를 SECRET KEY를 이용해서 암호화
      res.json({ result: true, token });
    } else {
      res.json({ result: false, message: '로그인 정보가 올바르지 않음' });
    }
  } catch (err) {
    console.error(err);
  }
});

app.post('/token', (req, res) => {
  console.log(req.headers); // Bearer token_string
  // {
  //   authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhbmFuYSIsImlhdCI6MTY5ODY0MzM3OH0.WJtWk6TgW2O6Z0tmDwT14is4wQPAJVmhYhwEYTVznqk',
  //   'user-agent': 'PostmanRuntime/7.34.0',
  //   accept: '*/*',
  //   'postman-token': '32c39b45-3666-421f-8c56-a597229f2ed5',
  //   host: 'localhost:8000',
  //   'accept-encoding': 'gzip, deflate, br',
  //   connection: 'keep-alive',
  //   'content-length': '0'
  // }
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' '); // ['Bearer', 'token_string']
    try {
      const result = jwt.verify(token[1], SECRET);
      console.log(result);

      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      } else {
        res.json({ result: false, message: '인증된 회원이 아님' });
      }
    } catch (err) {
      console.error(err);
      res.json({ result: false, message: '인증된 회원이 아님' });
    }
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
