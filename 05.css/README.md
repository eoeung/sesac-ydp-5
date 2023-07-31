# 05.CSS (2023/07/31)

## [반응형 웹]

- CSS 단위
  - px
  - %
  - em
  - rem
  - vw
  - vh
- CSS 변수
  1. ':'사용해서 변수를 담을 변수를 정의
  > (Ex. ```:root{...}```)
  2. '--'로 시작하도록 변수를 정의
  > (Ex. ```--color-success #000;```)
  3. 전역 변수 사용
  > (Ex. ```.btn{color: var(--color-white);}```)
  4. 지역 변수 사용
  > (Ex. ```--size: 8px; padding: var(--size);```)
  5. calc()함수를 사용해서 계산도 할 수 있음
  > (Ex. ```width: calc(var(--size) * 25);```)
- Media Query (@media)
- Bootstrap
  - Docs로 적용하고 싶은 부분 적용해보기
  - 
  - 
---

  ### \[실습 1] 미디어 쿼리 사용하기

[미디어 쿼리 사용하기](./videos/mediaQuery.mp4)

### \[실습 2] 크기에 따라 자리 바꾸기

[크기에 따라 자리 바꾸기](./videos/change_position.mp4)

### \[실습 3] header 만들기

[header 만들기](./images/ward.png)

### \[실습 4] Bootstrap Grid System

[Bootstrap Grid System](./videos/bootstrap.mp4)