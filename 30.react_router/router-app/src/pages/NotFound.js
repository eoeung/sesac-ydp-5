import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to="/">홈으로 이동하기(React Router의 Link)</Link> <br/>
      <a href="/">홈으로 이동하기(a 태그)</a>
      {/* Link는 favicon이 움직이지 않는 것을 볼 수 있음 */}
    </div>
  );
}
