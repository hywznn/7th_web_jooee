import { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";
import axios from "axios";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr);
  width: 100%;
  height: auto;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
`;

const MoviePage = ({ category = "popular" }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDJkZjNkNTAyNGZkY2E1MTg2NjRkM2QzMTdhNjYzMyIsIm5iZiI6MTczMDA4Nzg0NC44NjU4MTUsInN1YiI6IjY3MDc5YjM4NjcxODAxMmZjMjMzYTllYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osih1GmQFasNLybasotogty3jawFvaU8M_UA0ZMeYi0",
          },
        }
      );
      console.log(result?.data.results);
      setMovies(result.data.results);
    };
    getMovies();
  }, [category]); // category 변경 시에만 재호출되도록 수정

  return (
    <GridContainer>
      {movies.length > 0 ? (
        movies.map((e) => <MoviePoster movie={e} key={e.id} />)
      ) : (
        <div>Sorry, no movies available...</div>
      )}
    </GridContainer>
  );
};

export default MoviePage;
