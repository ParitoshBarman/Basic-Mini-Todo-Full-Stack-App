import { useEffect, useState } from "react";
import "../styles/TodoPage.css";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const fetchTodos = async () => {
    const res = await fetch(`${API_URL}/todos`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, completed: false }),
    });
    if (res.ok) {
      setTitle("");
      fetchTodos();
    }
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTodos();
  };

  const handleToggleComplete = async (id, currentStatus) => {
    await fetch(`${API_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ completed: !currentStatus }),
    });
    fetchTodos();
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input-group">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New Todo" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo._id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span>{todo.title}</span>
            <div className="todo-actions">
              <button onClick={() => handleToggleComplete(todo._id, todo.completed)}>
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button className="delete-btn" onClick={() => handleDelete(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
