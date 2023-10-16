# 28.React - Hooks

## [React - Hooks]

- Hooks (추후 추가 예정)
- react-hook-form
  ```bash
  $ npm i react-hook-form
  ```
  - useForm()
    - register
    - handleSubmit(FuncA[, FuncB])
    - watch
    - formState
      - errors
      - isValid
      - isDirty
      - isSubmitted
      - ...
- Optinal Chaning

  ```javascript
  // Optional Chaining (옵셔널 체이닝)
  const user = {};
  const user2 = { name: 'apple' };

  console.log(user && user.address && user.name); // undefined
  console.log(user?.address?.name); // undefined

  console.log(user2); // {name: 'apple'}
  console.log(user2?.name); // apple
  console.log(user2 && user2.address && user2.name); // undefined
  console.log(user2?.address?.name); // undefined
  console.log(user2?.name?.address); // undefined
  ```

### \[실습 1] react-hook-form 실습

[react-hook-form 실습](./src/components/react-hook-form/Training.js)
