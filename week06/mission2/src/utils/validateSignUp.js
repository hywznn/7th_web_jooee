// 이메일 정규표현식
const emailPattern = /^[A-Za-z0-9_.+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/;

// 공통 검증 로직
function validateUser(values) {
  const errors = {};

  // 이메일 검증
  if (!values.email) {
    errors.email = "이메일은 필수 입력 항목입니다.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요.";
  }

  // 비밀번호 검증
  if (!values.password) {
    errors.password = "비밀번호는 필수 입력 항목입니다.";
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8자 이상 16자 이하로 입력해주세요.";
  }

  return errors;
}

// 회원가입 전용 검증 로직
export const validateSignUp = (values) => {
  const errors = validateUser(values);

  // 비밀번호 확인 검증
  if (!values.confirmPassword) {
    errors.confirmPassword = "비밀번호 확인은 필수 입력 항목입니다.";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
  }

  return errors;
};
