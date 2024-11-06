function useForm() {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  //value 값들, input change 값 e.target.value
  const hanldeBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, e.target.value);
    const onBlur = () => hanldeBlur(name);

    return { value, onChange, onBlur };
  };

  return {
    values,
    touched,
    errors,
    getTextInputProps,
  };
}

export default useForm;

//
