### 키워드 정리 🍠

- useRef 🍠
  **설명**: useRef는 React Hook 중 하나로, DOM 요소에 직접 접근하거나, 컴포넌트의 상태가 아닌, 값이 바뀌어도 리렌더링을 트리거하지 않는 변수를 관리할 때 사용합니다. 주로 Uncontrolled Input에서 입력 필드에 접근하기 위해 사용되며, 렌더 사이클과 무관한 값을 저장할 때 유용합니다.
  **특징**:
  - useRef는 객체를 반환하며, 이 객체는 { current: ... } 형태로 되어 있습니다.
  - current 프로퍼티를 통해 원하는 DOM 요소나 값에 접근할 수 있습니다.
  - 리렌더링을 트리거하지 않기 때문에 성능적으로 유리한 경우가 많습니다.
  **예시**:
  ```cpp
  import { useRef } from 'react';

  function Example() {
    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus();
    };

    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>포커스</button>
      </div>
    );
  }

  export default Example;
  ```
- input의 주요 프로퍼티 🍠
  - 아래 내용 이외에, 자주 사용하는 프로퍼티가 있으면 추가로 더 정리해주세요! 🍠
  ### 1. `type`
  - **설명**: 입력 필드의 종류를 설정합니다.
  - **값 예시**: `"text"`, `"password"`, `"email"`, `"number"`, `"checkbox"`, `"radio"` 등
  - **예시**: `<input type="text" />`
  ### 2. `value`
  - **설명**: 입력 필드의 값을 설정하고 제어할 때 사용됩니다. **Controlled Component**에서 자주 사용됩니다.
  - **값 예시**: 문자열 또는 숫자
  - **예시**: `<input type="text" value={value} />`
  ### 3. `defaultValue`
  - **설명**: 초기값을 설정하는 데 사용됩니다.
  - **값 예시**: 문자열 또는 숫자
  - **예시**: `<input type="text" defaultValue="초기값" />`
  ### 4. `onChange`
  - **설명**: 사용자가 입력 필드에 값을 입력하거나 변경할 때 호출되는 이벤트 핸들러입니다.
  - **값 예시**: 함수
  - **예시**: `<input type="text" onChange={(e) => setValue(e.target.value)} />`
  ### 5. `placeholder`
  - **설명**: 입력 필드가 비어 있을 때 표시되는 힌트 텍스트입니다.
  - **값 예시**: 문자열
  - **예시**: `<input type="text" placeholder="여기에 입력하세요" />`
  ### 6. `checked`
  - **설명**: 체크박스나 라디오 버튼이 선택되었는지 여부를 제어합니다.
  - **값 예시**: `true` 또는 `false`
  - **예시**: `<input type="checkbox" checked={isChecked} />`
  ### 7. `defaultChecked`
  - **설명**: 체크박스나 라디오 버튼의 초기 상태를 설정합니다.
  - **값 예시**: `true` 또는 `false`
  - **예시**: `<input type="checkbox" defaultChecked />`
  ### 8. `disabled`
  - **설명**: 입력 필드를 비활성화하여 사용자 입력을 막습니다.
  - **값 예시**: `true` 또는 `false`
  - **예시**: `<input type="text" disabled />`
  ### 9. `readOnly`
  - **설명**: 입력 필드의 값을 읽기 전용으로 설정합니다. 사용자는 값을 변경할 수 없습니다.
  - **값 예시**: `true` 또는 `false`
  - **예시**: `<input type="text" readOnly />`
  ### 10. `name`
  - **설명**: 폼 데이터를 제출할 때 서버로 전송되는 데이터의 이름을 지정합니다.
  - **값 예시**: 문자열
  - **예시**: `<input type="text" name="username" />`
  ### 11. `maxLength`
  - **설명**: 입력할 수 있는 최대 글자 수를 지정합니다.
  - **값 예시**: 숫자
  - **예시**: `<input type="text" maxLength={10} />`
  ### 12. `min` / `max`
  - **설명**: 숫자 또는 날짜 입력에서 사용할 수 있는 최소/최대 값을 지정합니다.
  - **값 예시**: 숫자 또는 날짜
  - **예시**: `<input type="number" min={1} max={10} />`
  ### 13. `autoFocus`
  - **설명**: 페이지가 로드될 때 자동으로 입력 필드에 포커스를 줍니다.
  - **값 예시**: `true` 또는 `false`
  - **예시**: `<input type="text" autoFocus />`
  ### 14. `required`
  - **설명**: 입력 필드를 필수 입력으로 설정합니다. 폼을 제출할 때 이 필드가 비어 있으면 제출이 거부됩니다.
  - **값 예시**: `true` 또는 `false`
  - **예시**: `<input type="text" required />`

### **`Controlled Input`** vs **`UnControlled Input`**

- Controlled Input
  ### Controlled Input
  **`Controlled Input`**은 React의 상태(state)에 의해 폼의 값을 관리하는 방식입니다. Input의 value가 컴포넌트의 상태에 연결되어 있고, 상태값이 달라질 떄 마다, 입력 필드의 값도 갱신됩니다.
  쉽게 말해서, Input의 값은, **`React Component가 제어`**하고, 모든 입력 변화 또한, **`컴포넌트의 상태로 반영`**되어집니다.
  특징
  - Input의 value는, React의 **`state`**로 관리됩니다.
  - 상태 값이, **`Input의 value 속성에 직접적으로 연결`** 됨.
  - **`Input`**의 **`Value`**가 **`변경`**되면, **`상태가 업데이트`**되고, **`상태가 다시 렌더링을 Trigger`** 함.
  - **`React`**가 **`Form 요소의 현재 값을 항상 알고 있기에 제어가 용이`**.
  ```tsx
  import { useState } from "react";

  function ControlledInput() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>입력: {inputValue}</p>
      </div>
    );
  }

  export default ControlledInput;
  ```
  ### 장점:
  - 상태를 통해 값이 직접적으로 제어되기 때문에 **`폼 데이터를 검증`**하거나 **`조작`**하기가 쉽습니다.
  - **`사용자 입력을 실시간으로 검증`**하거나 **`포맷을 조정`**할 수 있습니다.
  ### 단점:
  - **`컴포넌트에서 상태 관리가 복잡`**해질 수 있으며, 특히 폼 데이터에 너무 많은 value들을 관리하는 경우 **`성능에 부담`**이 될 수 있습니다.
- UnControlled Input
  ### UnControlled Input
  **`Uncontrolled Input`**은 React의 state가 아닌 DOM 자체에서 입력 값을 관리하는 방식입니다. 폼의 값은 **`React 컴포넌트가 직접 관리하지 않고`**, 필요할 때 DOM에서 직접 값을 참조하는 방법입니다. 이를 위해 `ref`를 사용하여 **`DOM 요소에 직접 접근`**할 수 있습니다.
  ### 특징
  - 입력값이 `state`에 의존하지 않고, React의 제어 밖에서 관리됩니다.
  - 폼 요소의 값은 사용자가 입력하는 대로 DOM에 저장되며, 필요할 때만 값을 읽어 옵니다.
  - React의 상태를 사용하지 않기 때문에 폼을 간단하게 유지할 수 있습니다.
  ```tsx
  import { useRef } from "react";

  function UncontrolledInput() {
    const inputRef = useRef(null);

    const handleSubmit = () => {
      console.log(`입력: ${inputRef.current.value}`);
    };

    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>제출</button>
      </div>
    );
  }

  export default UncontrolledInput;
  ```
  ### 장점
  - 상태 관리가 필요 없으므로 간단한 폼에 적합하며, **`성능적으로도 유리`**할 수 있습니다.
  - 작은 폼이나 **`상태가 필요 없는 경우 사용하기 쉽습니다.`**
  ### 단점
  - 입력 값을 **`실시간으로 검증하거나 조작하기 어려우며`**, 폼 데이터와 관련된 논리를 관리하는 데 제약이 있을 수 있습니다.
  - **`DOM에 직접 접근`**하기 때문에 **`React의 단방향 데이터 흐름을 벗어나는 경우`**가 생길 수 있습니다.

### react-hook-form & yup 🍠

**`react-hook-form`**과 **`yup`**은 React에서 폼을 간편하게 관리하고, 유효성 검사를 수행하는 데 유용한 라이브러리 입니다. 두 개의 라이브러리를 함께 사용하면, 폼 입력 관리와 검증 과정을 매우 효율적으로 처리할 수 있습니다.

현재, 여기서는 **`yup`**을 통한, **`validation`**을 설명하지만, 혹시라도, 본인이 작업하시는 프로젝트가 **`TypeScript`**시라면, **`zod`**를 사용하는 것이 조금 더 유리할 수도 있으니, **`zod`**를 더욱 추천드립니다!
