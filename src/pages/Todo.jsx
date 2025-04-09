import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from '../components/TodoItem';
import '../styles/Todo.css';
import Logo from '../assets/Dark_logo.png';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('http://localhost:5000/api/todo', {
        headers: { Authorization: token },
      });
      setTodos(response.data);
    }
  };

  const handleAddOrUpdate = async () => {
    const token = localStorage.getItem('token');
    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/api/todo/${editId}`,
          { title, description },
          { headers: { Authorization: token } }
        );
        setEditId(null);
      } else {
        await axios.post(
          'http://localhost:5000/api/todo',
          { title, description },
          { headers: { Authorization: token } }
        );
      }
      setTitle('');
      setDescription('');
      fetchTodos();
    } catch (error) {
      console.error(error);
      alert('Error saving todo!');
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/todo/${id}`, {
        headers: { Authorization: token },
      });
      fetchTodos();
    } catch (error) {
      console.error(error);
      alert('Error deleting todo!');
    }
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo._id === id);
    setTitle(todoToEdit.title);
    setDescription(todoToEdit.description);
    setEditId(id);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h2 className="todo-heading">
          <img src={Logo} alt="Logo" />
          To-Do List
        </h2>


        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAddOrUpdate}>
            {editId ? 'Update Todo' : 'Add Todo'}
          </button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="no-todo">No todos yet. Add one!</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
