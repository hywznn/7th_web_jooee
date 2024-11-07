// src/apis/serverApi.js
import axios from "axios";

// 백엔드 서버 URL을 baseURL로 설정
const serverApi = axios.create({
  baseURL: "http://localhost:3000", // 백엔드 서버 URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default serverApi;
