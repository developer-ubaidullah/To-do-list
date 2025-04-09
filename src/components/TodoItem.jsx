import React from 'react';
import '../styles/TodoItem.css'; // 👈 Import CSS file

const TodoItem = ({ todo, handleEdit, handleDelete }) => {
  return (
    <div className="todo-card">
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <div className="todo-actions">
        <button className="edit-btn" onClick={() => handleEdit(todo._id)}>Edit</button>
        <button className="delete-btn" onClick={() => handleDelete(todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

