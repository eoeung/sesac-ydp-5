# 33.React With TypeScript (2023/10/20)

## [React With TypeScript]

- TypeScript을 기반으로 하는 React 프로젝트 설치

```bash
  # npx create-react-app 프로젝트명 --template typescript
  $ npx create-react-app typescript-react-app --template typescript

  # 기존 프로젝트에 typescript 적용하는 경우
  $ npm i typescript @types/node @types/react @types/react-dom @types/jest
```

- Props

  - type을 미리 적어두어야 함

  ```typescript
  interface Props {
    name: string;
  }

  function Test({name}: Props){...}
  ```

- useState\<T>
  ```typescript
  // useState에 Generic 사용하기
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 todo 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 todo 1개
  ```
- useRef\<T>
  ```typescript
  // useRef에 Generic 사용하기
  const inputRef = useRef<HTMLInputElement>(null); // html 요소 중, input 태그에 설정
  ```
- event 객체의 Type
  - React.XXXEvent
    - Click 관련
      - React.MouseEvent\<HTMLElement>
    - Keyboard 관련
      - React.KeyboardEvent\<HTMLInputElement>
    - change
      - React.ChangeEvent\<HTMLInputElement>
  ```typescript
  // Keydown 이벤트 객체 사용하기
  const handleKeyDown = (event: React.KeyboardEvent) => {...}
  ```
