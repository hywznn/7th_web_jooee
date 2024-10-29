import React from "react";
import MoviePoster from "./MoviePoster";
import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";

const GridMovie = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr);
  background-color: black;
  color: white;
  padding: 20px;
`;

const MoviePage = ({ category = "popular" }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${category}?language=ko-KR&page=1`);
  //console.log(movies);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>에러</div>;

  const movieList = movies?.results || [];

  return (
    <GridMovie>
      {movieList.length > 0 ? (
        movieList.map((movie) => <MoviePoster movie={movie} key={movie.id} />)
      ) : (
        <div>No movies found</div>
      )}
    </GridMovie>
  );
};

export default MoviePage;
