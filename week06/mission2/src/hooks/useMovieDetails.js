import { useState, useEffect } from "react";
import axiosInstance from "../apis/axios-instance";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [isLoadingCast, setIsLoadingCast] = useState(true);
  const [isErrorDetails, setIsErrorDetails] = useState(false);
  const [isErrorCast, setIsErrorCast] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    // 영화 상세 정보 가져오기
    const fetchMovieDetails = async () => {
      setIsLoadingDetails(true);
      setIsErrorDetails(false);
      try {
        const detailsResponse = await axiosInstance.get(
          `/movie/${movieId}?language=ko-KR`
        );
        setMovieDetails(detailsResponse.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setIsErrorDetails(true);
      } finally {
        setIsLoadingDetails(false);
      }
    };

    // 출연진 정보 가져오기
    const fetchCast = async () => {
      setIsLoadingCast(true);
      setIsErrorCast(false);
      try {
        const creditsResponse = await axiosInstance.get(
          `/movie/${movieId}/credits?language=ko-KR`
        );
        setCast(creditsResponse.data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
        setIsErrorCast(true);
      } finally {
        setIsLoadingCast(false);
      }
    };

    fetchMovieDetails();
    fetchCast();
  }, [movieId]);

  return {
    movieDetails,
    cast,
    isLoading: isLoadingDetails || isLoadingCast,
    isError: isErrorDetails || isErrorCast,
  };
};

export default useMovieDetails;
