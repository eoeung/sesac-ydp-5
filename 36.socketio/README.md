# 36.Socket.io (2023/11/15)

## [Socket.io]

- Socket.io 설치

```bash
  # Socket.io 설치
  $ npm i socket.io
```

- Socket.io
  - 특징
    - WebSocket 프로토콜을 기반으로 구축됨
    - 이벤트 기반
    - 자동 재연결
  - 기본 이벤트
    - connection
      > ※ 클라이언트 측에서는 connect로 해야함
    - disconnect
    - disconnecting
    - error
  - socket.emit
  - socket.on