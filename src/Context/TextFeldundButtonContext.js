import React from "react";
import { createContext } from "react";

export const TextFeldundButtonContext = createContext();

export function TextFeldundButtonProvider(props) {
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");

  return (
    <TextFeldundButtonContext.Provider
      value={{ todoInputValue, setTodoInputValue, tasks, setTasks }}
    >
      {props.children}
    </TextFeldundButtonContext.Provider>
  );
}
