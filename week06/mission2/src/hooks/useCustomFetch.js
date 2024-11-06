import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

//최종목표
//const { data, isLoading, isError } = useCustomFetch(`url`);

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const reponse = await axiosInstance.get(url);
        setData(reponse.data);
      } catch (error) {
        setIsError(true); // 기본값이 false니까
      } finally {
        setIsLoading(false); // 결론적으로 다시 되돌아가는
      }
    };
    fetchData();
  }, [url]); // useEffect 항상 디펜던시가 실행되어야함

  return { data, isLoading, isError };
};

export default useCustomFetch;
