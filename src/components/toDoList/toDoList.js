import React from 'react';
import './toDoList.css';

const ToDoList = ({ todos, onDeleteTodo }) => (
  <ul className="ToDoList">
    {todos.map(({ id, text }) => (
      <li className="ToDoList__Item" key={id}>
        <p className="ToDoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Видалити</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
