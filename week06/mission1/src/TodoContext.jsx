import { createContext, useContext, useState } from "react";

// Create the Context
const TodoContext = createContext();

// Create a Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "회원 혜원 혜윤 건 찬민" },
  ]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  // Add todo
  const addTodo = () => {
    if (text.trim().length > 0) {
      setTodos((prev) => [
        ...prev,
        { id: Math.floor(Math.random() * 100) + 2, task: text },
      ]);
      setText("");
    } else {
      alert("빈 문자열은 추가할 수 없습니다.");
    }
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Update todo
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
    setEditText("");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        editingId,
        setEditingId,
        editText,
        setEditText,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the TodoContext
export const useTodoContext = () => useContext(TodoContext);
