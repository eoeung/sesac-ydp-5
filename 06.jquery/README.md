# 06.jQuery (2023/08/02)

## [jQuery]

- CDN
- jQuery
  - \$() → $(css 선택자)
  - $(this)
  - $().text()
  - $().html()
  - $().setAttribute('속성', '속성값')
  - $().css('css 속성', 'css 속성값') <br>
    > $().setAttribute('style', 'css 속성: css 속성값') 과 동일함
  - $().val() : 값 가져오기
  - $().val('') : 값 설정하기
- 요소
  - 요소 추가
    - append()
    - prepend()
    - before()
    - after()
  - 요소 삭제
    - remove()
    - empty() <br>
      > ※ Javascript에서는 다음과 같이 사용 <br>
      ```Element.innerText = ''```
  - 요소 찾기
    - 부모 요소
      - jQuery
        - ```parent()```
      - js 
        - ```Element.parentNodes``` <br>
        - ```Element.parentElement```
    - 다음 **형제** 요소
      - jQuery
        - ```next()```
      - js
        - ```Element.nextElementSibling```
    - 이전 **형제** 요소
      - jQuery
        - ```prev()```
      - js
        - ```Element.previousElementSibling```
    - 부모 요소
      - jQuery
        - ```children()```
      - js 
        - ```Element.children```
- 클래스 조작하기
  - 클래스 추가
    - jQuery
      - ```addClass()```
    - js
      - ```classList.add()```
  - 클래스 삭제
    - jQuery
      - ```removeClass()```
    - js
      - ```classList.remove()```
  - 클래스 포함하고 있는지 확인
    - jQuery
      - ```hasClass()```
    - js
      - ```classList.contains()```
  - 클래스 토글
    - jQuery
      - ```toggleClass()```
    - js
      - ```classList.toggle()```
- event
  - ready
    - jQuery
      - ```$(document).ready(function(){...})```
      - ```$(function(){...})```
    - js
      - ```document.addEventListener('DOMContentLoaded', function(){...})```
- Javascript와의 차이점
  > Javascript는 유사 배열 사용 → 반복문 필요 <br>
  vs <br>
  jQuery는 반복문 사용 없이도 사용 가능
---

  ### \[실습 1] 과일 이미지 바꾸기

[과일 이미지 바꾸기](./videos/change-fruit.mp4)

  ### \[실습 2] 클래스 바꾸기

[클래스 바꾸기](./videos/change-class.mp4)

  ### \[실습 3] 스케줄

[스케줄](./videos/schedule.mp4)