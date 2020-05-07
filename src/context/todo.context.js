import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reduces";

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodo = [
  { id: 1, task: "New Task__1!!!", completed: true },
  { id: 2, task: "New Task__2!!!", completed: false },
];

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodo,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
