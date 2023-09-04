# 18.Session - Cookie(2023/09/01)

## [Session - Cookie]

- session
   - express-session
      1. 세션 설정
         - req.session.key = value
      2. 세션 확인
         - req.sessionID
         - req.session.key
      3. 세션 제거
         - req.session.destroy(callback)
- cookie
  - cookie-parser
    1. 쿠키 설정
       - res.cookie(cookieName, cookieValue, config)
    2. 쿠키 확인
       - req.cookies
       - req.signedCookies
    3. 쿠키 제거
       - res.clearCookie(cookieName, cookieValue, config)
