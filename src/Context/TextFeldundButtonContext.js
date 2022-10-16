import axios from "axios";
import React from "react";
import { createContext } from "react";

export const TextFeldundButtonContext = createContext();

export function TextFeldundButtonProvider(props) {
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");
  const [count, setCount] = React.useState(0);

  // let sortedTodos
  //Sortieren
  // const sortieren = React.useEffect(() => {
    // function sortTodos(date1, date2) {
    //   const dateA = new Date(date1.date);
    //   const dateB = new Date(date2.date);

    //   if (dateA > dateB) {
    //     return 1;
    //   } else if (isNaN(dateA)) {
    //     return 1;
    //   } else if (dateA < dateB) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // }
  //  sortedTodos = tasks.sort(sortTodos);
  //  setTasks(sortedTodos)
  // }, [count]);


  return (
    <TextFeldundButtonContext.Provider
      value={{
        todoInputValue,
        setTodoInputValue,
        tasks,
        setTasks,
        // sortieren,
        count,
        setCount,
      }}
    >
      {props.children}
    </TextFeldundButtonContext.Provider>
  );
}
