# 24.React - Event Handler (2023/09/27)

## [React - Event Handler]

- Event Handler
  - e.target vs e.currentTarget
    - e.target : 부모로부터 이벤트가 위임된 자식 요소
    - e.currentTarget : 이벤트 핸들러 요소 자체
  - 클래스형 컴포넌트
    - bind
      - this가 호출되는 방법에 따라 결정되므로 늘 같지 않음
      - this.### = this.###.bind(this)
      - \<tag>on###={this.###.bind(null, parameter)}\</tag>
    - arrow function
      - this가 존재하지 않음
      - bind를 하지 않아도 됨
      - 선언되는 시점에서 이미 상위 스코프가 this로 바인딩이 됨
  - 함수형 컴포넌트
    - 인자 없는 경우 vs 인자 있는 경우
      - 인자 없는 경우 : 함수 이름만 전달
      - 인자 있는 경우
        - \<tag>on###={() => ###(parameter)}\</tag>
        - \<tag>on###={(e) => ###(e, parameter)}\</tag>

### \[실습 1-1] 이벤트 핸들링 실습

[이벤트 핸들링 실습](./src/ex/Handler_ex.js)

### \[실습 1-2] state & 이벤트 핸들링-1 실습

[state & 이벤트 핸들링-1 실습](./src/FontColor.js)

### \[실습 1-3] state & 이벤트 핸들링-2 실습

[state & 이벤트 핸들링-2 실습](./src/None.js)
