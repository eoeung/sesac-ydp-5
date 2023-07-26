# 4일차 (2023/07/24 ~ ing)

## [Javascript 기본]

- console.log()
- Javascript 참조 방식
- 표기법
  - dash-case
  - snake_case
  - camelCase
  - PascalCase
- Zero-based Numbering
- 변수
  - var
  - let
  - const
- 선언
- 할당
- 식별자 규칙
- 자료형
  - Primitive(기본) 자료형
    - string
    - number
    - boolean
    - undefined
    - null<br>
      > console.log(typeof null)을 하게 되면 object라고 나오는데, 언어 자체 오류라고 보면 됨
    - symbol
    - bigint
  - Object(객체) 자료형
    - primitive 자료형을 제외한 모든 타입
- typeof
  - typeof x
  - typeof(x)
- 연산자
  - 대입 연산자
    - =
  - 산술 연산자
    - +, -, /, \*, %
    - \*\*
  - 비교 연산자
    - ==, !=, ===, !==
    - \>, \>=, <, <=
  - 논리 연산자
    - !, &&, ||
  - 증감 연산자
    - +=, -=, /=, \*=
    - 후위 연산자, 전위 연산자
      - ++, --
- 함수
  - 함수 종류
    - 내장 함수
    - 사용자 정의 함수
  - 함수 선언 방식
    - 함수 선언문(명시적 함수 선언)
    - 함수 표현식
    - 화살표 함수
  - 호이스팅(hoisting)
- 조건문
  - if, else if, else
  - switch-case
  - 삼항 연산자(Conditional Operator)
- 반복문
  - for
  - while
  - break, continue
- 내장 메서드
  - 문자열 내장 메서드
  - 배열 내장 메서드
- 메서드 체이닝(method chaining)

---

### \[실습 1] 나를 소개하는 Object 만들기

[나를 소개하는 Object 만들기](../js/training1_object.js)

### \[실습 2] 형변환 실습

[형변환 실습](../js/training2_type-conversion.js)

### \[실습 3] multifly() 함수 만들기

[multifly() 함수 만들기](../js/training3_function_multifly.js)

### \[실습 4] square() 함수 만들기

[square() 함수 만들기](../js/training4_function_square.js)

### \[실습 5] if문 실습

[if문 실습](../js/training5_condition.js)

### \[실습 6] 지금은 오전? 오후!?

[지금은 오전? 오후!?](../js/training6_conditional_operator.js)