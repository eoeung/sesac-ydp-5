# 03.CSS (2023/07/21, 07/24)

## [CSS 기본]

- CSS란?
  - Cascading Style Sheet (연속적인[폭포, 계단식인] 스타일 시트)
- CSS 참조 방식
  - 인라인 방식
  - 내장 방식
  - 링크 방식
- CSS 적용 순서
  - 모든 방식이 존재할 경우, 가장 늦게 읽히는 방식으로 적용됨
  - 인라인 > 내장 ? 링크
    - 인라인은 무조건 우선이며, 내장과 링크는 늦게 쓰여진 것이 우선 적용됨
- 선택자(Selector)
  - 단일 선택자
    - 전체 선택자: (\*)
    - 태그 선택자: (태그명)
    - class 선택자: (.class속성값)
    - id 선택자: (#id속성값)
  - 다중(복합) 선택자
    - 하위(후손) 선택자(Descendant Combinator): ( → one space)
    - 자식 선택자(Child Combinator): (>)
    - 인접 형제 선택자: (+)
      - A + B: A 뒤에 있는 B 하나만
    - 일반 형제 선택자: (~)
      - A ~ B: A 뒤에 있는 B 모두
  - 가상 클래스 선택자 (Pseudo-Classes Selector)
    1. 사용자의 행동에 따라 변환
       - :hover
       - :active
       - :focus
       - :visited
    2. 요소의 상황
       - ABC:first-child
         - 선택자 ABC가 형제 요소 중 첫째인 경우 선택<br>
           `.fruits span:first-child{...}`
       - ABC:last-child
         - 선택자 ABC가 형제 요소 중 마지막이라면 선택<br>
           `.fruits h3:last-child{...}`
       - ABC:nth-child(n | condition)
         - 선택자 ABC가 형제 요소 중 (n 또는 수식 또는 조건)에 만족하면 선택<br>
           `.fruits *:nth-child(2){...}`
    3. 부정 선택
       - ABC:Not(XYZ)
         - 선택자 XYZ가 아닌 요소 ABC 선택<br>
           `.fruits *:not(span){...}`
  - 가상 요소 선택자 (Pseudo-Elements Selector)
    - ::before
    - ::after
      - content 속성을 사용하며 반드시 값을 넣어주어야 함
  - 속성 선택자 (Attribute Selector)
    - [ABC]
      - 속성 ABC를 포함한 요소 선택<br>
        `[disabled] {...}`
    - [ABC="XYZ"]
      - 속성 ABC이고, 속성값이 XYZ인 요소 선택<br>
        `[type="password"]{...}`
  - CSS 우선 순위
    1. !important
    2. 인라인 스타일
    3. 아이디 선택자
    4. 클래스/속성/가상 선택자
    5. 태그 선택자
    6. 전체 선택자<br><br> > 동일한 우선 순위거나 충돌이 발생하는 경우가 있다.<br>
       제일 특정지어질수록(범위가 좁을 수록) 먼저 선택되거나, 나중에 작성된 css코드가 아닌가 봐야함
- CSS 박스 모델
  - content-box
  - border-box
- CSS 복잡한 속성
  - Position
    1. static
    2. relative
    3. absolute
    4. fixed
- z-index
- overflow
- transform
  - skew(기울기)
  - rotate(회전)
  - translate(이동)
  - scale(확대축소)
- display
  - inline
  - block
  - inline-block
  - flex
- animation
  - @keyframes

<hr>

### \[실습 1-1] CSS로 무지개 만들기

[CSS로 무지개 만들기](./images/rainbow.png)

### \[실습 2] 선택자 연습

[선택자 연습](./images/selector.png)

### \[실습 3] 다중(복합) 선택자

[다중(복합) 선택자](./images/combinator.png)

### \[실습 4] 가상 클래스 선택자

[가상 클래스 선택자](./images/pseudo_classes_selector.png)

### \[실습 5] 줄무늬 만들기

[줄무늬 만들기](./images/make_stripes.png)

### \[실습 6] 애벌레 그리기

[애벌레 그리기](./images/position.png)

### \[실습 7] 사진 쌓기

[사진 쌓기](./images/transform.png)

### \[선택 실습] transition

[transition](./videos/transition.mp4)

### \[실습 9] 다양한 Header 만들기

[다양한 Header 만들기](./images/flex.png)

### \[실습 10] 원 움직이기

[원 움직이기](./videos/animation.mp4)

### \[실습 11] 글씨 애니메이션

[글씨 애니메이션](./css/training11_string_animation.css)
