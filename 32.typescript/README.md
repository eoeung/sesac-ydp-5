# 32.TypeScript (2023/10/18, 10/20)

## [TypeScript]

- TypeScript

  - 타입이 있는 자바스크립트
  - 정적 파일 언어
  - Transpiler
  - 설치

    ```bash
      # 1. TypeScript 설치
      $ npm i typescript

      # 2. Version 확인
      $ npx tsc -v

      # 3. tsconfig 파일 생성
      $ npx tsc --init

      # 4. ts파일을 js로 변환
      $ npx tsc 파일명.ts
    ```

  - 예시
    ```typescript
    let a: number = 1;
    let b: string = 'Hello World!';
    let c: object = {
      name: 'apple',
    };
    ```
  - ts-node

    - ts파일을 js로 변환하지 않고 바로 실행

    ```bash
      # ts-node 모듈 설치
      $ npm i ts-node

      # 실행
      $ npx ts-node 파일명.ts
    ```

  - 자료형

    - 기본 자료형
      - number
      - string
      - boolean
      - null
      - undefined
      - object
    - ts에만 존재하는 자료형
      - tuple
        - readonly
      - enum
        - number와 string만 가능
      - any
        - 어떤 자료형도 가능
      - interface
        - 객체 타입의 구조 정의
      - 교차 타입
        - 2가지 이상의 타입을 합치는 것
      - type
        - 기존 타입 또는 새 타입을 생성하는데 사용
        - type과 enum의 차이
          - type은 간편하게 사용 가능
          - enum은 값 사이에 관계가 있는 경우, 편하게 사용할 수 있음
        ```typescript
        // type이라는 키워드로 새로운 type을 선언
        type productInfo = [number, string, number];

        let product1: productInfo = [1, '로지텍', 1300000];
        let product2: productInfo = [2, 'laser', 52000];
        ```
      - void
        - 함수의 리턴 타입이 없는 경우
      - never
        - 함수의 끝에 도달할 수 없음
    - OverRiding vs OverLoading
      - [OverRiding 이동](./overriding.js)
    - Generic
      - 함수를 호출할 때, 데이터 타입을 지정할 수 있음
      ```typescript
      
      ```

### \[실습 1] Object, boolean 데이터 타입 순으로 설정하는 튜플 만들어보기

[Object, boolean 데이터 타입 순으로 설정하는 튜플 만들어보기](./training.ts)

### \[실습 2] arr1과 arr2는 같은 결과가 출력되는데, 어떤 차이가 있는지 알아보기

[arr1과 arr2는 같은 결과가 출력되는데, 어떤 차이가 있는지 알아보기](./training2.ts)

### \[실습 3] interface 이용

[interface 이용](./training3.ts)