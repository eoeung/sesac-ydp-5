const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 7777;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

let nickNameObj = {};

// io.on() : socket 관련한 통신 작업 처리
io.on('connection', (socket) => {
  // socket.id
  // - socket 고유 아이디 (브라우저 탭 단위)
  console.log('서버 연결 완료 ::: ', socket.id);

  //   [실습 1] 각 버튼 누를 때 마다 서버로 메시지 보내기
  //   socket.on('hello', (data) => {
  //     emitFunc(socket, 'helloKr', data, '아령하세연');
  //   });

  //   socket.on('study', (data) => {
  //     emitFunc(socket, 'studyKr', data, '공부하시나연');
  //   });

  //   socket.on('bye', (data) => {
  //     emitFunc(socket, 'byeKr', data, '아령히가세연');
  //   });

  // [실습 3] 채팅창 입장 안내 문구
  //   io.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  // [실습 4] 채팅창 메시지 전송 - 닉네임 설정
  socket.on('setNickName', (nickName) => {
    // 프론트에서 넘어온 nickname값이 이미 있는지 검사
    // 1) 이미 존재 : error 이벤트 + '이미 존재하는 닉네임 입니다.'
    // 2) 새 닉네임 : notice 이벤트 + `${nickName}님이 입장하셨습니다.`
    // if(nickNameObj[nickName]){
    if (Object.values(nickNameObj).includes(nickName)) {
      socket.emit('error', {
        msg: '이미 존재하는 닉네임 입니다.',
      });
    } else {
      //   socket.nickName = nickName;
      nickNameObj[socket.id] = nickName;
      io.emit('notice', `${nickName}님이 접속하셨습니다.`);
      socket.emit('entrySuccess', nickName);
      updateList();
    }
    console.log(nickNameObj);
  });

  socket.on('message', (data) => {
    const { nickName, msg } = data;
    console.log(nickNameObj);
    console.log(`${nickName} : ${msg}`);
    io.emit('message', { nickName, msg });
  });

  // DM 기능
  socket.on('DM', (data) => {
    const { fromNickName, toSocketId, msg } = data;
    console.log(nickNameObj);
    console.log(`${fromNickName} : ${msg}`);
    io.to(toSocketId).emit('DM', { fromNickName, msg });
  });

  // 클라이언트 채팅방 퇴장시
  socket.on('disconnect', () => {
    console.log('접속 끊김 ::: ', socket.id);
    io.emit('notice', `${nickNameObj[socket.id]}님이 퇴장하셨습니다.`);
    delete nickNameObj[socket.id];
    updateList();
  });
});

function updateList() {
  io.emit('updateNicks', nickNameObj);
}

//   [실습 1] 각 버튼 누를 때 마다 서버로 메시지 보내기
// function emitFunc(socket, eventName, data, resMsg) {
//   const { who, msg } = data;
//   console.log(`${who} : ${msg}`);
//   socket.emit(eventName, { who: 'server', msg: resMsg });
// }

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
