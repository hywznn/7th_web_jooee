### 키워드 정리 🍠

- `useEffect` 🍠
  **설명**: useEffect는 React Hook으로, 컴포넌트가 렌더링될 때와 특정 상태나 props가 변경될 때 실행되는 사이드 이펙트를 관리합니다. 주로 데이터 패칭, DOM 조작, 구독 설정과 같은 작업에 사용됩니다.
  **특징**:
  - **Dependency Array**: 특정 값들이 변경될 때만 실행되도록 의존성 배열을 사용할 수 있습니다.
  - **Cleanup Function**: 컴포넌트가 언마운트되거나 재실행될 때 리소스를 정리하는 함수를 반환할 수 있습니다.
  ```cpp
  import { useEffect, useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;

      return () => {
        // Cleanup 작업
        console.log("Component unmounted or count changed");
      };
    }, [count]); // count가 변경될 때마다 실행

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```
- `try, catch, finally` 구문 🍠
  **설명**: 예외 처리를 위해 사용되는 JavaScript 구문입니다. 코드에서 에러가 발생할 수 있는 부분을 감싸고, 에러가 발생했을 때 이를 처리하거나, 마지막에 항상 실행되는 코드를 작성할 수 있습니다.
  **구조**:
  ```cpp
  try {
    // 에러가 발생할 수 있는 코드
  } catch (error) {
    // 에러가 발생했을 때 실행할 코드
    console.error(error);
  } finally {
    // 에러 여부에 상관없이 항상 실행되는 코드
    console.log("This will always run");
  }
  ```
- `axios` 🍠
  **설명**: axios는 Promise 기반의 HTTP 클라이언트로, 브라우저와 Node.js 환경에서 사용됩니다. 데이터 패칭과 API 요청을 편리하게 관리할 수 있습니다.
  **특징**:
  - JSON 변환이 자동으로 이루어집니다.
  - 요청 및 응답 인터셉터 기능을 제공합니다.
  - 타임아웃 설정 및 요청 취소 기능이 있습니다.
  ```cpp
  import axios from 'axios';

  axios.get('https://api.example.com/data')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  ```
- `fetch` 🍠
  **설명**: fetch는 브라우저 내장 함수로, 네트워크 요청을 비동기적으로 처리하기 위해 사용됩니다. Promise 기반이며, 주로 간단한 HTTP 요청에 사용됩니다.
  **특징**:
  - 기본적으로 JSON 변환을 위해 .json() 메서드를 사용해야 합니다.
  - 응답이 실패해도 항상 Promise가 반환되며, 네트워크 오류일 때만 catch 블록이 호출됩니다.
  ```cpp
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  ```
- `axios` vs `fetch` (차이점) 🍠
  [[JavaScript] Axios VS Fetch 무슨 차이일까](https://velog.io/@keynene/JavaScript-Axios-VS-Fetch-%EB%AC%B4%EC%8A%A8-%EC%B0%A8%EC%9D%B4%EC%9D%BC%EA%B9%8C)
- `.env` 파일에는 어떤 내용들을 관리할까요? 🍠
  **설명**: .env 파일은 애플리케이션의 환경 변수를 정의하는 데 사용됩니다. 민감하거나 환경에 따라 변경되는 설정 값을 쉽게 관리할 수 있습니다.
  **주요 내용**:
  - **API URL**: REACT_APP_API_URL=http://example.com
  - **Secret Keys**: SECRET_KEY=my-secret-key
  - **포트 번호**: PORT=4000
  - **기타 환경 변수**: 서비스 모드, 데이터베이스 연결 정보 등
  - **주의사항**: .env 파일은 민감한 정보를 포함할 수 있으므로, **절대 Git에 포함되지 않도록** .gitignore에 추가하는 것이 중요합니다.
- **`custom hook ?`**
  **설명**: custom hook은 React의 Hook 로직을 재사용하기 위해 개발자가 직접 작성하는 사용자 정의 Hook입니다. 반복적인 로직을 분리해 코드의 가독성과 재사용성을 높일 수 있습니다.
  **특징**:
  - use라는 접두어로 시작하며, 내부적으로 다른 Hook(useState, useEffect 등)을 사용할 수 있습니다.
  - 상태 관리와 사이드 이펙트 처리를 쉽게 추상화할 수 있습니다.
  ```cpp
  import { useState, useEffect } from 'react';

  function useFetchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }, [url]);

    return { data, loading };
  }

  export default useFetchData;
  ```

### useNavigate, useLocation

- useNavigate, useLocation
  ### useNavigate
  `useNavigate`은, 페이지를 이동할 떄 사용합니다.
  `react-router`에서 재공해주는 `Link` 태그로도, 이동할 수 있는 것 아니냐는 의문이 있을 것 입니다. 어떠한 이벤트(클릭, 더블클릭, 키보드 입력 etc..)가 일어난 이후 페이지를 이동시키고 싶거나, 페이지 이동 후 추가적인 로직이 필요한 경우 **`useNavigate`**을 활용하면 됩니다.
  **`navigate`**은 2개의 인자를 받습니다.
  ```jsx
  <button
    onClick={() =>
      navigate("/profile", {
        replace: false,
        state: { userId: 123, userName: "JohnDoe" },
      })
    }
  >
    View Profile
  </button>
  ```
  ### replace
  - **`replace: true`**
    `replace` 속성을 `true`로 설정하면 현재의 히스토리 항목을 새로운 URL로 대체합니다. 즉, 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지가 아니라 이동 전의 페이지가 아닌 경우에는 메인 페이지("/")로 돌아가게 됩니다. 이렇게 하면 브라우저의 히스토리에 새로운 항목이 추가되지 않으므로 사용자가 이전 페이지로 돌아가지 못하게 됩니다.
  - **`replace: false`**
    `replace` 속성을 false로 설정하거나 생략하면 기본값이 적용됩니다. 이 경우, 이동한 페이지가 브라우저의 히스토리에 새로운 항목으로 추가됩니다. 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지로 돌아갈 수 있습니다. 이는 브라우저의 히스토리 스택에 새로운 항목을 추가하는 방식입니다.
  ### state
  - 위 예시에서 버튼을 클릭하면 사용자는 `/profile` 페이지로 이동합니다. 이때 `state` 객체를 통해 `userId`와 `userName` 정보를 전달하게 됩니다. 이 정보는 `/profile` 페이지에서 `useLocation` 훅을 사용해 접근할 수 있습니다.
  ```jsx
  import { useLocation } from "react-router-dom";

  const ProfilePage = () => {
    const location = useLocation();
    const { userId, userName } = location.state || {}; // state를 안전하게 접근

    return (
      <div>
        <h1>Profile Page</h1>
        <p>User ID: {userId}</p>
        <p>User Name: {userName}</p>
      </div>
    );
  };
  ```
  위의 `ProfilePage` 컴포넌트에서는 `useLocation` 훅을 통해 `state`에 접근하여 `userId`와 `userName`을 출력합니다. 이 정보를 이용해 페이지에서 사용자 관련 데이터를 동적으로 표시할 수 있습니다.

### useParams

- useParams
  ### useParams
  우리가, 만약에 **`Dynamic Routing`**을 설정했다고 가정해보겠습니다.
  ```jsx
  {
      path: '/movie/:movieId',
      element: <MovieDetailPage/>
  }
  ```
  이전에, 제가 설명드린 내용에서, **`Dynamic Routing`**은 **`:`**을 앞에 붙인 형태로, 작성된다고 말씀드렸고, **`뒤의 이름을 기억`**해야 한다고 전달해드렸습니다.
  ```jsx
  import { useParams } from "react-router-dom";

  const MovieDetailPage = () => {
    const params = useParams();
    console.log(params);

    return (
      <div className="test">
        <p>현재 페이지의 파라미터는 {params.movieId} 입니다.</p>
      </div>
    );
  };

  export default MovieDetailPage;
  ```
  ![스크린샷 2024-09-14 오전 1.37.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7ae8b375-053b-43b4-8507-8c05feaecd82/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.37.32.png)
  이런식으로, **`params`**의 값이 입력됨을 알 수 있다. 우리가 실제로 위에서 설정한 `movieId` 라는 이름으로, 파라미터의 값이 전달됨을 확인할 수 있습니다.
  조금 더 깔끔하게 적기 위해서, **`구조분해 할당`**을 활용할 수 있습니다.
  ```jsx
  import { useParams } from "react-router-dom";

  const MovieDetailPage = () => {
    const { movieId } = useParams();

    return (
      <div className="test">
        <p>현재 페이지의 파라미터는 {movieId} 입니다.</p>
      </div>
    );
  };

  export default MovieDetailPage;
  ```
  보통, **`데이터 개별 조회`**를 하는 경우에, 이 **`해당하는 ID를 활용`**해서, 데이터 조회 요청을 하므로, 매우 유용한 패턴이니 꼭 익히시길 바랍니다!
