import React from "react";

export default function ToDo({ todo, togleTodo }) {
  function handleTodoClick() {
    console.log(todo.id);
    togleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
