# 30 ~ 31.React - Redux (2023/10/16, 10/18)

## [React - Redux]

- State의 종류
  - Local State
  - Cross-Component State
  - App-Wide State
- Props Drilling
- Redux 용어
  - Store
    - useSelector()
  - Action
    - state에 변화가 필요한 경우 사용
    - 컴포넌트에서 store에 운반되는 데이터
    - 하나의 객체 {...}
    - Reducer가 수행할 작업을 설명해주는 역할
  - Reducer
    - Action의 'Type'에 따라 변화를 일으키는 함수
    - reducer(state, action) => {...}
  - Dispatch
    - useDispatch()

```bash
# redux / react-redux / @reduxjs/toolkit 설치
$ npm i redux react-redux @reduxjs/toolkit redux-devtools-extension
```

### \[실습 1] React Redux 실습(은행 => 입·출금)

[React Redux 실습(은행 => 입·출금)](./src/Training.js)
