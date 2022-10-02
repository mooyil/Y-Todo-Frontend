import Liste from "./Components/Liste";
import Navbar from "./Components/Navbar";
import Snackbar from "./Components/Snackbar";
import TextFeldundButton from "./Components/TextFeldundButton";
import React from "react";
import Sidebar from "./Components/Sidebar";
import { SidebarProvider } from "./Context/SidebarContext";
import TodoButton from "./Components/TodoButton";
import { TextFeldundButtonProvider } from "./Context/TextFeldundButtonContext";

function App() {
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [snackbar, setSnackbar] = React.useState("");

  return (
    <div className="app-container">
      <TextFeldundButtonProvider>
        <SidebarProvider>
          <Navbar />
          <Sidebar />
        </SidebarProvider>
        <TextFeldundButton
          // todoItem={todoItem}
          setSnackbar={setSnackbar}
        />
        <Liste
          // todoItem={todoItem}
          updatedTodo={updatedTodo}
          setUpdatedTodo={setUpdatedTodo}
        />
        <TodoButton
          // todoItem={todoItem}
          snackbar={snackbar}
          setSnackbar={setSnackbar}
        />
      </TextFeldundButtonProvider>
      <Snackbar Classname={snackbar} />
    </div>
  );
}

export default App;
