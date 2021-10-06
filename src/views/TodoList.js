import React, { useState } from "react";
import TodosForm from "../components/todos/TodosForm";
import Todos from "../components/todos/Todos";

const TodoList = () => {
  const initialState = [
    { id: 1, title: "pick a book from library", done: false },
    { id: 2, title: "go to GYM at 10:00 AM", done: true },
    { id: 3, title: "Do my Homework", done: false },
    { id: 4, title: "Hangout with my friends", done: true },
  ];

  const [todos, setTodos] = useState(initialState);
  // mode => add || not-done || edit
  const [activeTodo, setActiveTodo] = useState({});
  const [mode, setMode] = useState("add");

  const changeTodo = (id) => {
    const curTodo = [...todos];
    const newTodo = curTodo.map((el) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      }
      return el;
    });
    setTodos(newTodo);
  };

  const addTodo = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: Date.now(),
        title: title,
        done: false,
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    } else {
      const curTodos = [...todos];
      const newTodos = curTodos.map((el) => {
        if (el.id === activeTodo.id) {
          el.title = title;
          return el;
        }
        return el;
      });
      setTodos(newTodos);
      setActiveTodo({});
      setMode("");
    }
  };

  const deleteTodo = (id) => {
    const curTodo = [...todos];
    const newTodo = curTodo.filter((el) => el.id !== id);
    setTodos(newTodo);
  };

  const showFilterTodo = () => {
    if (mode === "not-done") {
      setMode("add");
    } else {
      setMode("not-done");
    }
  };
  let currentTodos = [...todos];
  if (mode === "not-done") {
    currentTodos = currentTodos.filter((todo) => !todo.done);
  }

  const editTodoHandler = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };
  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodosForm
            addTodo={addTodo}
            showFilterTodo={showFilterTodo}
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            mode={mode}
          />
          <Todos
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
            editTodoHandler={editTodoHandler}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
