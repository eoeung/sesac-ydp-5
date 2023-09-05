const express = require('express');
const app = express();

const db = require('./models');

const dotenv = require('dotenv');
dotenv.config();

const session = require('express-session');

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.set('view engine', 'ejs');
// app.set('views', '/views'); Error
app.set('views', __dirname + '/views'); // OS에 관계없이 작동하도록 설정

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000,
    },
  })
);

app.get('/', (req, res) => {
  // console.log(req.session);
  // console.log(req.sessionID);
  res.render('index', { name: req.session.name });
});

// user 관련 라우터
const userRouter = require('./routes/user');
app.use('/user', userRouter);

// 에러 처리
app.get('*', (req, res) => {
  res.render('error');
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`http://${hostname}:${port} is running`);
  });
});
