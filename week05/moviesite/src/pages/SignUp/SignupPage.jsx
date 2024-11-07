import React from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm"; // useForm 훅을 가져옵니다.

// 스타일 컴포넌트 정의
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
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #2a2a2a;
  color: white;
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

// 유효성 검사 함수
const validateSignUp = (values) => {
  const errors = {};
  const emailPattern = /^[A-Za-z0-9_.+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/;

  if (!values.email) {
    errors.email = "이메일은 필수 입력 항목입니다.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요.";
  }

  if (!values.password) {
    errors.password = "비밀번호는 필수 입력 항목입니다.";
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8자 이상 16자 이하로 입력해주세요.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "비밀번호 확인은 필수 입력 항목입니다.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
  }

  return errors;
};

const SignUpPage = () => {
  const initialValues = { email: "", password: "", confirmPassword: "" };
  const { values, errors, touched, handleChange, handleBlur } = useForm(
    initialValues,
    validateSignUp
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("회원가입 성공:", values);
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
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <ErrorText>{errors.password}</ErrorText>
        )}
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword}</ErrorText>
        )}
        <Button type="submit">제출</Button>
      </Form>
    </Container>
  );
};

export default SignUpPage;
