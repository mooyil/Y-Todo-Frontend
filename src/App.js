import Liste from "./Components/Liste";
import Navbar from "./Components/Navbar";
import Snackbar from "./Components/Snackbar";
import TextFeldundButton from "./Components/TextFeldundButton";
import React from "react";

function App() {
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");
  const [snackbar, setSnackbar] = React.useState("");

  let todoItem = {
    content: todoInputValue,
    userId: "mikail",
    done: false,
  };

  return (
    <div className="app-container">
      <Navbar />
      <TextFeldundButton
        todoItem={todoItem}
        tasks={tasks}
        setTasks={setTasks}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        setSnackbar={setSnackbar}
      />
      <Liste
        todoItem={todoItem}
        tasks={tasks}
        setTasks={setTasks}
        updatedTodo={updatedTodo}
        setUpdatedTodo={setUpdatedTodo}
      />
      <Snackbar Classname={snackbar} />
    </div>
  );
}

export default App;
