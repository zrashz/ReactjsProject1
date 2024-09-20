import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, filter }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'uncompleted') return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </ul>
  );
};

export default TodoList;
