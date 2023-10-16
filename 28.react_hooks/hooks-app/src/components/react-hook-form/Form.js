import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체 중 에러만 꺼내옴
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  const onValid = (data) => {
    // console.log('onValid', data);
  };

  const onInValid = (data) => {
    // console.log('onInValid', data);
  };

  // console.log('errors', errors); // 조건을 만족하지 못하는 input만 errors 객체에 담긴다.
  // console.log('watch', watch('username')); // input에 있는 값을 감시할 경우, 사용

  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>

      {/* handleSubmit(Function) : form submit 시 호출 */}
      {/*
        handleSubmit(funcA[, funcB]) : 2개의 함수를 받을 수 있다.
          - funcA : 필수, 유요할 때 실행
          - funcB : 선택, 유효하지 않을 때 실행

      */}
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        {/* ...register(input에 사용할 이름) : input 할당, value 변경 감지 */}
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름을 입력해주세요.',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요.',
              value: 2,
            },
          })}
        />
        {errors.username?.message}
        <br />

        <input
          type="email"
          placeholder="email (gmail)"
          {...register('email', {
            required: '이메일을 입력해주세요.',
            validate: {
              useGmail: (v) =>
                v.includes('gmail.com') || 'gmail로만 가입 가능합니다.',
            },
          })}
        />
        {errors.email?.message}
        <br />

        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        {errors.password?.message}
        <br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
