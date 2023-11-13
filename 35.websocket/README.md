# 35.WebSocket (2023/11/13)

## [WebSocket]

- WebSocket 설치

```bash
  # WebSocket 설치
  $ npm i ws
```

- TCP/IP
  - TCP/IP 4계층
    - 응용 계층
    - 전송 계층
    - 인터넷 계층
    - 네트워크 인터페이스
  - OSI 7계층
    - 응용 계층
    - 표현 계층
    - 세션 계층
    - 전송 계층
    - 네트워크 계층
    - 데이터링크 계층
    - 물리 계층
- Socket
  - 서버와 클라이언트 연결 → 인터페이스 역할
  - 프로토콜, ip, port로 정의됨
  - TCP 또는 UDP 프로토콜 사용
    - TCP
      - 신뢰성
    - UDP
      - 빠른 속도
  - Server
    - socket()
    - bind()
    - listen()
    - accept()
  - Client
    - socket()
    - connect()
- WebSocket
  - 양방향 소통을 위한 프로토콜
  - HTML5 웹 표준 기술
  - 이벤트를 듣고 보내는 것만 가능
  - event
    - open
    - message
    - error
    - close
    - Server측 코드
    ```javascript
    socket.on('message', (message) => { ... });
    ```
    - Client측 코드
    ```javascript
    ws.addEventListener('message', (event) => { ... });
    ```
  - JSON
    - JSON.stringify()
      - js객체를 JSON객체로 변환(직렬화)
    - JSON.parse()
      - JSON객체를 js객체로 변환(역직렬화)
