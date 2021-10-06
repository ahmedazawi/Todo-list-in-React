import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos-list">
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            changeTodo={props.changeTodo}
            deleteTodo={props.deleteTodo}
            editTodoHandler={props.editTodoHandler}
          />
        );
      })}
      {props.todos.length === 0 ? <h3 className="no-todos">No Tasks</h3> : null}
    </div>
  );
};

export default Todos;
