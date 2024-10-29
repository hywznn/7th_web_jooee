// router.jsx
import { createBrowserRouter } from "react-router-dom";
import MoviePage from "./components/MoviePage.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NowPlayingPage from "./pages/moviePages/NowPlayingPage.jsx";
import PopularPage from "./pages/moviePages/PopularPage.jsx";
import TopratedPage from "./pages/moviePages/TopRatedPage.jsx";
import UpcomingPage from "./pages/moviePages/UpcomingPage.jsx";
import MovieDetailPage from "./pages/moviePages/MovieDetailPage.jsx"; // 영화 상세 페이지 추가
import React from "react";

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
      {
        index: true,
        element: <MoviePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/movies",
        element: <CategoryPage />,
      },
      {
        path: "/movies/now-playing",
        element: <NowPlayingPage />,
      },
      {
        path: "/movies/popular",
        element: <PopularPage />,
      },
      {
        path: "/movies/top-rated",
        element: <TopratedPage />,
      },
      {
        path: "/movies/up-coming",
        element: <UpcomingPage />,
      },
      {
        path: "/movies/:movieId", // 영화 상세 페이지 경로
        element: <MovieDetailPage />,
      },
      {
        path: "*", // 404 페이지 처리
        element: <ErrorFallback />,
      },
    ],
  },
]);

export default router;
