// http 모듈로 Web Server 생성

// 클라이언트가 'localhost:PORT'로 요청을 날렸으나, 서버가 응답하고 있는 내용이 없음
const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const server = http.createServer(function (request, response) {
  // 1. 응답할 때, 문자열로 응답
  //   response.writeHead(200); // Response Header
  //   response.writeHead(200, { 'content-type': 'text/html; charset=utf8' }); // Response Header
  //   response.write('<h1>Hello World! 아</h1>'); // Response Body
  //   response.end('<p>My first node server~ 어</p>'); // Response Body 작성 후, 응답 종료

  // 2. 응답할 때, fs 모듈을 사용해서 html 파일로 응답
  try {
    // const data = fs.readFileSync('./index.html'); // 정상 파일
    const data = fs.readFileSync('./index2.html'); // 오류 파일
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(data);
    response.end();
  } catch (error) {
    // Quiz.
    // 404 page 생성해서 해당 html을 응답으로 보내도록 해보기
    const errorPage = fs.readFileSync('./error.html');
    console.error(error);
    response.writeHead(404, {'content-type': 'text/html; charset=utf8'});
    // response.write(error.message);
    response.write(errorPage);
    response.end();
  }
});
const PORT = 8000;

// [server.on(): 서버 객체에 이벤트를 등록]
// request 이벤트: 클라이언트 요청
// server.on('request', function (request, response) {
//   console.log('request 이벤트 발생!');
// });
// connection 이벤트: 클라이언트가 접속(클라이언트와 서버가 연결되었을 때) 발생
server.on('connection', function (request, response) {
  console.log('connection 이벤트 발생!!');
});

// 서버 실행
server.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});

// 10초 후 서버 종료
// setTimeout(function () {
//   server.close(); // 서버 종료 메서드
//   console.log('10초가 지나 서버가 종료되었습니다.');
// }, 10000);
