// src/hooks/useCustomFetch.js
import { useEffect, useState } from "react";
import movieApi from "../apis/axios-instance"; // 영화 API 인스턴스 가져오기

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await movieApi.get(url);
        setData(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
