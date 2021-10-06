import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
const TodosForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [editRender, setEditRender] = useState(false);

  if (props.mode === "edit" && !editRender) {
    setNewTitle(props.todos[0].title);
    setEditRender(true);
  }
  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const addNewTodoHandler = () => {
    const nTitle = newTitle;
    setNewTitle("");
    setEditRender(false);
    return props.addTodo(nTitle);
  };

  let inputText = document.querySelector(".todos-form_form input");
  let btnString = "Submit";
  if (props.mode === "edit") {
    inputText.value = props.todo;
    btnString = "Edit";
  }
  return (
    <div className="todos-form">
      <div className="todos-form_icon" onClick={() => props.showFilterTodo()}>
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          className=""
          placeholder="Add New Task"
          onChange={newTitleHandler}
          value={newTitle}
        />
      </div>

      <div className="todos-form_submit">
        <button
          className="btn"
          type="submit"
          onClick={addNewTodoHandler}
          disabled={newTitle.trim() ? false : true}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
