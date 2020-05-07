import React, { createContext, useReducer } from "react";
// import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reduces";

export const TodosContext = createContext();

const defaultTodo = [
  { id: 1, task: "New Task!!!", completed: true },
  { id: 1, task: "New Task!!!", completed: true },
];

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodo);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
