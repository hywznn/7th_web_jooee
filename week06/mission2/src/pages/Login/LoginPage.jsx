import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../utils/validate";
import serverApi from "../../apis/serverApi"; // 수정된 axios 인스턴스 가져오기

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1c;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const Input = styled.input`
  width: 300px;
  padding: 12px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  width: 300px;
  padding: 12px;
  background-color: #ff4d6d;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff1c3d;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const LoginPage = () => {
  const [apiError, setApiError] = useState("");
  const { values, errors, touched, getTextInputProps } = useForm(
    { email: "", password: "" },
    validateLogin
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        // 수정된 serverApi 인스턴스를 사용하여 로그인 API 호출
        const response = await serverApi.post("/auth/login", {
          email: values.email,
          password: values.password,
        });

        // 성공 시 토큰 저장
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        // 메인 페이지로 이동
        window.location.href = "/main";
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "로그인 중 문제가 발생했습니다.";
        setApiError(errorMessage);
        console.error("로그인 실패:", errorMessage);
      }
    } else {
      console.log("유효하지 않은 입력값:", errors);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>로그인</Title>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          {...getTextInputProps("email")}
        />
        {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...getTextInputProps("password")}
        />
        {touched.password && errors.password && (
          <ErrorText>{errors.password}</ErrorText>
        )}
        {apiError && <ErrorText>{apiError}</ErrorText>}
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
