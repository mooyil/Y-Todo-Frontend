import axios from "axios";
import React from "react";
import { createContext } from "react";

export const TextFeldundButtonContext = createContext();

export function TextFeldundButtonProvider(props) {
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");
  const [count, setCount] = React.useState(0);

  return (
    <TextFeldundButtonContext.Provider
      value={{
        todoInputValue,
        setTodoInputValue,
        tasks,
        setTasks,
        count,
        setCount,
      }}
    >
      {props.children}
    </TextFeldundButtonContext.Provider>
  );
}