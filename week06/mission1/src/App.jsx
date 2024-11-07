import { useTodoContext } from "./TodoContext";
import "./App.css";

function App() {
  const {
    todos,
    text,
    setText,
    editingId,
    setEditingId,
    editText,
    setEditText,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="새로운 할 일 입력"
        />
        <button className="add-btn" onClick={addTodo} type="submit">
          할 일 등록
        </button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {/* If not editing */}
            {editingId !== todo.id ? (
              <div className="todo-text">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            ) : (
              <div className="todo-edit">
                <p>{todo.id}.</p>
                <input
                  className="edit-input"
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <div className="todo-actions">
              {editingId === todo.id ? (
                <button
                  className="save-btn"
                  onClick={() => updateTodo(editingId, editText)}
                >
                  수정 완료
                </button>
              ) : (
                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditText(todo.task);
                  }}
                >
                  수정 진행
                </button>
              )}
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
