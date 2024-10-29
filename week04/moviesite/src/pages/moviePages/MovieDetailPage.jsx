import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../../hooks/useMovieDetails";
import styled from "styled-components";
import CastProfile from "../../components/MovieDetail";

const Background = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding: 20px 20px 20px 40px;
`;

const MovieBackgroundImg = styled.div`
  padding-top: 5px;
  padding-left: 5px;
  width: 100%;
  height: 300px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  color: white;
  display: grid;
  grid-template-rows: 2fr 1.5fr 1.5fr 1.5fr 2fr 7fr;
`;

const CreditHeader = styled.h1`
  color: white;
  margin: 20px 0px 20px;
`;

const ProfileContainer = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding-right: 10px;
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { movieDetails, cast, isLoading, isError } = useMovieDetails(movieId);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>에러에요</h1>;

  // 백그라운드 이미지 스타일 설정
  const style = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4) 50%), url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
  };

  return (
    <Background>
      <div>
        <MovieBackgroundImg style={style}>
          <h1>{movieDetails.title}</h1>
          <span>평균 {movieDetails.vote_average}</span>
          <span>{movieDetails.release_date}</span>
          <span>{movieDetails.runtime}분</span>
          <h3>{movieDetails?.tagline}</h3>
          <span style={{ width: "800px" }}>{movieDetails.overview}</span>
        </MovieBackgroundImg>
      </div>
      <div>
        <CreditHeader>감독/출연</CreditHeader>
        <ProfileContainer>
          {cast?.map((cast) => (
            <CastProfile key={cast.id} cast={cast} />
          ))}
        </ProfileContainer>
      </div>
    </Background>
  );
};

export default MovieDetailPage;
