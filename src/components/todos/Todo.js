import React from "react";
import FeatherIcon from "feather-icons-react";

const Todo = (props) => {
  let { id, title, done } = props.todo;
  return (
    <div className={done ? "todos-todo done" : "todos-todo"}>
      <div className="todos-todo_icon" onClick={() => props.changeTodo(id)}>
        <FeatherIcon icon={done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text">{title}</div>
      <div className="todos-todo_cta">
        <div
          className="todos-todo_cta-edit"
          onClick={() => props.editTodoHandler(props.todo)}
        >
          <FeatherIcon icon="edit" />
        </div>
        <div
          className="todos-todo_cta-delete"
          onClick={() => props.deleteTodo(id)}
        >
          <FeatherIcon icon="trash" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
