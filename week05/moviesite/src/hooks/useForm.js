import { useState, useEffect } from "react";

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // 입력값 변경 핸들러
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // 포커스 해제 핸들러
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  // 값이 변경될 때마다 오류 검증
  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  // 입력 필드에 필요한 props 반환
  const getTextInputProps = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    getTextInputProps,
  };
};

export default useForm;
