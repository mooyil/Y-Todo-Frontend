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
import { TabsContext } from "./Context/TabsContext";

function App() {
  const [updatedTodo, setUpdatedTodo] = React.useState([]);
  const [snackbar] = React.useContext(SnackbarContext);
  const [dateValue] = React.useContext(DateTimePickerContext);
  const { todoInputValue } = React.useContext(TextFeldundButtonContext);
  const { tabValue, setTabValue, TabPanel, handleTabsValue } =
    React.useContext(TabsContext);

  let displayedDate;

  if (dateValue != null) {
    displayedDate = dateValue.$d.toDateString();
  } else {
    console.log("dateValue is null");
  }

  let todoItem = {
    content: todoInputValue,
    userId: "mikail",
    done: false,
    date: displayedDate,
  };

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <TextFeldundButton todoItem={todoItem} />

      <TabPanel value={tabValue} index={0}>
        <Liste
          displayedDate={displayedDate}
          todoItem={todoItem}
          updatedTodo={updatedTodo}
          setUpdatedTodo={setUpdatedTodo}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Liste
          displayedDate={displayedDate}
          todoItem={todoItem}
          updatedTodo={updatedTodo}
          setUpdatedTodo={setUpdatedTodo}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Liste
          displayedDate={displayedDate}
          todoItem={todoItem}
          updatedTodo={updatedTodo}
          setUpdatedTodo={setUpdatedTodo}
        />
      </TabPanel>
      <TodoButton todoItem={todoItem} />
      <Snackbar Classname={snackbar} />
    </div>
  );
}

export default App;
