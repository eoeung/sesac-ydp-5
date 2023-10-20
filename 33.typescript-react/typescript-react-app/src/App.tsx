import React from 'react';
import logo from './logo.svg';
import Student from './components/Student';
import Card from './components/Card';
import TodoList from './components/TodoList';

function App() {
  const handleClick = (name: string, grade: number): void => {
    console.log(`안녕 난 ${name}이고, ${grade}학년이야`);
  };

  return (
    <div>
      <Student name="SeSAC-123" grade={3} handleClick={handleClick} />
      <Student name="SeSAC-456" grade={4} part="CS" handleClick={handleClick} />

      <hr/>

      <Card title="오늘 배울 것은?">
        <p>React With TypeScript</p>
      </Card>

      <hr/>

      <TodoList />
    </div>
  );
}

export default App;
