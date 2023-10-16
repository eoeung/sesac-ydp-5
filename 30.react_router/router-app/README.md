# 30.React - Router (2023/10/16)

## [React - Router]

- SPA
  - 단일 HTML
  - SEO에 최적화되지 않음
  - Rendering 방식
    - CSR(Client Side Rendering)
    - SSR(Server Side Rendering)
- React Router

  ```bash
  # 최소 6버전 이상 // 5버전과 코드가 많이 다름
  $ npm i react-router-dom@6
  ```

  - BrowserRouter
  - Routes
  - Route
    - path
    - element

  ```javascript
  import {BrowserRouter, Routes, Route} from 'react-router-dom'

  // ... skip ...

  <BrowserRouter>
    <Routes>
        <Route>
        </Route>
    </Route>
  </BrowserRouter>

  // ... skip ...
  ```

- Link
  - \<a> 태그와의 차이
    > \<Link> 태그는 컴포넌트 전환 <br> \<a> 태그는 페이지 전환
- useParams()
  - URL 파라미터
    ```javascript
    // /product/:id과 같이, 경로에 ':'를 사용해 설정되는 것
    ```
- useSearchParams()
  - URL 쿼리스트링
    ```javascript
    // ?mode=Dark과 같이, ?key=value로 쿼리스트링 형처럼 설정되는 것
    ```
- useNavigate()
  - 페이지 이동

### \[실습 1] Router 실습

[Router 실습](../../30.react_router_training/router-training-app/src/App.js)
