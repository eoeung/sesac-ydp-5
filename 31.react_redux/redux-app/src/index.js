import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
import Training from './Training';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'; // 개발자 도구에서 확인할 수 있도록 설정
import rootReducer from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ################################
// ################################
// ################################
// 아래 코드는 ./store/counterReducer.js 파일로 옮겨서 진행
// → 폴더 및 파일을 분리

// // state의 초기값 정의
// const initialState = {
//   number: 50,
// };

// // reducer 정의: 변화를 일으키는 함수
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'PLUS':
//       return { number: state.number + 1 };
//     case 'MINUS':
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };
// ################################
// ################################
// ################################

// store 정의: 전역 상태를 관리하는 공간 (무조건 하나의 프로젝트에 하나만 존재해야함)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Props Drilling */}
      {/* <App /> */}

      {/* Redux 예제 */}
      {/* <App2 /> */}

      {/* Redux 폴더 및 파일 분리 */}
      {/* <App3 /> */}

      {/* Presentational Component + Container Component 분리 */}
      {/* <App4 /> */}

      {/* [실습 1] React Redux 실습(은행 => 입·출금) */}
      <Training />
    </Provider>
  </React.StrictMode>
);
