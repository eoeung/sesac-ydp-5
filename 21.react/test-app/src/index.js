import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
// ############### 기본 App ###############
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ############### Strict Mode 미적용 ###############
// root.render(<h1>Hello World!</h1>);

// ############### 현재 시간 보여주는 Clock ####################
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
