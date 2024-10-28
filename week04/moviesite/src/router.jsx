// router.jsx
import { createBrowserRouter } from "react-router-dom";
import MoviePage from "./components/MoviePage.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NowplayingPage from "./pages/moviePages/NowPlayingPage.jsx";
import PopularPage from "./pages/moviePages/PopularPage.jsx";
import TopratedPage from "./pages/moviePages/TopRatedPage.jsx";
import UpcomingPage from "./pages/moviePages/UpcomingPage.jsx";

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
        element: <NowplayingPage />,
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
    ],
  },
]);

export default router;
