import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios"; // axios 임포트

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(19, 21, 23);
  height: 80px;
  padding-left: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
  }
`;

const NavButton = styled(Link)`
  &:hover {
    filter: brightness(0.5);
  }
  transition: filter 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  color: white;
  background-color: ${(props) => props.color || "rgb(19,21,23)"};
`;

const NavButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const NavLogo = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  color: rgb(253, 4, 91);
  text-decoration: none;
`;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);

      // 유저 정보 API 호출
      axios
        .get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          const email = response.data.email;
          const nickName = email.split("@")[0]; // 이메일 앞부분을 닉네임으로 사용
          setUserName(nickName);
        })
        .catch((error) => {
          console.error("유저 정보 불러오기 실패:", error);
          setIsLoggedIn(false); // 유저 정보 로드 실패 시 로그아웃 상태로 전환
        });
    }
  }, []);

  const handleLogout = () => {
    // 토큰 삭제
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // 로그인 상태 변경
    setIsLoggedIn(false);

    // 메인 페이지로 리다이렉트
    window.location.href = "/";
  };

  return (
    <NavbarContainer>
      <NavLogo to={"/"}>@HYWZNN</NavLogo>
      <NavButtonContainer>
        {isLoggedIn ? (
          <>
            <span>{userName}님 반갑습니다.</span>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <NavButton color={"rgb(19,21,23)"} to="/login">
              로그인
            </NavButton>
            <NavButton color={"rgb(253,4,91)"} to="/signup">
              회원가입
            </NavButton>
          </>
        )}
      </NavButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
