import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('mode'));
  // 쿼리스트링의 key값으로 접근한다.
  // searchParams.get(key값)

  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>MainPage</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
