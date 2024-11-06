// router.jsx
import { createBrowserRouter } from "react-router-dom";
import MoviePage from "./components/MoviePage.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import SignupPage from "./pages/SinguUp/SignupPage.jsx"; // 올바른 경로 확인
import SearchPage from "./pages/Search/SearchPage.jsx"; // 올바른 경로 확인
import CategoryPage from "./pages/Movies/CategoryPage.jsx"; // 올바른 경로 확인
import LoginPage from "./pages/Login/LoginPage.jsx"; // 올바른 경로 확인
import NowPlayingPage from "./pages/NowPlaying/NowPlayingPage.jsx"; // 올바른 경로 확인
import PopularPage from "./pages/Popular/PopularPage.jsx"; // 올바른 경로 확인
import TopRatedPage from "./pages/TopRated/TopRatedPage.jsx"; // 대소문자 수정
import UpcomingPage from "./pages/UpComing/UpcomingPage.jsx"; // 올바른 경로 확인
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage.jsx"; // 올바른 경로 확인
import React from "react";

// 404 페이지 처리
function ErrorFallback() {
  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>올바른 URL로 접속했는지 확인해주세요.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <MoviePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/movies", element: <CategoryPage /> },
      { path: "/movies/now-playing", element: <NowPlayingPage /> },
      { path: "/movies/popular", element: <PopularPage /> },
      { path: "/movies/top-rated", element: <TopRatedPage /> }, // 대소문자 수정
      { path: "/movies/up-coming", element: <UpcomingPage /> },
      { path: "/movies/:movieId", element: <MovieDetailPage /> },
      { path: "*", element: <ErrorFallback /> },
    ],
  },
]);

export default router;
