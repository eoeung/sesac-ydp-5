import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 todo 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 todo 1개
  const inputRef = useRef<HTMLInputElement>(null); // html 요소 중, input 태그에 설정

  const addTodo = (): void => {
    // :void는 생략 가능
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos); // 전체 Todo에 새로운 Todo를 추가
    setNewTodo(''); // input 초기화
  };

  // todo 아이템 완료 상태 변경 함수
  const toggleComplete = (id: number) => {
    // console.log(`${id}번 todo 완료 상태 수정됨`);
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, complete: !todo.completed } : todo; // todo.id와 받은 id값이 같다면, complete를 제외한 나머지 todo값은 그대로 풀어서 가져오고, complete값만 변경
    });
    setTodos(updatedTodos);
  };

  // useRef로 생성한 inputRef를 사용해서 입력창에 포커싱
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // inputRef.current.focus(); // Error: 'inputRef.current' is possibly 'null'
    // inputRef.current가 null일 가능성이 있기 때문에 에러 발생
  };

  // key down event 입력시, Todo 추가
  const handleKeyDown = (event: React.KeyboardEvent) => {
    // event의 타입은 React.~~Event
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="새로운 Todo 추가"
          ref={inputRef} // ref 연결
        />

        <button onClick={addTodo}>Todo 추가하기</button>
        <button onClick={focusInput}>포커싱</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
