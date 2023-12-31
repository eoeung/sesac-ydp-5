const express = require('express');
const app = express();
const PORT = 8000;

const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done: callback
      // done(null, xx): 여기서 null은 error를 의미하는 매개변수
      // 에러가 없으므로 "null"이라고 전달하여 콜백 함수를 호출
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 확장자를 추출 → Ex) .txt
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB = 5Byte x 1024 x 1024
});

const trainingUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.formId + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.set('/views', 'view');
app.use('/public', express.static(__dirname + '/static'));
app.use('/userUpload', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userfile'): 클라이언트의 요청이 들어오면,
// multer 설정(upload 변수)에 따라 파일을 업로드한 후, req.file 객체를 생성
// single()인자: <input type="file"> name 속성과 일치해야한다. → userfile
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보들
  console.log(req.file);
  console.log(req.body);
  res.send('file upload success!');
});

// req.file 객체 자세히 보기({}로 저장되어 있으므로, 객체이다.)
// {
//     fieldname: 'userfile', // 폼에 정의한 name값
//     originalname: 'laser.jpg', // 원본 파일명
//     encoding: '7bit', // 파일 인코딩 타입
//     mimetype: 'image/jpeg', // 확장자(파일 타입)
//     destination: 'uploads/', // 파일 저장 경로
//     filename: 'c18fc1049419cc7e8828e227e6f4b506', // destination에 저장된 파일명
//     path: 'uploads\\c18fc1049419cc7e8828e227e6f4b506', // 업로드된 파일 전체 경로
//     size: 5528 // 파일 크기
//   }

// 2. array(): 여러 파일을 한 번에 업로드
// uploadDetail.array('userfiles'): 클라이언트 요청이 들어오면
// multer 설정(uploadDetail 변수)에 따라 파일을 업로드한 후, req.files 객체 생성
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send('하나의 input에 여러 파일 업로드 완료');
});

// 3. fields(): 여러 파일을 각각 input에 업로드
// req.files에서 파일 정보를 확인
// fields() 매개 변수로 input 태그의 name을 각각 넣기
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send('여러 파일을 각각의 input에 업로드 완료');
  }
);

// 동적 폼 전송
app.post('/dynamicFile', uploadDetail.single('dynamicUserfile'), (req, res) => {
  console.log(req.file);
  req.file.preFilepath = '/userUpload/';
  res.send(req.file);
});

// [실습 1] 파일 업로드 화면
app.get('/training', (req, res) => {
  res.render('training');
});

// [실습 1] 파일 업로드
// input type="file"의 name을 적어줘야함
app.post('/formRegister', trainingUpload.single('formProfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  req.file.preFilepath = '/userUpload/'; // userUpload 설정
  res.render('formResult', { file: req.file, data: req.body });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT} is running`);
});
