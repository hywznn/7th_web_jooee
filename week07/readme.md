### 키워드 정리 🍠

- Tanstack-Query 🍠
  - Tanstack-Query 초기 세팅 방법
    Tanstack-Query는 데이터 페칭, 캐싱, 업데이트, 동기화 등을 관리하기 위한 강력한 라이브러리입니다. 초기 세팅은 react-query 패키지를 설치하고, QueryClient와 QueryClientProvider를 설정하는 것으로 시작합니다.
    npm install @tanstack/react-query
    ```jsx
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

    const queryClient = new QueryClient();

    function App() {
      return (
        <QueryClientProvider client={queryClient}>
          <YourComponent />
        </QueryClientProvider>
      );
    }

    export default App;
    ```
  - Query-DevTools?
    Query-DevTools는 Tanstack-Query에서 제공하는 디버깅 도구입니다. 애플리케이션 내에서 쿼리 상태를 확인하고, 데이터를 쉽게 추적할 수 있게 도와줍니다.
    ```jsx
    import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

    function App() {
      return (
        <QueryClientProvider client={queryClient}>
          <YourComponent />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      );
    }
    ```
  - useQuery
    useQuery는 데이터를 가져오기 위해 사용되는 훅으로, 비동기 데이터 페칭을 단순화합니다. 캐싱, 재시도 로직 등을 내장하고 있습니다.
    ```jsx
    import { useQuery } from "@tanstack/react-query";

    function MyComponent() {
      const { data, error, isLoading } = useQuery(["todos"], fetchTodos);

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;

      return (
        <div>
          {data.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </div>
      );
    }
    ```
  - useInfiniteQuery
    useInfiniteQuery는 무한 스크롤을 구현할 때 사용되는 훅입니다. 데이터의 페이지를 계속 불러와서 추가하는 기능을 제공합니다.
    ```jsx
    import { useInfiniteQuery } from "@tanstack/react-query";

    function InfiniteScrollComponent() {
      const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery(["items"], fetchItems, {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        });

      return (
        <div>
          {data.pages.map((page, index) => (
            <div key={index}>
              {page.items.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          ))}
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              Load More
            </button>
          )}
        </div>
      );
    }
    ```
  - queryKey
    queryKey는 각 쿼리를 고유하게 식별하기 위한 키입니다. 캐싱과 데이터를 구분할 때 사용됩니다.
    ```jsx
    useQuery(["user", userId], fetchUser);
    ```
- Pagination 🍠
  - Pagination은 무엇인가요?
    Pagination은 많은 양의 데이터를 한 번에 보여주지 않고, 여러 페이지로 나누어 보여주는 방법입니다. 페이지 번호를 통해 사용자는 특정 데이터 세트로 이동할 수 있습니다.
  - Pagination을 어떠한 방식으로 구현할 수 있을까요?
    • **클라이언트 측 Pagination**: 모든 데이터를 한 번에 가져와서 클라이언트에서 페이지별로 나누어 표시합니다.
    • **서버 측 Pagination**: 필요한 페이지의 데이터만 서버에서 가져옵니다. 대량의 데이터를 처리할 때 성능상 유리합니다.
  - Pagination의 장점과 단점에 대해 정리해주세요.
    - **장점**:
    • 대량의 데이터를 효율적으로 관리할 수 있습니다.
    • 로딩 시간을 줄일 수 있으며, 사용자 경험을 개선합니다.
    - **단점**:
    • 페이지를 이동할 때마다 새로운 데이터를 요청해야 할 수 있어 서버 요청이 많아질 수 있습니다.
    • 사용자가 데이터를 한눈에 보지 못해 탐색이 불편할 수 있습니다.
- Infinite Scroll 🍠
  - Intersection Observer는 무엇인가요?
    Intersection Observer는 특정 요소가 뷰포트에 들어오거나 나갈 때를 감지하는 브라우저 API입니다. 주로 무한 스크롤이나 지연 로딩을 구현할 때 사용됩니다.
  - Infinite Scroll은 무엇일까요?
    Infinite Scroll은 사용자가 페이지를 스크롤할 때 추가 데이터를 자동으로 불러오는 기술입니다. 데이터를 한 번에 모두 로드하지 않고, 필요한 만큼 동적으로 로드합니다.
  - Inifinite Scroll은 어떻게 구현할까요?
    1. **Intersection Observer**를 사용하여 사용자가 페이지 하단에 도달할 때 데이터를 요청합니다.

    2. **useInfiniteQuery**를 사용하여 데이터를 무한히 불러옵니다.
    ```jsx
    import { useEffect, useRef } from "react";

    function InfiniteScrollComponent({ loadMore }) {
      const observerRef = useRef();

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              loadMore();
            }
          },
          { threshold: 1 }
        );
        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
      }, [loadMore]);

      return <div ref={observerRef}>Loading more...</div>;
    }
    ```
  - Infinite Scroll의 장점과 단점에 대해 정리해주세요.
    - **장점**:
    • 사용자가 스크롤할 때만 데이터를 불러오므로 초기 로딩 속도가 빠릅니다.
    • 더 자연스러운 사용자 경험을 제공합니다.
    - **단점**:
    • 특정 데이터를 바로 찾기 어렵고, 페이지 네비게이션이 불가능합니다.
    • 데이터가 많을 경우 메모리 사용량이 증가할 수 있습니다.
    • 사용자가 계속 스크롤해야 하므로 UX가 불편할 수 있습니다.
