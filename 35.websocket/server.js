const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is running`);
});

const wsServer = new ws.Server({ server });

const sockets = []; // 클라이언트들을 저장할 배열

wsServer.on('connection', (socket) => {
  console.log('[클라이언트 연결 완료!]');
  sockets.push(socket); // sockets에 접속한 클라이언트 객체 추가

  socket.on('message', (message) => {
    // console.log('[클라이언트로 부터 받은 메시지] :: ', message); // <Buffer 7b 22 6d 73 67 22 3a 22 e3 85 81 e3 85 81 22 2c 22 6e 61 6d 65 22 3a 22 e3 84 b9 e3 84 b9 22 7d>
    // buffer : 이진 데이터를 나타내는 데 사용 (각 바이트는 16진수로 표현)
    // console.log('[클라이언트로 부터 받은 메시지] :: ', message.toString());
    console.log(`[클라이언트로 부터 받은 메시지] :: ${message}`);

    // WebSocket서버에 접속한 모든 클라이언트(브라우저 탭 마다)에게 메시지 전송
    // → 브로드캐스팅 (여러 컴퓨터한테 데이터 전송)
    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });

  socket.on('close', () => {
    console.log('[클라이언트 연결 종료]');
  });
});
