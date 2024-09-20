import React from 'react';

const TodoItem = ({ todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  const toggleComplete = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={toggleComplete}>
        {todo.completed ? 'Uncomplete' : 'Complete'}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
