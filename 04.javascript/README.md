# 04.Javascript (2023/07/24, 07/26, 07/28)

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
    - null<br><br>
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
    - 기본 for문
    - for ... of
    - forEach()
      - return값이 없음
    - for ... in
  - while
  - break, continue
- 내장 메서드
  - 문자열 내장 메서드
  - 배열 내장 메서드
- 메서드 체이닝(method chaining)
- map(), filter(), find()
- pass by value / pass by reference
- 표준 내장 객체
  - Date
  - Math
- DOM
  - getElementById
  - getElementsByClassName
  - getElementsByTagName
  - getElementsByName
  - querySelector
  - querySelectorAll
- 유사 배열
  - HTMLCollection
  - NodeList
  - Array.from()
- DOM 요소 다루기
  - 태그 내부 내용 변경
    - innerHTML, innerText, textContent
  - 속성(attribute)
    - setAttribute(attribute, attributeValue)
    - getAttribute(attribute)
  - CSS 지정
    - xxx.style.attribute
    - xxx.classList
  - 요소 찾기
    - 계층 구조
      - 형제
        - xxx.previousElementSibling
        - xxx.nextElementSibling
      - 자식
        - xxx.children
      - 부모
        - xxx.parentNode
      - 조상
      - 자손
  - 요소 생성
    - document.createElement(태그명)
  - 요소 추가
    - xxx.append(y)
    - xxx.appendChild(y)
    - xxx.prepend(y)
  - 요소 삭제
    - xxx.remove()
    - xxx.removeChild()
- 이벤트
  - 함수 등록 방법
    - HTML
      - onXXX
    - Javascript
      - addEventListener
  - 이벤트 객체
    - 마우스 이벤트
    - 키보드 이벤트
    - 폼 이벤트
    - 체인지 이벤트
---

### \[실습 1] 나를 소개하는 Object 만들기

[나를 소개하는 Object 만들기](./js/training1_object.js)

### \[실습 2] 형변환 실습

[형변환 실습](./js/training2_type-conversion.js)

### \[실습 3] multifly() 함수 만들기

[multifly() 함수 만들기](./js/training3_function_multifly.js)

### \[실습 4] square() 함수 만들기

[square() 함수 만들기](./js/training4_function_square.js)

### \[실습 5] if문 실습

[if문 실습](./js/training5_condition.js)

### \[실습 6] 지금은 오전? 오후!?

[지금은 오전? 오후!?](./js/training6_conditional_operator.js)

### \[실습 7] 합계 구하기

[합계 구하기](./js/training7_sum.js)

### \[실습 8] 13의 배수이자 홀수를 찾아보자

[13의 배수이자 홀수를 찾아보자](./js/training8_thirteen.js)

### \[실습 9] 구구단 만들기

[구구단 만들기](./js/training9_multiplication-table.js)
