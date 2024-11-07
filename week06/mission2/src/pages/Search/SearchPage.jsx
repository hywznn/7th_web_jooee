import React, { useState } from "react";
import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import MoviePoster from "../../components/MoviePoster";
import SkeletonUI from "../../components/SkeletonUI";

const SearchPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const NoDataMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: grey;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(
    searchTerm ? `/movies?title=${searchTerm}` : null // 검색어가 있을 때만 API 호출
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchPageContainer>
      <SearchInput
        type="text"
        placeholder="영화 제목을 입력해주세요..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {isLoading ? (
        <SkeletonUI />
      ) : isError ? (
        <NoDataMessage>데이터를 불러오는 중 문제가 발생했습니다.</NoDataMessage>
      ) : movies.length === 0 && searchTerm ? (
        <NoDataMessage>해당 검색어에 대한 결과가 없습니다.</NoDataMessage>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {movies.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </SearchPageContainer>
  );
};

export default SearchPage;
