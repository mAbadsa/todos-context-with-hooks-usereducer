import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

export const TodosContext = createContext();

const defaultTodo = [
  { id: 1, task: "New Task!!!", completed: true },
  { id: 1, task: "New Task!!!", completed: true },
];

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodo);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
