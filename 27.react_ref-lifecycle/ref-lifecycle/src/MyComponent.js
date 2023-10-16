import { useState, useEffect } from 'react';

const MyComponent = (props) => {
  const { number } = props;
  const [ text, setText ] = useState('');

  useEffect(() => {
    // Mount 시점에 실행
    console.log('Functional Component | O Mount!');

    // Unmount 시점에 실행
    return () => {
      console.log('Functional Component | X Unmount!');
    };
  }, []);

  // Mount & Update 시점에 실행
  useEffect(() => {
    console.log('Functional Component | V Update!');
  });

  // Text가 바뀔 때만 실행
  useEffect(() => {
    console.log('Functional Component | V Text Update!');
  }, [text]);

  return (
    <>
      <p>MyComponent {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default MyComponent;