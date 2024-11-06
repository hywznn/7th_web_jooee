### 키워드 정리 🍠

- Debounce & Throttling 🍠
  - Debounce는 무엇일까요?
    Debounce는 이벤트가 연속적으로 발생할 때, 특정 시간 동안 이벤트가 더 이상 발생하지 않을 때만 함수를 실행하도록 제어하는 기술입니다. 간단히 말해, 짧은 시간 내에 여러 번 이벤트가 발생해도 마지막 이벤트가 실행되기까지 일정 시간이 지나야 함수가 호출됩니다.
  - Debounce는 주로 어디에 사용하나요?
    • **검색 필터**: 사용자가 입력할 때마다 검색 요청을 보내는 대신, 입력이 멈춘 후에만 서버에 요청을 보냅니다.
    • **윈도우 리사이즈 이벤트**: 창 크기 조절이 끝난 후 레이아웃을 다시 렌더링하는 경우.
  - Throttling은 무엇일까요?
    Throttling은 이벤트가 연속적으로 발생하더라도 일정한 시간 간격으로 함수가 실행되도록 제어하는 기술입니다. 일정 시간 동안 발생한 이벤트 중 하나만 실행됩니다.
  - Throttling은 주로 어디에 사용하나요?
    • **스크롤 이벤트**: 사용자가 페이지를 스크롤할 때, 너무 많은 함수 호출을 막고 일정 간격으로만 실행되도록 합니다.
    • **버튼 연속 클릭 방지**: 짧은 시간 내에 버튼을 여러 번 클릭해도 하나의 클릭만 처리하도록 합니다.
  - Debounce와 Throttling의 차이점은 무엇일까요?
    - **Debounce**: 이벤트가 **끝난 후 일정 시간이 지나야** 함수를 실행합니다.
    • **Throttling**: 이벤트가 발생하더라도 **일정 간격으로만** 함수를 실행합니다.
  - 어떤 기능을 구현할 때 Debounce를 적용하고, Throttling을 적용하는 것이 좋을까요?
    - **Debounce**: 검색 입력, 창 크기 조정 후 처리, 텍스트 입력 시 서버 요청 등.
    • **Throttling**: 스크롤 이벤트 처리, 버튼 클릭 방지, 리사이즈 이벤트 등.
- 쿠키 🍠
  - 쿠키란 무엇이고, 어떤 특징을 가지고 있을까요?
    쿠키는 클라이언트(브라우저)에 저장되는 작은 데이터 조각으로, 서버와 클라이언트 간의 상태 정보를 유지하는 데 사용됩니다.
    ```
    •	브라우저에 저장되며, 특정 도메인에 한해 사용됩니다.
    •	만료일을 설정할 수 있으며, 설정한 기간 동안 유지됩니다.
    •	HTTP 요청 시 자동으로 서버에 전송됩니다.

    ```
  - 쿠키를 어떻게 사용할 수 있을까요?
    ```jsx
    // 쿠키 설정
    document.cookie =
      "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

    // 쿠키 읽기
    console.log(document.cookie);
    ```
- 토큰 🍠
  - 토큰이 왜 필요할까요?
    토큰은 사용자 인증 및 권한 부여를 위해 사용됩니다. 서버와 클라이언트 간의 안전한 통신을 위해 토큰을 사용하여 사용자의 신원을 확인할 수 있습니다.
  - CORS 에러가 무엇이고, 이 에러를 어떻게 해결할 수 있을까요?
    CORS(Cross-Origin Resource Sharing) 에러는 브라우저가 보안상의 이유로 다른 도메인의 리소스를 요청할 때 발생합니다.
    ```
    •	서버에서 CORS 헤더(Access-Control-Allow-Origin)를 설정하여 특정 도메인에 대한 요청을 허용합니다.
    •	프록시 서버를 사용하여 요청을 우회할 수도 있습니다.

    ```
  - JWT 토큰 기반 인증 방법이란 무엇일까요?
    JWT(Json Web Token)는 클라이언트와 서버 간의 인증을 위한 토큰 기반 인증 방법입니다. 토큰은 클라이언트가 서버에 요청을 보낼 때 인증 정보를 포함합니다.
  - JWT 기반 로그인 동작 과정에 대해 알아보세요.
    1. 사용자가 로그인 정보를 입력합니다.

    2. 서버가 사용자 인증 후, **AccessToken**과 **RefreshToken**을 생성합니다.

    3. 클라이언트는 **AccessToken**을 요청 헤더에 포함해 서버에 요청을 보냅니다.

    4. **AccessToken**이 만료되면, **RefreshToken**을 사용해 새로운 **AccessToken**을 발급받습니다.
  - AccessToken / RefreshToken의 차이에 대해 설명해주세요.
    - **AccessToken**: 사용자 인증 및 권한 부여에 사용되는 토큰으로, 짧은 수명을 가집니다.
    • **RefreshToken**: AccessToken이 만료되었을 때 새로운 AccessToken을 발급받기 위해 사용되며, 상대적으로 긴 수명을 가집니다.
- 웹 스토리지 🍠
  - 웹 스토리지의 메소드와 프로퍼티는 어떤게 있을까요?
    - **메소드**:
    • setItem(key, value): 데이터를 저장합니다.
    • getItem(key): 데이터를 가져옵니다.
    • removeItem(key): 데이터를 삭제합니다.
    • clear(): 모든 데이터를 삭제합니다.
  - 세션 스토리지에 대해 정리해 주세요!
    세션 스토리지는 브라우저 탭이 닫힐 때까지 데이터가 유지됩니다. 탭별로 분리되어 있으며, 한 탭의 세션 스토리지는 다른 탭과 공유되지 않습니다.
  - 로컬 스토리지에 대해 정리해 주세요!
    로컬 스토리지는 브라우저를 닫아도 데이터가 유지됩니다. 도메인에 따라 데이터를 저장하며, 수동으로 삭제하거나 브라우저 캐시를 삭제할 때까지 유지됩니다.
  - 로컬 스토리지에서 JWT 토큰을 저장하고, 사용하고, 삭제하는 메소드에 대해 찾아보세요!
    ```jsx
    // 저장
    localStorage.setItem("token", "your-jwt-token");

    // 사용
    const token = localStorage.getItem("token");

    // 삭제
    localStorage.removeItem("token");
    ```
  - 스토리지가 변경되었을 때 처리하는 방법을 조사해 주세요.
    storage 이벤트를 활용하여 다른 탭이나 창에서 스토리지가 변경되었을 때 이벤트를 처리할 수 있습니다.
    ```cpp
    window.addEventListener('storage', (event) => {
      console.log('Storage changed:', event);
    });
    ```
  - Bearer Token이 무엇인지 찾아보고, 이를 통해 백엔드 서버와 어떠한 방식으로 통신하는지 조사해 보세요!
    Bearer Token은 HTTP 요청의 Authorization 헤더에 포함되어 서버에 인증 정보를 전달하는 방식입니다.
- Context-API 🍠
  - 전역 상태 관리는 왜 해야할까요?
    전역 상태 관리가 필요한 이유는 여러 컴포넌트에서 공통적으로 사용하는 데이터를 관리하기 위해서입니다. 컴포넌트 간의 데이터 전달이 복잡할 때, 효율적으로 상태를 공유하고 유지할 수 있습니다.
  - Context API란 무엇일까요?
    Context API는 React에서 전역 상태를 관리하기 위한 내장 기능입니다. Prop Drilling 문제를 해결할 수 있으며, 컴포넌트 트리 전체에 데이터를 쉽게 전달할 수 있습니다.
    ```jsx
    import { createContext, useContext } from "react";

    const MyContext = createContext();

    function App() {
      return (
        <MyContext.Provider value="Hello World">
          <ChildComponent />
        </MyContext.Provider>
      );
    }

    function ChildComponent() {
      const value = useContext(MyContext);
      return <p>{value}</p>;
    }
    ```
