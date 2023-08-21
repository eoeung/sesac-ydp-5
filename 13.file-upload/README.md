# 13.파일 업로드 (2023/08/21)

## [파일 업로드]

- multer
  - multipart
  - req.file
- 파일 업로드 방법
  - 파일 개수
    - single()
    - array()
    - fields()
  - 폼 사용 여부
    - 폼 파일 업로드
    - 동적 파일 업로드

---
### \[실습 1] 파일 업로드

[파일 업로드 -1 : app.js](./app.js) <br>
[파일 업로드 -2 : form 화면 ('/training')](./views/training.ejs) <br>
[파일 업로드 -3 : form 화면 결과 ('/formRegister')](./views/formResult.ejs) <br>