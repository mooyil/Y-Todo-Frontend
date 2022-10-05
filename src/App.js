import Liste from "./Components/Liste";
import Navbar from "./Components/Navbar";
import Snackbar from "./Components/Snackbar";
import TextFeldundButton from "./Components/TextFeldundButton";
import React from "react";
import Sidebar from "./Components/Sidebar";
import { TextFeldundButtonContext } from "./Context/TextFeldundButtonContext";
import TodoButton from "./Components/TodoButton";
import { SnackbarContext } from "./Context/SnackbarContext";
import { DateTimePickerContext } from "./Context/DateTimePickerContext";

function App() {
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [snackbar] = React.useContext(SnackbarContext);
  const [dateValue] = React.useContext(DateTimePickerContext);
  const { todoInputValue } = React.useContext(TextFeldundButtonContext);

  let displayedDate

  if (dateValue != null) {
     displayedDate = dateValue.$d.toDateString();
  } else {
    console.log("dateValue is null")
  }

  let todoItem = {
    content: todoInputValue,
    userId: "mikail",
    done: false,
    date: displayedDate
  };

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <TextFeldundButton todoItem={todoItem} />
      <Liste
        displayedDate={displayedDate}
        todoItem={todoItem}
        updatedTodo={updatedTodo}
        setUpdatedTodo={setUpdatedTodo}
      />
      <TodoButton todoItem={todoItem} />
      <Snackbar Classname={snackbar} />
    </div>
  );
}

export default App;
