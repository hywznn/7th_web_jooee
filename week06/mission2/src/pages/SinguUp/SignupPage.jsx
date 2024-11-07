import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import validateSignUp from "../../utils/validateSignUp"; // 파일 이름 수정
import serverApi from "../../apis/serverApi"; // axios 인스턴스 가져오기

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

const SignupPage = () => {
  const [apiError, setApiError] = useState("");
  const { values, errors, touched, getTextInputProps } = useForm(
    { email: "", password: "", confirmPassword: "" },
    validateSignUp // validateSignUp 함수로 입력값 검증
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        // 올바른 형식으로 데이터 전달
        const response = await serverApi.post("/auth/register", {
          email: values.email,
          password: values.password,
          passwordCheck: values.confirmPassword, // confirmPassword를 string으로 전달
        });

        console.log("회원가입 성공:", response.data);
        window.location.href = "/login"; // 로그인 페이지로 이동
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "회원가입 중 문제가 발생했습니다.";
        setApiError(errorMessage);
        console.error("회원가입 실패:", errorMessage);
      }
    } else {
      console.log("유효하지 않은 입력값:", errors);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>회원가입</Title>
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
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...getTextInputProps("confirmPassword")}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword}</ErrorText>
        )}
        {apiError && <ErrorText>{apiError}</ErrorText>}
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
  );
};

export default SignupPage;
