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
  const [snackbar] = React.useContext(SnackbarContext);
  const [dateValue] = React.useContext(DateTimePickerContext);
  const { todoInputValue, tasks } = React.useContext(TextFeldundButtonContext);
  const {
    tabValue,
    setTabValue,
    TabPanel,
    handleTabsValue,
    currentTab,
    setCurrentTab,
    listTabs,
    setListTabs,
  } = React.useContext(TabsContext);

  let displayedDate;

  if (dateValue != null) {
    displayedDate = dateValue.$d.toDateString() + "  " + dateValue.$d.toLocaleTimeString()
  }

  let todoItem = {
    content: todoInputValue,
    userId: "mikail",
    done: false,
    date: displayedDate,
    tab: currentTab,
  };

  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <TextFeldundButton todoItem={todoItem} />
      {listTabs.map((tab, i) => {
        return (
          <TabPanel value={tabValue} key={i} index={i}>
            <Liste displayedDate={displayedDate} todoItem={todoItem} />
          </TabPanel>
        );
      })}

      <TodoButton todoItem={todoItem} />
      <Snackbar Classname={snackbar} />
    </div>
  );
}

export default App;
