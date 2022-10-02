import Liste from "./Components/Liste";
import Navbar from "./Components/Navbar";
import Snackbar from "./Components/Snackbar";
import TextFeldundButton from "./Components/TextFeldundButton";
import React from "react";
import Sidebar from "./Components/Sidebar";
// import { SidebarProvider } from "./Context/SidebarContext";
import TodoButton from "./Components/TodoButton";
import { SnackbarContext } from "./Context/SnackbarContext";
// import { TextFeldundButtonProvider } from "./Context/TextFeldundButtonContext";

function App() {
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [snackbar, setSnackbar] = React.useContext(SnackbarContext)

  return (
    <div className="app-container">
          <Navbar />
          <Sidebar />
        <TextFeldundButton
        />
        <Liste
          updatedTodo={updatedTodo}
          setUpdatedTodo={setUpdatedTodo}
        />
        <TodoButton
        />
      <Snackbar Classname={snackbar} />
    </div>
  );
}

export default App;
