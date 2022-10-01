import Liste from "./Components/Liste";
import Navbar from "./Components/Navbar";
import Snackbar from "./Components/Snackbar";
import TextFeldundButton from "./Components/TextFeldundButton";
import React from "react";
import Sidebar from "./Components/Sidebar";
import { Link } from "react-router-dom";
import { SidebarProvider } from "./Context/SidebarContext";
import TodoButton from "./Components/TodoButton";

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
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
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
      <TodoButton
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        tasks={tasks}
        setTasks={setTasks}
        todoItem={todoItem}
        snackbar={snackbar}
        setSnackbar={setSnackbar}
      />
    </div>
  );
}

export default App;
