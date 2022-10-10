import React from "react";
import { createContext } from "react";

export const TextFeldundButtonContext = createContext();

export function TextFeldundButtonProvider(props) {
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");
  const [count, setCount] = React.useState(0);

  //Sortieren
  const sortieren = React.useEffect(() => {
    function hello(datee, date1) {
      const dateA = new Date(datee.date);
      const dateB = new Date(date1.date);

      if (dateA > dateB) {
        return 1;
      } else if (dateA < dateB) {
        return -1;
      } else {
        return 0;
      }
    }
    tasks.sort(hello);
  }, [count]);

  return (
    <TextFeldundButtonContext.Provider
      value={{
        todoInputValue,
        setTodoInputValue,
        tasks,
        setTasks,
        sortieren,
        count,
        setCount,
      }}
    >
      {props.children}
    </TextFeldundButtonContext.Provider>
  );
}
